//CRUD creat read update delete

// const mongodb = require('mongodb');
// const MongoClient = mongodb.MongoClient;
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id)s
// console.log(id.getTimestamp());

MongoClient.connect(connectionURL, { useUnifiedTopology: true }, (error, client) =>{
    if (error) {
        return console.log('Unable to connect to database');
    }
    console.log('Connected correctly!')
    const db = client.db(databaseName)

    // db.collection('users').findOne({  _id : new ObjectID('6201878e8aa5f0bed3720290')}, (error, user) => {
    //     if (error) {
    //         return console.log( 'Unable to fetch');
    //     }
    //     console.log(user);
    // })

    // db.collection('users').find( { age : 7}).toArray((error, users) => {
    //     console.log(users);
    // })

    // db.collection('users').find( {age : 7}).count((error, count) => {
    //     console.log(count);
    // })

    db.collection('tasks').findOne( { _id : new ObjectID("62018270140a51be570c2c82")}, (error, task) => {
        if (error) {
            return console.log( 'Unable to fetch');
        }
        console.log(task);
    })

    db.collection('tasks').find ( { completed : false}).toArray((error, tasks) => {
        console.log(tasks);
    })
})