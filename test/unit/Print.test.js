import { assert } from 'chai';
import sinon from 'sinon';
import Rectangle from 'kittik-shape-rectangle';
import Print from '../../src/Print';

describe('Animation::Print', () => {
  it('Should properly call the animate() method', done => {
    let animation = new Print();
    let shape = new Rectangle();
    let mock = sinon.mock(animation);

    mock.expects('animateProperty').once().returns(Promise.resolve());

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });

  it('Should properly animate property', done => {
    let animation = new Print({duration: 1});
    let shape = new Rectangle();
    let mock = sinon.mock(animation);

    mock.expects('emit').atLeast(1).withArgs('tick');

    animation.animate(shape).then(() => {
      mock.verify();
      done();
    });
  });
});
