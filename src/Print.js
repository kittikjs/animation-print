import Animation from 'kittik-animation-basic';

/**
 * Print animation that simulates text typing or rendering the shape by symbols.
 *
 * @since 1.0.0
 * @version 1.0.0
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
    return new Promise((resolve, reject) => {
      resolve();
    });
  }
}
