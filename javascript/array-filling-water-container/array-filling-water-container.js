const maxWaterContainerPoint = (heights) => {
  let maxArea = 0;
  let points = { point1: null, point2: null };

  for (let i = 0; i < heights.length; i++) {
    for (let j = 1; j < heights.length; j++) {
      let height = Math.min(heights[i], heights[j]);
      let width = j - i;
      let area = height * width;

      if (area > maxArea) {
        maxArea = area;
        points["point1"] = heights[i];
        points["point2"] = heights[j];
      }
    }
  }
  return { maxArea, points };
};

const arr1 = [1, 8, 6, 2, 9, 4]; // maxarea = 24, points 8 , 9
const arr2 = [1, 7, 2, 8, 1, 6]; // maxarea = 28, points 7 , 6

console.log(maxWaterContainerPoint(arr2));
