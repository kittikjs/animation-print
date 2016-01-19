"use strict";

const cursor = require('kittik-cursor').default.create().resetTTY();
const Print = require('../lib/Print').default;
const shape = require('kittik-shape-rectangle').default.create({
  text: 'Good news, everybody!',
  x: 'center',
  background: 'yellow_1',
  foreground: 'black',
  width: '50%'
});

new Print({
  easing: 'inOutSine',
  duration: 5000
}).on('tick', shape => shape.render(cursor) && cursor.flush().eraseScreen()).animate(shape);
