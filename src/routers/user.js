const express = require('express');
const User = require('../models/user')
const auth = require('../middleware/auth')
const router = new express.Router();
const multer = require('multer');

router.post('/users', async( req, res) => {
    const user = new User(req.body)
    const token = await user.generateAuthToken()
    try {
        await user.save();
        res.status(201).send({ user, token } );
    } catch(e){
        res.status(400).send(e);
    }
})


router.post('/users/login', async (req, res) =>{
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({ user, token })
    } catch(e) {
        res.status(400).send()
    }
})

router.get('/users/me', auth, async (req, res) => {
   res.send(req.user);
})

router.get('/users/:id', async (req, res) => {
    const _id = req.params.id

    try {
        const user = await User.findById(_id);
        if( !user){
            return res.status(404).send()
        }
        res.send(user);
    } catch(e) {
        res.status(500).send()
    }
})

router.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'email', 'password', 'age'];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if(!isValidOperation){
        return res.status(400).send( {error: 'Invalid updates!'})
    }
    try {
        //const user = await User.findById(req.params.id)
        updates.forEach((update) => req.user[update] = req.body[update])
        await req.user.save();
        //const user = await User.findByIdAndUpdate(req.params.id, req.body, { new : true, runValidators: true });
        res.send(req.user)
    } catch (e) {
        res.status(400).send(e);
    }
})

router.delete('/users/me', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send()
    }
})

const upload = multer({
    dest: 'avatar',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb){
        if(!file.originalname.match(/\.(jpg|jpeg|png)$/)){
            return cb(new Error('Please upload an image'))
        }
        cb(undefined, true)
        // cb(new Error('File must be a PDF'))
        // cb(undefined, true)
    }
})

router.post('/users/me/avatar', upload.single('avatar'), (req, res) => {
    res.status(200).send('Avatar uploaded')
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message})
})

module.exports = router

