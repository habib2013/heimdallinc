/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';

import app from '../app';

import extractPropsOfObject from '../helpers/extractPropsOfObject';

chai.use(chaiHttp);

describe('Testing Question 1 Solution Controller', () => {
  describe('Testing Request Body\'s Input Validation', () => {
    const data = {
      type: 'durban',
      crux: 'Indices',
      color: 'green',
      title: 'Indict the idiot',
    };
    const rules = ['type', 'crux', 'color', 'title'];
    const inputValidationUrl = '/api/v1/question-one-solutions/input-validation';
    it(
      'should return "valid" if all the required properties are given in the request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data,
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(200);
            expect(response.body.status).to.equal(200);
            expect(response.body).to.have.property('message');
            expect(response.body.message).to.be.a('string');
            expect(response.body.message).to.equal('valid');
            done();
          });
      },
    );

    it(
      'should return list having only "type" when "type" parameter is missing in request body\'s data prop',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['crux', 'color', 'title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(1);
            expect(response.body.missingData[0]).to.equal('type');
            done();
          });
      },
    );

    it(
      'should return list having "crux" when "crux" parameter is missing in request body\'s data prop',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['type', 'color', 'title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(1);
            expect(response.body.missingData[0]).to.equal('crux');
            done();
          });
      },
    );

    it(
      'should return list having "color" when "color" parameter is missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['type', 'crux', 'title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(1);
            expect(response.body.missingData[0]).to.equal('color');
            done();
          });
      },
    );

    it(
      'should return list having "title" when "title" parameter is missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['type', 'crux', 'color']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(1);
            expect(response.body.missingData[0]).to.equal('title');
            done();
          });
      },
    );

    it(
      'should return list having both "type and crux" when "type and crux" parameters are missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['color', 'title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(2);
            expect(response.body.missingData[0]).to.equal('type');
            expect(response.body.missingData[1]).to.equal('crux');
            done();
          });
      },
    );

    it(
      'should return list having both "type and color" when "type and color" parameters are missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['crux', 'title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(2);
            expect(response.body.missingData[0]).to.equal('type');
            expect(response.body.missingData[1]).to.equal('color');
            done();
          });
      },
    );

    it(
      'should return list having both "type and title" when "type and title" parameters are missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['crux', 'color']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(2);
            expect(response.body.missingData[0]).to.equal('type');
            expect(response.body.missingData[1]).to.equal('title');
            done();
          });
      },
    );

    it(
      'should return list having "type, crux, and color" when "type, crux, and color" parameters are missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['title']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(3);
            expect(response.body.missingData[0]).to.equal('type');
            expect(response.body.missingData[1]).to.equal('crux');
            expect(response.body.missingData[2]).to.equal('color');
            done();
          });
      },
    );

    it(
      'should return list having "type, crux, and title" when "type, crux, and title" parameters are missing in request body',
      (done) => {
        chai.request(app)
          .post(inputValidationUrl)
          .send({
            data: extractPropsOfObject(data, ['color']),
            rules,
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('missingData');
            expect(response.body.missingData).to.be.an('array');
            expect(response.body.missingData.length).to.equal(3);
            expect(response.body.missingData[0]).to.equal('type');
            expect(response.body.missingData[1]).to.equal('crux');
            expect(response.body.missingData[2]).to.equal('title');
            done();
          });
      },
    );
  });
});
