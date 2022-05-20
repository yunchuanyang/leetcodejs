/**
 * @param {number[]} nums
 * @return {number}
 */
// 方法笨重
var removeDuplicates = function (nums) {
    let map = new Map();
    let count = 0;
    for (var i = 0; i < nums.length; i++) {
        if (!map.has(nums[i])) {
            map.set(nums[i], i);
            count++;
        }
    }
    console.log('map=', map)
    map.forEach((index, key) => {
        nums.push(key)
    })
    console.log('nums111=', nums)
    nums.splice(0, nums.length - count)

    console.log('nums111=', nums)
    return count;

};
//不改变数组长度，只替换元素
//根据已排序的升序数组的特点来：相同的元素是连续的
/* 双指针解法
给快慢指针，快指针往后走，碰到不重复的数字时，慢指针往前走一步，快指针走完整个数组，慢指针指的就是不重复的数组 */
var removeDuplicates2 = function (nums) {
   const n= nums.length;
   if(n<2){
       return n;
   }
   let fast = 1, slow=1;
   while(fast<n){
       //和前一个元素不同
       if(nums[fast]!=nums[fast-1]){
           nums[slow]=nums[fast];
           ++slow;
       }
       ++fast;
   }
   return slow;
};
