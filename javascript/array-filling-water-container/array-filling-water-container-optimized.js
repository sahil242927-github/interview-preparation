// max area formula
// min(A,B) x (indexOfB - indexOfA) = maxArea

const maxWaterContainerPoint = (heights) => {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    let height = Math.min(heights[p1], heights[p2]);
    let width = p2 - p1;
    let area = height * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return { maxArea };
};

const arr1 = [4, 8, 1, 2, 3, 9]; // maxarea = 32

console.log(maxWaterContainerPoint(arr1));
