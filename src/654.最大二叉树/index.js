var constructMaximumBinaryTree = function (nums) {
  return construct(nums, 0, nums.length - 1)
};

const construct = (nums, left, right) => {
  if (left > right) {
    return null
  }
  let max = left
  for (let i = 0; i < nums.length; i++) {
    if (nums[max] < nums[i]) {
      max = i
    }
  }

  const node = new TreeNode(nums[max])
  node.left = construct(nums, left, max - 1)
  node.right = construct(nums, max + 1, right)
  return node;
}


// console.log(constructMaximumBinaryTree([2,30,4,8,10,3,7]));
console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));


function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
} 
