// Problem: https://leetcode.com/problems/two-sum/
// Approach: Hash Map
// Time Complexity: O(n)
// Space Complexity: O(n)

function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
}

console.log(twoSum([2,7,11,15], 9)); // Output: [0,1]
