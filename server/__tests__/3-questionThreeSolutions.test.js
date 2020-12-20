/* eslint-disable no-undef */
import chaiHttp from 'chai-http';
import chai, { expect } from 'chai';

import app from '../app';

chai.use(chaiHttp);

describe('Testing Question 3 Solution Controller', () => {
  describe('Testing Calculate Lowest Possible Index for Aladdin\'s Circular Trip', () => {
    const lowestCircularTripIndexUrl = '/api/v1/question-three-solutions/lowest-index-for-circular-trips';
    it(
      'should return lowest ciruclar index of "0" when the circular trip is feasible at "0"',
      (done) => {
        chai.request(app)
          .post(lowestCircularTripIndexUrl)
          .send({
            magic: [3, 2, 5, 4],
            dist: [2, 3, 4, 2],
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(200);
            expect(response.body.status).to.equal(200);
            expect(response.body).to.have.property('lowestIndex');
            expect(Number.isInteger(response.body.lowestIndex)).to.equal(true);
            expect(response.body.lowestIndex).to.equal(0);
            done();
          });
      },
    );

    it(
      'should return lowest ciruclar index of "1" when the circular trip is first feasible at "1"',
      (done) => {
        chai.request(app)
          .post(lowestCircularTripIndexUrl)
          .send({
            magic: [1, 3, 4, 4, 1],
            dist: [1, 4, 2, 2, 2],
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(200);
            expect(response.body.status).to.equal(200);
            expect(response.body).to.have.property('lowestIndex');
            expect(Number.isInteger(response.body.lowestIndex)).to.equal(true);
            expect(response.body.lowestIndex).to.equal(1);
            done();
          });
      },
    );

    it(
      'should return "-1" index when the circular trip is not feasible',
      (done) => {
        chai.request(app)
          .post(lowestCircularTripIndexUrl)
          .send({
            magic: [3, 2, 5, 4],
            dist: [2, 3, 4, 7],
          })
          .end((error, response) => {
            expect(response.body).to.be.an('object');
            expect(response).to.have.status(400);
            expect(response.body.status).to.equal(400);
            expect(response.body).to.have.property('error');
            expect(Number.isInteger(response.body.error)).to.equal(true);
            expect(response.body.error).to.equal(-1);
            done();
          });
      },
    );
  });
});
