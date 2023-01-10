/* 
Logic steps:
  1. Identify pointers with lesser value
  2. Is this pointer value is lesser than or equal to maxValue on that side
    If yes => update max on that side
    If no  => get water for pointer value and add to the totalWater
  3. Mover the pointer inwards
  4. Repeat for other pointer
*/
const array = [0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]; // 8;

const tappingRainwater = (heights) => {
  let pl = 0,
    pr = heights.length - 1,
    maxLeft = 0,
    maxRight = 0,
    totalWater = 0;

  while (pl < pr) {
    // checking which pointer is smaller
    if (heights[pl] <= heights[pr]) {
      if (heights[pl] >= maxLeft) {
        // update maxLeft
        maxLeft = heights[pl];
      } else {
        totalWater += maxLeft - heights[pl];
      }
      pl++;
    } else {
      if (heights[pr] >= maxRight) {
        maxRight = heights[pr];
      } else {
        totalWater += maxRight - heights[pr];
      }
      pr--;
    }
  }

  return totalWater;
};

console.log(tappingRainwater(array));
