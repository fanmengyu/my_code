var fourSumCount = function(nums1, nums2, nums3, nums4) {
    let twoSum = new Map();
    let res = 0;
    for (const i of nums1) {
        for (const j of nums2) {
            if (twoSum.has(i + j)) {
                twoSum.set(i + j, twoSum.get(i+j) + 1);
            }else {
                twoSum.set(i + j, 1)
            }
        }
    }

    for(const i of nums3){
        for(const j of nums4) {
            res += (twoSum.get(-i-j) || 0);
        }
    }
    return res;
};