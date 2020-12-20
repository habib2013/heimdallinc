/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';

import app from '../app';

chai.use(chaiHttp);

describe('Testing Question 2 Solution Controller', () => {
  describe('Testing Remove Property from Object Endpoint', () => {
    const data = {
      type: 'durban',
      crux: 'Indices',
      color: 'green',
      title: 'Indict the idiot',
    };
    const removeObjectPropertyUrl = '/api/v1/question-two-solutions/remove-prop-from-object';
    it(
      'should return "data" object without property corresponding to string value stored in item',
      (done) => {
        chai.request(app)
          .patch(removeObjectPropertyUrl)
          .send({
            data,
            item: 'type',
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(200);
            expect(response.body.status).to.equal(200);
            expect(response.body).to.have.property('data');
            expect(response.body.data).to.be.an('object');
            expect(response.body.data).to.have.property('crux');
            expect(response.body.data).to.have.property('color');
            expect(response.body.data).to.have.property('title');
            expect(response.body.data.type).to.equal(undefined);
            expect(Object.keys(response.body.data).length).to.equal(3);
            done();
          });
      },
    );

    it(
      'should return "attribute not found" when string value in property "item" does not exist as a property on "data" object',
      (done) => {
        chai.request(app)
          .patch(removeObjectPropertyUrl)
          .send({
            data,
            item: 'nonExistentItem',
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('error');
            expect(response.body.error).to.be.a('string');
            expect(response.body.error).to.equal('attribute not found');
            done();
          });
      },
    );
  });
});
