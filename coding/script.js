// var nama = 'Arya';
// console.log(nama);
// alert(nama);

// var namaInput = prompt("masukan nama anda");
// alert(`selamat datang ${namaInput} di website kami`);

// var namaInput = prompt("masukan nama anda"), 
// jurusan = prompt ("masukan jurusan anda"), 
// alamat = prompt("masukan alamat anda");
// alert(`selamat datang ${namaInput} dari jurusan ${jurusan} yang beralamat ${alamat} di website kami`);

// for (var i = 0; i < 1000; i++) {
//     document.write(`pak iqbal ganteng! <br>`);
// }

// var ngulang = true;
// while (ngulang) {
//     console.log(`helo`);
//     ngulang = confirm(`lagi nih?`);
// }

// var i = 10;
// while (i >= 0){
//     console.log(i);
//     i++;
// }

// for (let i = 1; i <= 5; i++) {
//     if (i%2!==0){
//         console.log(i);    }
// }

// let panjang = prompt(`masukan ukuran panjang bus`),
//     lebar = prompt(`masukan ukuran lebar bus`);
//     hasil = panjang*lebar;
//     alert(`luas bus adalah ${hasil}`);

// let r = prompt(`masukan ukuran jari jari rasengan`)
//     hasil = 3.14*r*r;
//     alert(`luas rasengan adalah ${hasil}`)

// for (let i = 2; i <= 10; i++) {
//     if (i%2 == 0) {
//         console.log(i);
//     }
// }

// var i = 1;
// while (i <= 9) {
//     console.log (i);
//     i++;
// }

// var i = 5;
// while (i >=1) {
//     console.log (i);
// }

// for (var i = 5; i >= 1; i--) {
//     document.write(i);    
//     console.log (i);
// }

for (let i = 0; i < 3; i++) {
    let password = prompt("masukkan password")

    if (password == "ahay") {
        alert ("selamat datang di kelas informatika");
        window.location.href = "dasboard.html";
        break;
    } else {
        alert ("password salah, coba lagi");
    }
}
document.write(`<hi>gagal masuk, silahkan muat ulang halaman!<hi/>`)

