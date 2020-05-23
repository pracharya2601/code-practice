//Given the shorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
//DO not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

//example 
    //nums = [1,1,2],
    // should return length = 2, with the first two elements of the nums being 1 and 2 respectively.
var a = [1,1,2,2,3,3,3,4,4,4,4]

var removeDuplicates= function(nums) {
    let i = 0;
    for (let j = 1; j < nums.length; j ++) {
        if(nums[i] != nums[j]) {
            i ++;
            nums[i] = nums[j];
        }
    }
    return i + 1;
}

console.log(removeDuplicates(a))