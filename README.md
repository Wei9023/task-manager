# task-manager

## Introduction
This project is a application for task management. User can sign up, login, logout, update and delete the acoun. Also they can manage their task 
by adding, updating, reading and deleting in this application.

## Setup
#### `.env` requirements
* `npm i` install dependencies

#### Running the app
* `npm run dev`
  
## Configuration
#### dev.env
* PORT = 3000
* MONGODB_URL=mongodb://127.0.0.1:27017/task-manager-api
* JWT_SECRET=thisismynewcourse

## Components
```
├── README.md
├── package.json
├── config
│   ├── dev.env
│   └── test.env
└── src
│   ├── db
│   │   └── mongoose.js
│   ├── middleware
│   │   └── auth.js
│   ├── models
│   │   └── task.js
│   │   └── user.js
│   │       ├── actions.js
│   │       ├── if.js
│   │       ├── list.js
│   │       ├── record.js
│   │       ├── record.module.scss
│   │       └── reducers.js
│   ├── routers
│   │   └── task.js
│   │   └── user.js
│   ├── index.js
│   └── app.js
└── tests 
    └── user.test.js
```



