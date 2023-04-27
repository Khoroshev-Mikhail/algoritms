// https://leetcode.com/problems/next-greater-element-ii/
// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.
// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.

// Example 1:
// Input: nums = [1,2,1]
// Output: [2,-1,2]
// Explanation: The first 1's next greater number is 2; 
// The number 2 can't find next greater number. 
// The second 1's next greater number needs to search circularly, which is also 2.

// Example 2:
// Input: nums = [1,2,3,4,3]
// Output: [2,3,4,-1,4]
 
// Constraints:
// 1 <= nums.length <= 104
// -109 <= nums[i] <= 109

var nextGreaterElements = function(nums) {
    //0.Создать result массив равный длине nums и заполнить -1
    //1.Увеличить длину массива в два раза
    //2.Индекс можно брать с помощью i % nums.length
    //3.В стэк пушим индексы
    //4.While по условию пока последний элемент индекса в стэке (nums[stack.at(-1)] меньше текущего элемента)
    //5.Do в резалт[последний индекс из стэка] = текущий элемент
    const result = new Array(nums.length).fill(-1)
    const stack = []
    nums.concat(nums).forEach((el, i) => {
        const k = i % nums.length
        while(stack.length > 0 && nums[stack.at(-1)] < nums[k]){
            result[stack.pop()] = nums[k]
        }
        stack.push(k)
    })
    return result
};

const nums = [1,2,1]
const nums2 = [5,4,3,2,1]
const nums3 = [100,1,11,1,120,111,123,1,-1,-100] 

console.log(nextGreaterElements(nums), `Expected`, [2,-1,2])
console.log(nextGreaterElements(nums2), `Expected`, [-1,5,5,5,5])
console.log(nextGreaterElements(nums3), `Expected`, [120,11,120,120,123,123,-1,100,100,100])
