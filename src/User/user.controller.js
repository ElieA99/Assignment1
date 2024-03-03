const joi = require('joi');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const User = require('./userModel');
const bcrypt = require('bcrypt');
dotenv.config()

//validation
const userValidation = joi.object({
    name: joi.string().required(),
    email: joi.string().required(),
    password: joi.string().min(6).required(),
});

//function for signup
async function signIn(req, res) {
    try {
        const { name, email, password, dateOfBirth } = req.body;
        const salt = await bcrypt.genSalt(12);

        //validation
        const value = userValidation = joi.validate({ name, email, password });
        if (value) { throw new Error(value.message) };

        //lets check if email is already registered
        const ifExist = await User.findOne({ email });
        if (ifExist) { return res.status(500).json({ error: 'Email is already registered' }); }

        //hashing the password and saving all the data in the db
        const hashed = await bcrypt.hash(password, salt)
        const newUser = new User({ name, email, password: hashed, dateOfBirth });
        await newUser.save();

        return res.status(200).json({ message: 'New User Created.' });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function for login
async function login(req, res) {
    const secret = process.env.JWTKEY
    try {
        const { email, password } = req.body;

        //validation
        const value = userValidation = joi.validate({ email, password });
        if (value) { throw new Error(value.message) };

        //check if user exist
        const ifUserExists = await User.findOne({ email });
        if (!ifUserExists) { return res.status(404).json({ message: 'ُCheck email or password !' }); }

        //we need to check if the given password matches the one in the db 
        const checkPwd = await bcrypt.compare(password, ifUserExists.password);
        if (!checkPwd) { return res.status(500).json({ message: 'ُInvalid email or password !' }); }

        //JWT
        //var token = jwt.sign({user:User._id},'secret');
        var token = jwt.sign({ user: User._id }, secret);

        return res.status(200).json({ message: 'Welcome Back', token });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};


module.exports = { signIn, login };