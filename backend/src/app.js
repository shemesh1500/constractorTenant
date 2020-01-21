const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const uploadRouter = require('./routers/upload')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)
app.use(uploadRouter)

app.listen(port, () => {
    console.log('Server is up on port' + port)
})


//const User = require('./models/user')
const main = async () => {
    //const upload = await Upload.findById("5e15ab1ffe696731907a023e")
    //await upload.populate('owner').execPopulate() 
    //console.log(upload.owner)

    const user = await User.findById("5e15aa9490a7161004de10eb")
    await user.populate('images').execPopulate()
    console.log(user.images)
}

//main()