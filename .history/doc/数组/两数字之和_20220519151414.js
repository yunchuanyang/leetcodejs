/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    let tmp={};
    
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        // console.log(`diff=${diff},num=${nums[i]}`,)
        
        if(tmp[nums[i]]!=undefined){
            console.log(`first=${tmp[nums[i]]},second=${i}`);
            return [tmp[nums[i]],i];
        }
        tmp[diff]=i;
        
        
        console.log([diff,i])
    }
};

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