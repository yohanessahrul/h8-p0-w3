function palindrome(kata) {
    var arr = kata.split('');
    var balik = arr.reverse();
    var toStrings = balik.join('');
    // console.log(toStrings);
    if(toStrings === kata){
      return true;
    } else {
      return false;
    }
    return toStrings;
    
}

// TEST CASES
console.log(palindrome('katak')); // true
console.log("======================");
console.log(palindrome('blanket')); // false
console.log("======================");
console.log(palindrome('civic')); // true
console.log("======================");
console.log(palindrome('kasur rusak')); // true
console.log("======================");
console.log(palindrome('mister')); // false