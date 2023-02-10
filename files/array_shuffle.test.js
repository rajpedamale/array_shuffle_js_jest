'use strict';

const shuffle = require('./array_shuffle');

describe('array_shuffle', () => {
  it('should return an array', () => {
    expect(Array.isArray(shuffle())).toBeTruthy();
  });
});
