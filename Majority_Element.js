/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let res = 0;
   let count = 0;
   nums.forEach(num => {
       if (count === 0) {
           res = num;
       }
       res === num ? count++ : count--;
   });

   return res;
};