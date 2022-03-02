const express = require('express')
require('./db/mongoose');

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000


const multer = require('multer');
const upload = multer({
    dest: 'images'
})
app.post('/upload', upload.single('upload'), (req, res) => {
    console.log(req.file)
    res.send('file uploaded')
})


app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port' + port)
})


// const jwt = require('jsonwebtoken');
// const { nextTick } = require('process');
// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123'} , 'thisisynewcourse', { expiresIn: '7 days'})
//     console.log(token)

//     const data = jwt.verify(token, 'thisisynewcourse')
//     console.log(data)
// }

// myFunction()