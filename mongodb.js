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

    // db.collection('users').updateOne( { 
    //     _id : new ObjectID("62017be4e06adabdbc59ee86")
    // }, {
    //     $inc : {
    //         age : 1
    //     }
    // }).then((result) => {
    //     console.log(result);
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('tasks').updateMany( {
        completed : false
    }, {
        $set: {
            completed: true
        }
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})
