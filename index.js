/**
 *    WEEKLY TASK 
 *    "Muhammad Yusuf"
 *    Bootcamp Koda batch 3 golang fullstack
 */
import { clear } from "node:console";
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


// funtion handling jawaban nomor 1-4
async function jawabanLain() {
    // nomor 1
    // penggunana then-catch, async await, dan try catch
    console.log("========== [ Jawaban nomor 1 ] ==========");
    console.log("penggunana then-catch, async await, dan try catch (timeout 3detik)");
    const testUser = "yusuf";
    const testPass = "admin";
    asyncLogin(testUser, testPass);
    catchLogin(testUser, testPass);
    tryLogin(testUser, testPass);
    // tunggu nomor 1 keluar 
    await new Promise(resolve => setTimeout(resolve, 3500));

    
    // nomor 2
    // print perulangan product timeout 3 detik
    console.log("========== [ Jawaban nomor 2 ] ==========");
    console.log("print perulangan product (timeout 3 detik)");
    const testNo2 = true; 
    getDataFromServer(testNo2, processData);
    // tunggu nomor kedua keluar
    await new Promise(resolve => setTimeout(resolve, 4000));


    // Nomor 3
    // output nama dan domisili
    console.log("========== [ Jawaban nomor 3 ] ==========");
    console.log("reconstruc data {nama, domisili} dari url json");
    (async function(){
        const url = "https://jsonplaceholder.typicode.com/users";
        const resss = await dapatkanData(url);
        console.log(resss);
    })();
    await new Promise(resolve => setTimeout(resolve, 1500));


    // nomor 4
    console.log("========== [ Jawaban nomor 4 ] ==========");
    console.log("ubah inputan = 5956560159466056, jadi = 56159466595656 integer");
    // output 56159466595656
    console.log(divideAndsort(5956560159466056));
}


// nomor 5 
(async function() {
    const menuTable = [
        { menu: "close menu"},
        { menu: "Lihat data"},
        { menu: "Tambah data"},
        { menu: "Update data"},
        { menu: "delete data"},
        { menu: "Kembali ke menu"},
        { menu: "tampil jawaban lain"},
    ];

    let close = false;
    while (close == false){
        // panggil data terlebih dahulu dan kasih delay
        console.log("loading.....");
        const result = await bacaData();
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        // clear dan munculkan tabel menu
        console.clear();
        console.table(menuTable);

        // menunggu inputan      
        let menu = await rl.question('Apa yang akan anda lakukan? ');
        switch(menu){
            case "0":
                close = true;
                rl.close();
                break;
            case "1":
                console.clear();
                console.log("|=========== [ DATABASE ] ============|");
                console.table(result); 
                console.log(`input "5" kembali ke menu`);
                console.log(`input "0" close program`);   
                menu = await rl.question('Apa yang akan anda lakukan? ');
                break;
            case "2":
                console.clear();
                console.log("|=========== [ DATABASE ] ============|");
                console.table(result); 
                const addData = await rl.question('Masukan catatan baru : ');
                tulisData(addData);
                // habis ubah/update balik ke menu
                console.clear();
                console.table(menuTable);
                break;
            case "3":
                console.clear();
                console.log("|=========== [ DATABASE ] ============|");
                console.table(result); 
                const noDataubah = await rl.question('nomor yang mau dirubah : ');
                const changeDat = await rl.question('Masukan catatan baru : ');
                ubahData(noDataubah, changeDat);
                // habis ubah/update balik ke menu
                console.clear();
                console.table(menuTable);
                break;
            case "4":
                console.table(result); 
                const noDathapus = await rl.question('nomor yang mau dihapus : ');
                hapusData(noDathapus);
                // habis hapus balik ke menu
                break;
            case "5":
                console.clear();
                console.table(menuTable);
                break;
            case "6":
                await jawabanLain(); 
                await new Promise(resolve => setTimeout(resolve, 1000)); 
                console.log("|========================================|");
                menu = await rl.question('input "5" kembali ke menu : ');
                break;
        }
    }
})();