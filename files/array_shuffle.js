'use strict';

const permutate = (inputArray, outputArray) => {
  inputArray.forEach((item, index) => {
    const shuffleIndex = Math.floor(Math.random() * inputArray.length);
    const shuffleItem = outputArray[shuffleIndex];
    outputArray[shuffleIndex] = item;
    outputArray[index] = shuffleItem;
  });
  return outputArray;
};

function shuffle(inputArray) {
  const outputArray = inputArray.slice();
  return permutate(inputArray, outputArray);
}

module.exports = shuffle;
