const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

const userModel = require('../models/user.model')

const registerUser = (async (req, res) => {

    const { name, email, password } = req.body;

    if (!name || !email) {
        return res.status(404).json({
            message: 'Invalid email or password'
        });
    }

    try {
        const existingUser = await userModel.findOne({ email });

        if (existingUser) {
            return res.status(409).json({
                message: 'User already exists'
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const userData = {
            name,
            email,
            password: hashedPassword
        }

        const user = await userModel.create(userData)

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax"
        });

        res.status(201).json({
            message: 'User registered Successfully',
            user: {
                _id: user._id,
                email: user.email,
                fullName: user.fullName,
                isAdmin: user.isAdmin,
                profilePic: user.profilePic
            }
        });
    } catch (err) {
        console.log(err.message);

        return res.status(500).json({
            message: 'something went wrong'
        })
    }

});

const loginUser = (async (req, res) => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(404).json({
                message: 'bad request'
            });
        }

        const user = await userModel.findOne({email});

        if(!user){
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Invalid email or password'
            });
        }

        const token = jwt.sign(
            { id: user._id },
            process.env.JWT_SECRET,
            { expiresIn: rememberMe ? "30d" : "1d" }
        );

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
            maxAge: rememberMe ? 30 * 24 * 60 * 60 * 1000 : 24 * 60 * 60 * 1000,
        });

        return res.status(200).json({
            message: 'user logged in successfully',
            user: {
                _id: user._id,
                name: user.name,
                email: user.email
            }
        })
    }catch(err){

    }
})

module.exports = {
    registerUser
}