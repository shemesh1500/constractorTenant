const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const basicUserSchema = new mongoose.Schema({
    first_name: {
        type:String,
        required: true,
    },
    last_name: {
        type: String,
        required: true
    },
    email: {
        type: String, 
        required: true, 
        trim: true, 
        lowercase: true, 
       // unique:true,
        validate(value){
            if(!(validator.isEmail(value))){
                throw new Error("Email is not valid");
            }
        }
    },
    phone_num: { 
        type: String, 
        required: true,
        validate(value){
            return value.match(/\d/g).length===10;
        }
    },
    password: {
        type: String,
        required: true,
        validate(value){
            if (value.toLowerCase().includes('password')){
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens:[{
        token : {
            type: String,
            required: true
        }
    }]
});

basicUserSchema.virtual('images', {
    ref:'uploadFile',
    localField:'_id',
    foreignField:'owner'
})

basicUserSchema.methods.toJSON = function(){
    const user = this
    const userObj = user.toObject()

    delete userObj.password
    delete userObj.tokens

    return userObj
}

//Generate new token for the user
basicUserSchema.methods.generateAuthToken = async function(){
    
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, "secretString")
    
    user.tokens = user.tokens.concat({token})
    await user.save()

    return token
}

basicUserSchema.statics.findByCredentials = async (email, password) =>{
    
    const user = await User.findOne({email})
    if(!user){
        throw new Error('Wrong email')
    }
    
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch){
        throw new Error('Invalide password')
    }

    return user
}

//Hash the password before save it
basicUserSchema.pre('save', async function(next) {
    const user = this

    if(user.isModified('password')){
        user.password = await bcrypt.hash(user.password, 12)
    }

    next()
})

const User = mongoose.model('User', basicUserSchema) 

module.exports = User;