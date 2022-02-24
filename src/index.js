const express = require('express')
require('./db/mongoose');
//const User = require('./models/user')
//const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express();
const port = process.env.PORT || 3000

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(port, () => {
    console.log('Server is up on port' + port)
})


// const Task = require('./models/task')

// const User = require('./models/user')

// const main = async() => {
//     // const task = await Task.findById("6216aabcc122a9474ef9837a")
//     // await task.populate('owner')
//     // console.log(task.owner);

//     const user = await User.findById('6216aa084a31863138dd2d1b')
//     await user.populate('tasks')
//     console.log(user.tasks)
// }

// main()
