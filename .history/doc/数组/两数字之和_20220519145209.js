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
    let tmp={};
    
    for(let i=0;i<nums.length;i++){
        let diff = target-nums[i];
        // console.log(`diff=${diff},num=${nums[i]}`,)
        if(map.has(diff)){
            return [map.get(diff),i];
        }
        map.set(diff,i)
    }
};