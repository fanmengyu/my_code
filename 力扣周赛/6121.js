var smallestTrimmedNumbers = function(nums, queries) {
    let result = [];
    for(const i of queries){
        let k = queries[0];
        let trim = queries[1];
        let newArr = nums.map((item) => {
            return item.slice(nums[0].length - trim)
        })
        

    }
};