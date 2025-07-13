/**
 * buatlah sebuah fungsi dengan fitur dimana user bisa menambahkan.
 * dan melihat data file yang disimpan dengan menggunakan package interna
 * dibawah ini:
 * fs - untuk menyimpan data mengambil file 
 * readline - untuk menerima unput user
 * path - untuk hal-hal yang berkaitan dengan file paths
 */

import  fs  from 'fs';

// path for ESmodule
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const directoryPath = path.join(__dirname, '../data/');
const fileName = 'my_database.json';
const filePath = path.join(directoryPath, fileName);

const dataBaseBaru =
    `[
    {"no":0,"catatan":"database baru"}
]`;

// function untuk bacadata my_database.json
async function bacaData() {
    // coba baca file jika tidak ada maka buat baru
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        // console.log('File content:', data);
        const jsonData = await JSON.parse(data);
        // console.log(jsonData);
        return jsonData;
    } catch (err) {
        // buat file atau directory jika tidak ada
        console.error('Error reading file: direktori tidak ditemukan');
        fs.mkdirSync(directoryPath, { recursive: true });
        fs.writeFileSync(filePath, dataBaseBaru);
        console.log("Buat database baru...");

        console.error('Error reading file:', err);
    }

}

// function untuk tambah/tulisData my_database.json
async function tulisData(inputData) {
    try{
        // ambil max data currentData, dan masukan info sebagai no
        // dan catatan dengan inputData, lalu push newData ke currentData
        const test = await bacaData();
        const newData = { no: test.length, catatan: inputData };
        test.push(newData);
        fs.writeFileSync(filePath, JSON.stringify(test));
    }catch(err){
        console.error(err);
    }
}



// function untuk ubahdata my_database.json
async function ubahData(noData, inputUbah) {
    try{
        const test = await bacaData();
        test[noData].catatan = inputUbah;
        fs.writeFileSync(filePath, JSON.stringify(test));
    }catch(err){
        console.error(err);
    }
}


// function untuk hapusdata my_database.json
async function hapusData(noHapus) {
    try{
        const test = await bacaData();
        const newData = test.splice(noHapus, 1);
        fs.writeFileSync(filePath, JSON.stringify(test));
    } catch(err){
        console.error(err);
    }
}

export { bacaData, tulisData, ubahData, hapusData };