function twoSum(nums: number[], target: number): number[] {
    let hash: Record<number, number> = {};
    
    for (let idx = 0; idx < nums.length; idx++) {
        if (typeof hash[nums[idx]] !== 'undefined') {
            return [hash[nums[idx]], idx]
        }
        
        const remaining = target - nums[idx];
        hash[remaining] = idx;
    }
};
