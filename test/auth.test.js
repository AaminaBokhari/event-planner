const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app'); // Import your Express app
const expect = chai.expect;

chai.use(chaiHttp);

describe('Authentication', () => {
  it('should register a new user', (done) => {
    chai.request(app)
      .post('/api/auth/register')
      .send({ username: 'testuser', email: 'test@example.com', password: 'password123' })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});