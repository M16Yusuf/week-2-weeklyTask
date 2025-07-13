/**
 * diberikan sebuah sebuah variable yang berisikan bilangan integer dengan
 * ketentuan angka 0 (nol) dalam variable tersebut merupakan pemisah antara satu
 * bilangan dengan bilangan lainnya. Bilangan-bilangan tersebut akan dipisahkan
 * dan diurutkan berdasarkan angka di bilangan-bilangan itu sendiri. Setelah itu,
 * bilangan hasil pengurutan akan digabungkan kembali dengan tanpa pemisah dengan 
 * output berupa bilangan integer. Buatlah sebuah function yang menerima parameter
 * hanya deret angka dan menghasilkan output seperti keterangan diatas.
 */


const divideAndsort = function(arrayInput){
    // ubah inputan integer ke string
    const toString  = arrayInput.toString();
    // split inputan string dengan "0"  sebagai pemisah hasil array
    const arrayRes = toString.split("0");
    // ubah kembali tiap string array jadi integer dalam perulangan
    let nweArrayRes = [];
    for(let i = 0; i < arrayRes.length; i++){
        nweArrayRes[nweArrayRes.length] = parseInt(arrayRes[i]);
    }
    // urutkan hasil array integernya
    nweArrayRes.sort((a, b) => a - b);
    // gabung hasil urutnya, dan berubah jadi string
    const gabung = nweArrayRes.join("");
    // hasil string diubah lagi menjadi integer, returnkan hasil
    const result = parseInt(gabung);
    return result;
}


export { divideAndsort };


