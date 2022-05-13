var removeElement = function (nums, val) {
  let e = 0;
  while (e < nums.length) {
    if (nums[e] == val) {
      nums.splice(e, 1);
    } else {
      e++;
    }
  }

  return nums;
};

console.log(removeElement(
    [0,1,2,2,3,0,4,2],
    2));
