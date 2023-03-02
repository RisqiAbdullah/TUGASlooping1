//Ada lima macam bentuk perulangan di javascript. secara umum, perulangan dibagi menjadi 2 
//yaitu counted loop and uncounted loop
//perbedaan nya 
//1. counted loop merupakan perulanagan yang jelas dan sudah tentu banyak perulangannya
//2. uncounted kali harus mengulang/contyoh 
// function PushUp(){
//     //Code
// }
// for(i = 1; i<=10; i++){
//     PushUp();
// }

// let bosan;
// //contoh
// while(bosan == false){
//     PushUp(); 
// }

//macam perulangan counted loop
//1. perulangan for
//2 perulangan foreach
//3 perulangan repeat

//macam macam perulangan uncounted loop
//1. perulangan while
//2. perulangan Do/while

//perulangan for 
//perulangan for merupakan perulangan yang termasuk dlama countes loop, karena sudah jelas berapa kal akan mengulang sebuah perulangan
//contoh

// for (let i = 0; i < 10; i++){
//     document.write(`<p>Perulangan ini berulang ${i } kali</p>`)
// }

//perulagan while
//perulangan while merupakan perulangan yang termasuk kedalam perulangan uncounted loop namu n perulangan while juga dapat masuk atau menjadi perulanga yang counted
//loop dengan memberikan sebuah counter didalamnya

//contoh
// let ulang = confirm("Apakah anda mau mengulang?");
// let counter = 0;

// while(ulang){
//     let jawab = confirm("Apakah anda mau mengulangan?");
//     counter++;
//     if(jawab == false){
//         ulang = false;
//    }
// }

// document.write("Perulangan sudah dilakukan sebanyak " + counter + "Kali");


//perulangan do/while
//perulagan do/while sama seperti perulangan whileakan melakukan perulangan sebanyak 1 kali terlebih dahulu lalu mengecek kondisi yang ada di dalam kurung while

// do{
//     //code
// }while(kondisi);

// var ulang = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// do{
//     counter++;
//     ulang = confirm("Apakah anda mau mengulang?");
// }while(ulang);


// document.write("Pengulangan yang sudah dilakukan sebanyak " + counter +" kal");

// let sum = "";
//  while(true){
//     for
//     let value = prompt("Masukkan sebuah huruf", '');
//     if(!value) break;

//     sum+= value;
// }

// alert('sum : ' + sum );

//4.perulangan foreach
//perulanan foreach biasa nya di gunakan untuk mencetak item di dalam array 
//perulangan ini termasuk dalam perulangan counted logo, karena jumlah perulangannya akan ditentukan oleh panjang dari array
//ada dua cara menggunakan perulangan foreach :
//1. dengan menggunakan operator in
//2. menggunakan method foreach

//contoh
// let bahasa = ["Javascript", "java", "objektif-c", "python"];
// for (let i = 0; i < bahasa.length; i++){
//     document.write(`${i + 1}.${bahasa[I]}<br/>`);
// }

// let bahasaPemrograman = ["Javascript", "Java", "Objective-c", "python"];
// for (let i in bahasaPemrograman){
//     document.write(`${i}.${bahasaPemrograman[i]}<br/>`);
// }

// let hari = ["senin", "selasa", "rabu", "kamis", "jumat", "sabtu", "minggu"]; //ini array
// hari.forEach(function (hari) {
//     document.write(`<h1>${hari}</h1>`);
// })

// hari.forEach((hari) => {
//     document.write(`<h1>${hari}</h1>`) 

// });
//perulangan dengan method repeat()
//perulangan dengan menggunakan method atau fungsi repeat() termasuk dalam perulangan counted loop

//fungsi ini khusus digunakan untuk mengulang teks (string);

// for (let i = 0; i < 10; i++){
//     document.write(`ulangi kalimat ini! <br>`);
// }

// document.write(`Ulangi kalimat ini! <br>`.repeat(10));

//6. perulangan nested (bersarang) 
//NESTED loop adalah perulangan bersarang (perulangan di dalam perulangan)

// for (let i = 0; i < 10; i++){
//     for (let j = 0; j < 10; j++){
//         document.write(`<p>perulangan ke- ${i}, ${j} </p>`)
//     }
// } 

// var ulangi = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulangi){
//     var jawab = confirm("Apakah anda mau mengulang?")
//     counter++;
//     if(jawab == false){
//         ulangi = false;
//     }
// }

// document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

// var ulangi = confirm("Apakah anda mau mengulang?");
// var counter = 0;

// while(ulangi){
//     counter++;
//     ulangi = confirm("Apakah anda mau mengulang?");
// }

// document.write("Perulangan sudah dilakuakn sebanyak "+ counter +" kali");

var ulangi = confirm("apakah anda ingin mengulang?");
var counter = 0;

while (ulangi) {
    counter++;
    var bintang = "*".repeat(counter) + "<br>";
    document.write(counter + ": " + bintang);
    ulangi = confirm("apakah anda ingin mengulang?");
}