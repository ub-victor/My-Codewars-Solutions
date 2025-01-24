window.onload = function () {  
    var nums1 = [1, 2, 3, 4, 5]; // Original array  
    var nums2 = [...nums1, 6, 7, 8, 9, 10]; // New array created by spreading nums1 and adding new elements  
  
    console.log(nums2); // Outputs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
  }