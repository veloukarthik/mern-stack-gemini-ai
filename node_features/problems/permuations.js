function getPermutations(str) {
    if (str.length <= 1) return [str];

    const permutations = [];
    const smallerPermutations = getPermutations(str.slice(1));
    const firstChar = str[0];

    for (let perm of smallerPermutations) {
        for (let i = 0; i <= perm.length; i++) {
            const start = perm.slice(0, i);
            const end = perm.slice(i);
            permutations.push(start + firstChar + end);
        }
    }

    return permutations;
}

// Example Usage
console.log(getPermutations("THT")); // Output: ["abc", "acb", "bac", "bca", "cab", "cba"]
