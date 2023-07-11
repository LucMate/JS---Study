const nums1 = [1, 2, 3];
const nums2 = [4, 5, 6];

// utilizando concat
// const allnumbers = nums1.concat(nums2, [7, 8, 9], 'Lucão');

//utilizando spread operator
const nums3 = [...nums1, "Lucao", ...nums2, ...[7, 8, 9]];

console.log(nums3);
