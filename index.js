/**
 *    WEEKLY TASK 
 *    "Muhammad Yusuf"
 *    Bootcamp Koda batch 3 golang fullstack
 */
import { catchLogin, asyncLogin, tryLogin } from "./src/task1.js";
import { getDataFromServer, processData } from "./src/task2.js";
import { dapatkanData } from "./src/task3.js";
import { divideAndsort } from "./src/task4.js";
import { bacaData, tulisData, ubahData, hapusData } from "./src/task5.js";

// import readline promises 
import * as readlinePromises from 'node:readline/promises';

const rl = readlinePromises.createInterface({
  input: process.stdin,
  output: process.stdout,
});


// // nomor 1
// const testUser = "yusuf";
// const testPass = "admin";
// asyncLogin(testUser, testPass);
// catchLogin(testUser, testPass);
// tryLogin(testUser, testPass);


// // nomor 2
// const testNo2 = true; 
// getDataFromServer(testNo2, processData);


// // Nomor 3
// (async function(){
//     const url = "https://jsonplaceholder.typicode.com/users";
//     const resss = await dapatkanData(url);
//     console.log(resss);
// })();


// // nomor 4
// console.log(divideAndsort(5956560159466056));
// // output 56159466595656


// nomor 5 
(async function() {
    const menuTable = [
        { menu: "close menu"},
        { menu: "Lihat data"},
        { menu: "Tambah data"},
        { menu: "Update data"},
        { menu: "delete data"},
        { menu: "Kembali ke menu"},
    ];


    // clear dan munculkan tabel menu
    console.clear();
    console.table(menuTable);
    const result = await bacaData();

    let close = false;
    while (close == false){        
        // menunggu inputan      
        const menu = await rl.question('Apa yang akan anda lakukan? ');
        switch(menu){
            case "0":
                close = true;
                rl.close();
                break;
            case "1":
                console.clear();
                console.table(result); 
                console.table(menuTable);   
                break;
            case "2":
                console.table(menuTable);
                const addData = await rl.question('Masukan catatan baru : ');
                tulisData(addData);
                break;
            case "3":
                console.table(result); 
                const noDataubah = await rl.question('nomor yang mau dirubah : ');
                const changeDat = await rl.question('Masukan catatan baru : ');
                ubahData(noDataubah, changeDat);
                break;
            case "4":
                console.table(result); 
                const noDathapus = await rl.question('nomor yang mau dihapus : ');
                hapusData(noDathapus);
                break;
            case "5":
                console.clear();
                console.table(menuTable);
                break;
        }
    }
})();