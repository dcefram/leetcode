function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    // let's first assume that we can use JS built-in sorting
    const combined = [...nums1, ...nums2].sort((l, r) => Number(l) > Number(r) ? -1 : 1)
    
    // let's assume that we can do a .length
    // get the middle index
    const midIndex = combined.length / 2;
    
    // check if we have decimal places
    const dec = midIndex % 1;
    const isWhole = dec === 0;

    if (isWhole) {
        return (combined[midIndex - 1] + combined[midIndex]) / 2;
    }
    
    return combined[Math.floor(midIndex)];
};
