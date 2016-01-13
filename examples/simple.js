"use strict";

const cursor = require('kittik-cursor').Cursor.create().resetTTY();
const shape = require('kittik-shape-rectangle').default.create({text: 'Hello', x: 'center', background: 'white'});
const Print = require('../lib/Print').default;

new Print().on('tick', shape => shape.render(cursor) && cursor.flush().eraseScreen()).animate(shape);
