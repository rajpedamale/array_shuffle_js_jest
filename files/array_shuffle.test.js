'use strict';

const shuffle = require('./array_shuffle');

let sampleArray;

const checkPermutation = (source, target) => {
  let isPermutation = source.length === target.length;
  if (isPermutation) {
    isPermutation = source.reduce((acc, value) => {
      return acc && target.includes(value);
    }, isPermutation);
  }
  return isPermutation;
};

describe('array_shuffle', () => {
  beforeEach(() => {
    sampleArray = [1, 2, 3, 4, 5, 6];
  });
  
  it('should return an array', () => {
    expect(Array.isArray(shuffle(sampleArray))).toBeTruthy();
  });

  it('should return array of same size as input Array', () => {
    expect(shuffle(sampleArray).length).toEqual(sampleArray.length);
  });
  
  it('should return a permutation of input Array', () => {
    expect(checkPermutation(sampleArray, shuffle(sampleArray))).toBeTruthy();
  });
  
  it('should not modify input Array', () => {
    const serializedSampleArray = JSON.stringify(sampleArray);
    const dummyRun = shuffle(sampleArray);
    expect(JSON.stringify(sampleArray)).toEqual(serializedSampleArray);
  });
});
