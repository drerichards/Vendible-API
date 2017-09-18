const chai = require('chai'),
    chaiHttp = require('chai-http'), {app} = require('../index'),
    should = chai.should(),
    User = require('../models/LocalUser')

chai.use(chaiHttp)

let credentials = {
    first_name: 'Andre',
    last_name: 'Richa',
    email: 'test@test.com',
    password: 'test'
}

describe('Sign Up', () => {
    it('should POST a new user', (done) => {
        chai.request(app).post('/user/signup').send(credentials).then((res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.an('object')
                res.body.should.have.property('_id')
                res.body.should.have.property('first_name', 'Andre')
                res.body.should.have.property('last_name', 'Richa')
                res.body.should.have.property('email', 'test@test.com')
                res.body.should.have.property('password')
                done()
            })
    })
})

describe('Log In', () => {
    it('should VERIFY existing user credentials', (done) => {
        chai.request(app).post('/user/login').send(credentials).then((res) => {
                res.should.have.status(200)
                res.should.be.json
                res.body.should.be.an('object')
                res.body.should.have.property('_id')
                res.body.should.have.property('email', 'test@test.com')
                res.body.should.have.property('password')
                done()
            })
    })
})