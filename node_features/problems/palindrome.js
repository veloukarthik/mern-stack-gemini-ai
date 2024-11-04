

function Palindrome(str){
    let split = str.split('');
    let reversed = split.reverse();
    let joined = reversed.join('');
    return str === joined;
}

console.log(Palindrome("racecar")); // true
console.log(Palindrome("dads")); // true