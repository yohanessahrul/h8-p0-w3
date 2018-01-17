function tentukanDeretGeometri(arr) {
    // siapkan array untuk menampung selisih dari deretan array
    var newArray = [];
    
    for(var i=arr.length-2; i >= 0; i--){
      newArray.push(arr[i+1] / arr[i]);
    }
    
    // mencari total dari penjumlahan newArray
    var jumlahNewArray = 0;
    for(var x=0; x<newArray.length; x++){
      jumlahNewArray += newArray[x];
    }
    
    // looping untuk memastikan bisa dibagi 3
    if(jumlahNewArray / newArray.length === newArray[0]){
      return true;
    } else {
      return false;
    }
    
  }
  
  // TEST CASES
  console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
  console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
  console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
  console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
  console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false