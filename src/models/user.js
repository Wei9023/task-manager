const mongoose = require('mongoose')
const { boolean } = require('webidl-conversions')
const validator = require('validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        trim : true
    }, 
    age : {
        type: Number,
        default : 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age must be a postive number');
            }
        }
    },
    email : {
        type : String,
        unique: true,
        required : true,
        lowercase : true,
        trim : true,
        validate(value){
            if(!validator.isEmail(value)) {
                throw new Error('Email is invalid');
            }
        }
    },
    password : {
        type : String,
        required : true,
        trim : true,
        minlength : 7,
        validate(value){
            if(value.toLowerCase().includes('password')){
                throw new Error('password should should not contain the word "password"')
            }
        }
    },
    tokens : [ {
        token : {
            type : String,
            required : true
        }
    }]
});

userSchema.statics.findByCredentials = async (email, password) => {
    const user = await User.findOne( { email })

    if( !user ){
        throw new Error('Uable to login')
    }
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Uable to login')
    }
    return user
}

userSchema.methods.generateAuthToken = async function(){
    const user = this
    const token = jwt.sign({ _id: user._id.toString()}, 'thisismynewcourse')
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token
}

//hash the plain text password before saving
userSchema.pre('save', async function (next){
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})


const User = mongoose.model('User', userSchema)

module.exports = User