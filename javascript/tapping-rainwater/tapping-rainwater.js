const array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8;

const tappingRainwater = (tappingArr) => {
  let totalRainWater = 0;

  for (let i = 0; i < tappingArr.length; i++) {
    let leftP = i,
      maxLeftValue = 0,
      maxRightValue = 0,
      rightP = i;
    // left scan
    while (leftP > 0) {
      maxLeftValue = Math.max(tappingArr[leftP], maxLeftValue);
      leftP--;
    }
    // right scan
    while (rightP < tappingArr.length) {
      maxRightValue = Math.max(tappingArr[rightP], maxRightValue);
      rightP++;
    }
    const currentWater = Math.min(maxLeftValue, maxRightValue) - tappingArr[i];
    if (currentWater > 0) {
      totalRainWater += currentWater;
    }
  }

  return totalRainWater;
};

console.log(tappingRainwater(array));
