/*     Method 1
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
  */

// Method 2
function xo(str) {
    var charO = 0;
    var CharX = 0;
    
    for(i=0; i < str.length; i++){
      if(str[i] === 'o'){
        charO++;
      } else if(str[i] === 'x'){
        CharX++;
      }
    }
    if(CharX === charO){
      return true;
    } else {
      return false;
    }
  }

  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true