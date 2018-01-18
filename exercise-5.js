/*
Diberikan sebuah function perpangkatanDua(angka) yang menerima satu parameter berupa angka. Function akan me-return n jika angka tersebut merupakan hasil dari dua pangkat n. jika tidak, return -1. Contoh, jika angka adalah 16, dan karena 2^4 adalah 16, maka function akan me-return 4. Contoh kedua, jika angka adalah 17, karena 17 bukan merupakan hasil perpangkatan angka 2, maka function akan me-return -1.
*/


function perpangkatanDua(str) {
    // you can only write your code here!
    for(var i=0; i<str; i++){
      var p2 = Math.pow(2, i);
      if(p2 === str){
        return i;
      }
    }
    return -1;
  }
  
  // TEST CASES
  console.log(perpangkatanDua(64)); // 6
  console.log(perpangkatanDua(22)); // -1
  console.log(perpangkatanDua(16)); // 4
  console.log(perpangkatanDua(222)); // -1
  console.log(perpangkatanDua(1)); // 0
  
  
  /*
  function perpangkatanDua(str) {
      var pangkatDua = Math.log2(str);
      
      if(pangkatDua % 2 !== 0){
          return -1;
      } else {
        return pangkatDua;
      }
  }
  
  console.log(perpangkatanDua(64));
  console.log(perpangkatanDua(22));
  console.log(perpangkatanDua(16));
  console.log(perpangkatanDua(222));
  console.log(perpangkatanDua(1));
  */