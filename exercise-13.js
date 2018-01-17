function targetTerdekat(arr) {
    var letakO = [];
    var letakX = [];
    var letaxXterdekat = [];
    
    // loop untuk tampung ke masing2 wadah
    for(var i=0; i<arr.length; i++){
      if(arr[i] === 'x'){
        letakX.push(i);
      } else if(arr[i] === 'o'){
        letakO.push(i);
      }
    }
    // console.log(letakO);
    if(letakO > letakX[0]){
      letakX.reverse();
    }
    // console.log(letakX);
    
    // cari satu angka yang lebih tinggi dari 'o' dan masukkan ke array
    for(var x=0; x < letakX.length; x++){
      if(letakX[x] > letakO[0]){
        letaxXterdekat.push(letakX[x]);
        break;
      }
    }
    // cari satu angka yang lebih rendah dari 'o' dan masukkan ke array
    for(var y=0; y < letakX.length; y++){
      if(letakX[y] < letakO[0]){
        letaxXterdekat.push(letakX[y]);
        break;
      }
    }
    
    // balik urutan array agar bilangan 'o' berada di antara kemungkinan array letaxXterdekat
    if(letakO[0] < letaxXterdekat[0]){
      letaxXterdekat.reverse();
    }
    // console.log(letaxXterdekat);
    
    if(letakO[0] > letakX[0]){
      return letakO[0] - letaxXterdekat;
    } else if(letakO[0] < letakX[0]){
      return Math.abs(letaxXterdekat[0] - letakO[0]);
    } else{
      return 0;
    }
    
  }
  
  // TEST CASES
  console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
  console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
  console.log(targetTerdekat(['', '', 'o', ''])); // 0
  console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2