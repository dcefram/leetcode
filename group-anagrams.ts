function groupAnagrams(strs: string[]): string[][] {
  const hashmap: Record<string, string[]> = {};

  for (let idx = 0; idx < strs.length; idx++) {
    // uhm sort...
    const key = strs[idx].split("").sort().join("");
    hashmap[key] = hashmap[key] ? [...hashmap[key], strs[idx]] : [strs[idx]];
  }

  return Object.values(hashmap);
}
