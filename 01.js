// ...
// https://leetcode.com/problems/next-greater-element-i/


const nums2 = [30, 7, 3, 10, 6, 5, 2, 8, 1, 13, 20, 16, 15];
//              - 10 10  13  8  8  8 13 13  20   -   -   -

const nums1 = [10, 5, 30, 2]  //  →  [13, 8, -1, 8]
// 

var nextGreaterElement = function(nums1, nums2) {
    //1. Найти индекс элемента
    //2. Слайс
    //3. Find

    // nums1.length === N
    return nums1.map(el => { // 3N
        const i = nums2.indexOf(el) // 4K
        return nums2.find((val, index) => val > el && index > i) ?? -1 // 6K
    })

    // NK → O(NK)

    //

    //Базовые операции:
    // =
    // < >
    // ++
    // &&
    // []

    // nums2.length === K

    //           1          K+1                K
    for(let index = 0; index < nums2.length; index++) {
      //        K      K     K       K 
      if (nums2[index] > el && index > i) {
        return nums2[index] // 1
      }
    }

 }

 
 // .push(x)
 // .pop()
 // .at(-1)
 // .length === 0 
 
 //  stack = [30, 10, 8, 1]
 //  dict = {3: 10, 7: 10, 2: 8, 5: 8, 6: 8}
 
 //  [30, 7, 3, 10, 6, 5, 2, 8, 1, 13, 20, 16, 15];
 //   

//                                N      K
function nextGreaterElementFast(nums1, nums2) {
    const stack = []
    const dict = {}
    nums2.forEach(el => { // K
        //1.Есть ли в stack элементы меньше el
        //2.Пушим el
        // 30 10 ← 8
        while(stack.length > 0 && stack.at(-1) < el){
            const top = stack.pop()
            dict[top] = el
        }
        stack.push(el)
    })
    return nums1.map(n => dict[n] ?? -1) // N
}

// O(3N² + 5N + 78) → O(N²)

// console.log(nextGreaterElementFast(nums1, nums2));

const N = 1600000;

const arr = [];
for(let i = N - 1; i >= 0; i--) {
  arr.push(i);
}
arr.push(N);
// console.log(arr);

console.time("x");
const result = nextGreaterElementFast(arr, arr); // O(NK)
console.timeEnd("x");

// 10_000 → 624.722ms
// 20_000 → 1.569s
// 40_000 → 4.387s
// 80_000 → 13.773s          15ms
// 800_000 →                 110.349ms 
// 1_600_000 →               227.899ms 

// console.log(result);

// https://leetcode.com/problems/next-greater-element-ii/
// https://leetcode.com/problems/daily-temperatures/
// https://leetcode.com/problems/car-fleet/
