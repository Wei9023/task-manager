const request = require('supertest');
const app = require('../src/app')

test('Should signup a new user', async () => {
    await request(app).post('/users').send({
        name: 'Natalie',
        email: 'valwwei@gmail.com',
        password: '123456788'
    }).expect(201)  

})