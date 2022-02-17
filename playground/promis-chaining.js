require('../src/db/mongoose');
const Task = require('../src/models/task');
const User = require('../src/models/user');

// Task.findByIdAndDelete('62041711ed7f3ee8cac8c257').then((task) => {
//     console.log(task);
//     return Task.countDocuments({completed : false});
// }).then((result) => {
//     console.log(result);
// }).catch((e) => {
//     console.log(e);
// })

const deleteTaskAndCount = async (id) => {
    const task = await Task.findByIdAndDelete(id);
    const count = await Task.countDocuments({ completed : false});
    return count
}

// const updateAgeAndCount = async(id, age) => {
//     const user = await User.findByIdAndUpdate(id, {age})
//     const count = await User.countDocuments( {age});
//     return count 
// }

// updateAgeAndCount('620582ffd34d56ec07bef953', 34).then((count) => {
//     console.log(count)
// }).catch((e) => {
//     console.log(e)
// })

deleteTaskAndCount('62044655c000c18ba1dcc527').then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e);
})