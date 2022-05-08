function lengthOfLongestSubstring(s: string): number {
    let leftIdx = 0;
    let rightIdx = 0;
    let len = 0;
    
    while (leftIdx < s.length) {
        let dict = {};
        const lChar = s[leftIdx];
        
        dict[lChar] = leftIdx;
        rightIdx = leftIdx + 1;
        
        while (rightIdx < s.length) {
            const rChar = s[rightIdx];
            
            if (typeof dict[rChar] !== 'undefined') {
                break;
            }
            
            dict[rChar] = rightIdx;
            rightIdx++;
        }
        
        len = Math.max(len, rightIdx - leftIdx)
        
        leftIdx++;
    }
    
    return len;
};
