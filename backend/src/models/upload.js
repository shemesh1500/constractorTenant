const mongoose = require('mongoose')
const multer = require('multer')
const User = require('../models/user')


const imageSchem = new mongoose.Schema({
    image:{
        type : Buffer,
        required : true
    },
    description:{
        type: String,
        required : true
    },
    owner:{
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref: 'User'
    }/*,
    HOW TO LINK ONE FILE TO MULTI USERS
    refTo:[{
        refUser : {
            type : mongoose.Schema.Types.ObjectId,
            required:true,
            ref: 'User'
        }
    }]
*/
})
const uploadFile = mongoose.model('uploadFile' , imageSchem)

module.exports = uploadFile

/*
const uploadFileMulter = multer({
    dest: 'files',
    limits: {
        fileSize: 1000000 //1MB
    },
    fileFilter(req, res, cb){
        if(!file.originalname.match(/\.(jng|jpeg|png)$/)){
            return cb(new Error('Please provide file'))
        }

        cb(undefined, true)
    }
})

module.exports = uploadFileMulter
*/





