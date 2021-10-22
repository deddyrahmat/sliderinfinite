left = 1;//urut awal image slider yang ditampilkan
right = 4; //urut akhir image slider yang ditampilkan

function show() {
// //   jika image awal yang muncul(1) sembunyikan button agar tidak bisa menampilkan image 0(karna tidak ada)
//     if(left === 1 && right === 4){
//       document.getElementById('btnright').style.opacity="0"
//     }
  
//     karna default style dari image adalah none, tampilkan image dibwah kondisi left < right
    for (let i = left; i <= right; i++) {
        document.getElementById('c'+i).style.display="inline-block" 
    }
}

function moveLeft() {
  // jika ingin memberi fungsi sembunyikan arrow dan mematikan fungsi infinite
  //     if(left !== 1 && right !== 4){
  //       document.getElementById('btnright').style.opacity="1"
  //     }
      
  //     if(left === 5 && right === 8){
  //       document.getElementById('btnleft').style.opacity="0"
  //     }
      

    // aktifkan fungsi infinite
    if(left >= 5 && right >= 8){
      // document.getElementById('btnleft').style.opacity="0"
      left = 1;
      right = 4;
      // sembunyikan semua diawal
      for (let i = 1; i <= 8; i++) {
          document.getElementById('c'+i).style.display="none";
      }
      // tampilkan yang dibutuhkan saja
      for (let i = left; i <= right; i++) {
          document.getElementById('c'+i).style.display="inline-block";
      }
      return

    }else if(left<=4 && right<=9){
        document.getElementById('c'+left).style.display="none";
        left += 1;
        right += 1;
      
      if(left !== 1 && right !== 4){
        document.getElementById('btnright').style.opacity="1"
      }
      
      
      console.log("left moveLeft", left)
      console.log("right moveLeft", right)
        
        for (let i = left; i <= right; i++) {
            document.getElementById('c'+i).style.display="inline-block";
        }
    }else{
        return
    }
}

function moveRight() {
    
   // aktifkan fungsi infinite
    if(left <= 1 && right <= 4){
      // document.getElementById('btnleft').style.opacity="0"
      left = 5;
      right = 8;
      // sembunyikan semua diawal
      for (let i = 1; i <= 8; i++) {
          document.getElementById('c'+i).style.display="none";
      }
      // tampilkan yang dibutuhkan saja
      for (let i = left; i <= right; i++) {
          document.getElementById('c'+i).style.display="inline-block";            
      }
      return

    }else if(left>=2 && right>=4){
        document.getElementById('c'+right).style.display="none";
        left -= 1;
        right -= 1;
      
      // if(left !== 5 && right !== 8){
      //   document.getElementById('btnleft').style.opacity="1"
      // }
      
      // if(left === 1 && right === 4){
      //   document.getElementById('btnright').style.opacity="0"
      // }
      
      console.log("left moveRight ", left)
      console.log("right moveRight", right)
        
        for (let i = left; i <= right; i++) {
            document.getElementById('c'+i).style.display="inline-block";            
        }
    }else{
        return
    }
}