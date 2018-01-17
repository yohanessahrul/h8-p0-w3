function tentukanDeretAritmatika(arr) {
    //sediakan array untuk menampung bilangan setelah looping
    var beArray = [];
    
    var arrLength = arr.length;
    // panjang array dikurangi 1, agar dapat mengidentifikasi array terakhir
    // karna default array dimulai dari angka 0
    var nilaiArrayAkhir = arr[arrLength - 1];
    
    for(var i=arr.length - 1; i >= 0; i--){
      beArray.push(nilaiArrayAkhir - arr[i]);
    }
    beArray.sort().shift(); // jadikan array, lalu hapus array terdepan agar dpt dicocokkan
    arr.pop(); // buang array terakhir agar dapat dicocokkan
    
    // ubah menjadi string
    var newBeArray = beArray.join(''); 
    var newArray = arr.join('');
    
    // console.log(newArray);
    // console.log(newBeArray);
    
    // identifikasi
    if(newArray == newBeArray){
      return true;
    } else {
      return false;
    }
  }
  
  // TEST CASES                                                         6-6,6-5,6-4...dst
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true      0 1 2 3 4 5
  console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false      0 12 18 20 22
  console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true            0 2 4 6
  console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false         0 36 48 52
  console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false     0 2 5 6 7 8
  