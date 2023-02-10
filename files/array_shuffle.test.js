'use strict';

const shuffle = require('./array_shuffle');

const sampleArray = [1, 2, 3, 4, 5, 6]

describe('array_shuffle', () => {
  it('should return an array', () => {
    expect(Array.isArray(shuffle(sampleArray))).toBeTruthy();
  });
});
