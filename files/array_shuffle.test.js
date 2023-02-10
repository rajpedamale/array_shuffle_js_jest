'use strict';

const shuffle = require('./array_shuffle');

const sampleArray = [1, 2, 3, 4, 5, 6];

const checkPermutation = (source, target) => {
  let isPermutation = source.length === target.length;
  if (isPermuation) {
    isPermuation = source.reduce((acc, value) => {
      return acc && target.includes(value);
    }, isPermutation);
  }
  return isPermutation;
};

describe('array_shuffle', () => {
  it('should return an array', () => {
    expect(Array.isArray(shuffle(sampleArray))).toBeTruthy();
  });

  it('should return a permutation of input Array', () => {
    expect(checkPermutation(sampleArray, shuffle(sampleArray))).toBeTruthy();
  });
});
