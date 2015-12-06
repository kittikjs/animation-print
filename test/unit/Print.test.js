import { assert } from 'chai';
import sinon from 'sinon';
import Print from '../../src/Print';

describe('Animation::Print', () => {
  it('Should properly accept options object', () => {
    let animation = new Print({interval: 500});

    assert.equal(animation._interval, 500);
  });

  it('Should properly get interval', () => {
    let animation = new Print();

    assert.equal(animation.getInterval(), 100);
  });

  it('Should properly set interval', () => {
    let animation = new Print();

    assert.instanceOf(animation.setInterval(1000), Print);
    assert.equal(animation.getInterval(), 1000);
  });

  it('Should properly call the animate() method', () => {
    let animation = new Print();
    let cb = sinon.spy();

    animation.animate('test', cb);

    setTimeout(() => {
      assert.equal(cb.getCall(0).args[0], 'test');
    }, 200);
  });
});
