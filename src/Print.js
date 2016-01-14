import Animation from 'kittik-animation-basic';

/**
 * Print animation that simulates text typing.
 *
 * @since 1.0.0
 */
export default class Print extends Animation {
  /**
   * Main method that calls when shape need to be animated.
   *
   * @override
   * @param {Shape} shape
   * @param {Cursor} cursor
   */
  animate(shape, cursor) {
    return this.animateProperty({shape: shape, property: 'text', startValue: '', endValue: shape.getText()});
  }

  /**
   * Helper method that animates property in object.
   * On each animation tick it calls {@link onTick} method with shape, property and newValue arguments.
   *
   * @param {Object} options
   * @param {Object} options.shape Shape where property is need to be animated
   * @param {String} options.property Property name that need to be animated
   * @param {Number} [options.startValue] Start value for animation, by default it takes from shape[property]
   * @param {Number} [options.endValue] End value for animation, by default it takes from shape[property]
   * @param {Number} [options.byValue] Step value for easing, by default it calculates automatically
   * @param {Number} [options.duration] Duration of the animation in ms, by default it takes from Animation options
   * @param {String} [options.easing] Easing that need to apply to animation, by default it takes from Animation options
   * @returns {Promise} Returns Promise, that fulfills with shape instance which has been animated
   */
  animateProperty(options) {
    const shape = options.shape;
    const property = options.property;
    const startValue = options.startValue;
    const endValue = options.endValue;
    const byValue = options.byValue || (endValue.length - startValue.length);
    const duration = options.duration || this.getDuration();
    const easing = options.easing || this.getEasing();
    const delay = duration / (endValue - startValue);
    const start = Date.now();
    const end = start + duration;
    const tick = resolve => {
      let currentTime = Date.now();

      if (currentTime > end) {
        resolve(shape);
      } else {
        this.emit('tick', shape, property, endValue.slice(0, this.onEasing(easing, currentTime - start, startValue.length, byValue, duration)));
        this.delay(delay).then(() => tick(resolve));
      }
    };

    return new Promise(tick);
  }
}
