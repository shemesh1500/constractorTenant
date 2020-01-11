const express = require('express')
const User = require('../models/user')
const auth = require('../middleware/auth')

const router = express.Router()

router.post("/users", async (req, res) => {
    const new_user = new User(req.body)


    try{
        await new_user.save()
        const new_token = await new_user.generateAuthToken()
        res.status(201).send({ new_user, new_token })   
    }catch(err){
        res.status(401).send(err)
    }
})


router.post('/users/login',  async (req,res) =>{
    try{  
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()

        res.status(200).send({user, token})
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }    
})

router.post('/users/logout', auth, async (req, res) => {
    
    try{
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token
        })
        await user.save()
        res.send("logout")
    }catch(err){
        res.status(500).send(err)
    }
})

router.post('/users/logoutAll', auth, async (req, res) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.send()
    }catch(err){
        res.status(500).send(err)
    }
})

router.get('/users/me', auth, async (req, res) => {
    res.send(req.user)
})

router.patch('/users/me', auth, async(req, res) => {
    const update_keys = Object.keys(req.body)
    const allowedUpdates = ['first_name', 'last_name', 'password', 'phone_num']
    const isValidOperation = update_keys.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        res.status(400).send({error: 'Invalid parameters for update'})
    }
    try{
        update_keys.forEach((update_key) => req.user[update_key] = req.body[update_key])
        await req.user.save()
        res.status(200).send(req.user)
    }catch(err){
        res.status(400).send(err)
    }
})

router.delete('/users/me', auth, async (req, res) =>{
    try{
        await req.user.remove()
        res.status(200).send(req.user)
    }catch(err){
        res.status(500).send(err)
    }
})

module.exports = router