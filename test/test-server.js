const chai = require('chai'),
    chaiHttp = require('chai-http'), {app} = require('../index'),
    should = chai.should()

chai.use(chaiHttp)
describe('Root path', () => {
    it('Returns root path 200 status code', (done) => {
        chai.request(app).get('/').end((err, res) => {
                res.should.have.status(200)
            })
        done()
    })
})

describe('Index path', () => {
    it('Returns index path at status code 200', (done) => {
        chai.request(app).get('/index.html').end((err, res) => {
                res.should.have.status(200)
            })
        done()
    })
})