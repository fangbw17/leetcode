var constructMaximumBinaryTree = function (nums) {
  return construct(nums, 0, nums.length - 1)
};
const construct = (nums, left, right) => {
  if (left > right) {
    return null
  }
  let max = left
  for (let i = left; i <= right; i++) {
    if (nums[max] < nums[i]) {
      max = i
    }
  }

  const node = new TreeNode(nums[max])
  node.left = construct(nums, left, max - 1)
  node.right = construct(nums, max + 1, right)
  return node;
}