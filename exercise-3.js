function konversiMenit(menit) {
    var minute = Math.floor(menit / 60);
    var second = menit - (minute * 60);
    second = ('0' + second).slice(-2);
    
    return minute + ':' + second;
  }
  
// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00  