/*
Diberikan sebuah function xo(str) yang menerima satu parameter berupa string. Function angkan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.
*/

// Pseudocode
// buat variable 'countX' untuk menampung nilai 'x' dengan nilai awal 0
// buat variable 'countO' untuk menampung nilai 'o' dengan nilai awal 0
// looping 'str' dari 0 sampai dengan banyaknya jumlah string
// jika ketemu karakter 'x' tambahkan 'countX' dengan nilai 1
// jika ketemu karakter 'o' tambahkan 'countO' dengan nilai 1
// lalu buat kondisi, jika 'countX' dan 'countO' memiliki nilai yang sama kembalikan nilai 'true'
// jika sebaliknya kembalikan nilai 'false'

function xo(str) {
  // you can only write your code here!
  var countX = 0;
  var countO = 0;
  
  for(var i=0; i<str.length; i++){
    if(str[i] === 'x'){
      countX++;
    } else {
      countO++;
    }
  }
  
  if(countX === countO){
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true












/*
// with RegExp
function xo(str){
    var charO = str.match(/o/g);
    var charX = str.match(/x/g);
    
    var oLength = charO.length;
    var xLength = charX.length;
    
    if(oLength === xLength){
      return true;
    } else {
      return false;
    }
  }

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true

*/


