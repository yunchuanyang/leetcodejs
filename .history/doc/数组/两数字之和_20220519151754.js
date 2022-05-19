/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let tmp={};
    
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        if(tmp[nums[i]]!=undefined){
            return [tmp[nums[i]],i];
        }
        tmp[diff]=i;
    }
};

//使用map
var twoSum2 = function(nums, target) {
    let map=new Map();
    
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        if(map.has(nums[i])){
            return [map.get(nums[i]),i];
        }
        map.set(diff,i)
    }
};