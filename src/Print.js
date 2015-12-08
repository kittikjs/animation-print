import Animation from 'kittik-animation-basic';

/**
 * Print animation that simulates text typing or rendering the shape by symbols.
 *
 * @since 1.0.0
 * @version 1.0.0
 */
export default class Print extends Animation {
  /**
   * Creates stream that ready for animate the chunks of control codes.
   *
   * @constructor
   * @param {Object} [options]
   * @param {Number} [options.interval] Interval in ms before typing another symbol
   * @param {Boolean} [options.random] If true then interval is calculates randomly
   */
  constructor(options = {}) {
    super();

    let {interval, random} = options;

    this.setInterval(interval);
    this.setRandom(random);
  }

  /**
   * Get current interval in ms.
   *
   * @returns {Number}
   */
  getInterval() {
    return this.get('interval');
  }

  /**
   * Set new interval in ms.
   *
   * @param {Number} interval Interval in ms
   * @returns {Print}
   */
  setInterval(interval = 100) {
    this.set('interval', interval);
    return this;
  }

  /**
   * Check if this animation should calculate interval randomly
   *
   * @returns {Boolean}
   */
  isRandom() {
    return this.get('random');
  }

  /**
   * Set random flag.
   *
   * @param {Boolean} isRandom
   * @returns {Print}
   */
  setRandom(isRandom = true) {
    this.set('random', isRandom);
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
    setTimeout(cb, this.isRandom() ? Math.random() * 500 + this.getInterval() : this.getInterval(), chunk);
  }
}
