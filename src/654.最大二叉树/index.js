var constructMaximumBinaryTree = function (nums) {
  if (nums.length <= 1) return nums;

  // 最大值
  let maxNum = nums[0];
  // 左子树
  let lTree = [];
  // 右子树
  let rTree = [];
  nums.forEach((num) => {
    if (num > maxNum) maxNum = num;
  });
  const maxIdx = nums.findIndex((num) => num == maxNum);

  nums.forEach((num, index) => {
    if (maxIdx > index) {
      lTree.push(num);
    } else if (maxIdx < index) {
      rTree.push(num);
    }
  });

  let lValue = [null];
  let rValue = [null];
  if (lTree.length > 0) lValue = constructMaximumBinaryTree(lTree);
  if (rTree.length > 0) rValue = constructMaximumBinaryTree(rTree);

  return [maxNum, ...lValue, ...rValue];
};

// console.log(constructMaximumBinaryTree([2,30,4,8,10,3,7]));
console.log(constructMaximumBinaryTree([3, 4,  6, 0, 5]));

