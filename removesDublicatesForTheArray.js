// 26. Remove Duplicates from Sorted Array

// Hint
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same.

// Consider the number of unique elements in nums to be k​​​​​​​​​​​​​​. After removing duplicates, return the number of unique elements k.

// The first k elements of nums should contain the unique numbers in sorted order. The remaining elements beyond index k - 1 can be ignolet 


let removesDublicates = (nums) => {
    let px = 0;

    for(let i = 0 ; i< nums.length;i++){
        if(nums[i] > nums[px]){
            px = px +1;
            nums[px] = nums[i];
        }
    }
    return px + 1;
}

let arr = [0,0,0,1,1,1,2,2,3,3,3,4,5,5,6]

console.log(removesDublicates(arr))