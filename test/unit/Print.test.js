import { assert } from 'chai';
import sinon from 'sinon';
import Print from '../../src/Print';

describe('Animation::Print', () => {
  it('Should properly accept options object', () => {
    let animation = new Print({interval: 500});

    assert.equal(animation.get('interval'), 500);
  });

  it('Should properly get/set interval', () => {
    let animation = new Print();

    assert.equal(animation.getInterval(), 100);
    assert.instanceOf(animation.setInterval(1000), Print);
    assert.equal(animation.getInterval(), 1000);
  });

  it('Should properly check if animation is with random interval', () => {
    let animation = new Print();

    assert.ok(animation.isRandom());
    assert.instanceOf(animation.setRandom(false), Print);
    assert.notOk(animation.isRandom());
  });

  it('Should properly call the animate() method with random option', () => {
    let animation = new Print();
    let cb = sinon.spy();

    animation.animate('test', cb);

    setTimeout(() => {
      assert.equal(cb.getCall(0).args[0], 'test');
    }, 200);
  });

  it('Should properly call the animate() method without random option', () => {
    let animation = new Print({random: false});
    let cb = sinon.spy();

    animation.animate('test', cb);

    setTimeout(() => {
      assert.equal(cb.getCall(0).args[0], 'test');
    }, 200);
  });
});
