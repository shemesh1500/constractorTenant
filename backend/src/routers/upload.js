const express = require('express')
const multer = require('multer')
const uploadFile = require('../models/upload')
const auth = require('../middleware/auth')
const user = require('../models/user')

const router = express.Router()

const uploadFileMulter = multer({
    limits: {
        fileSize: 1000000 //1MB
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please provide file'))
        }
        cb(undefined, true)
    }
})

router.post('/users/upload/:desc/:refUser', auth, uploadFileMulter.single('upload'), async (req,res) => {
    console.log(req.params.desc)
    console.log(req.params.refUser)
    const newFile = new uploadFile({image: req.file.buffer, description: req.params.desc, owner: req.user._id})
    //await newFile.save()
    res.status(201).send()
}, (error, req, res, next) => {
    res.status(401).send({ error: error.message })
})

module.exports = router