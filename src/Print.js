import Animation from 'kittik-animation-basic';

/**
 * Print animation that simulates text typing or rendering the shape by symbols.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export default class Print extends Animation {
  _interval = 100;

  /**
   * Creates stream that ready for animate the chunks of control codes.
   *
   * @constructor
   * @param {Object} [options]
   * @param {Number} [options.interval] Interval in ms before typing another symbol
   */
  constructor(options = {}) {
    super();

    this.setInterval(options.interval);
  }

  /**
   * Get current interval in ms.
   *
   * @returns {Number}
   */
  getInterval() {
    return this._interval;
  }

  /**
   * Set new interval in ms.
   *
   * @param {Number} interval Interval in ms
   * @returns {Print}
   */
  setInterval(interval = 100) {
    this._interval = interval;
    return this;
  }

  /**
   * Main method that calls every time when shape need to be animated.
   *
   * @override
   * @param {Buffer|String} chunk
   * @param {Function} cb
   */
  animate(chunk, cb) {
    setTimeout(cb, this.getInterval(), chunk);
  }
}
