/**
 * Diberikan sebuah fungsi fetchData yang mengembalikan 
 * promise. Fungsi ini akan resolve dengan data "Data berhasil disimpan"
 * setelah 3 detik. atau reject error "Gagal mengambil data" jika terjadi
 * kesalahan. Sambunglah kode berikut untuk menambah handling then-catch,
 * asyn-await dan dan try-catch yang akan menangani sukses atau gagalnya 
 * pengambilan data.
 * Tambahkan penjelesan terkait promise, then-catch, async-await dan try-catch
 * dalam bentuk comment. 
 */

// diketahui sebuah fungsi fetchData untuk mengecek status
const fetchData = (status) => {
    return new Promise((resolve, reject)=>{
        if(status){
            setTimeout(()=>{
                resolve("Data berhasil disimpan");
            }, 3000);
        } else {
            reject("Gagal mengambil data");
        }
    });
};



//menggunakan function diatas untuk handling then catch
// pencocokan akun
const pengecekanLogin = function(inputUser, inputPass){
    const user = "yusuf";
    const pass = "admin";

    fetchData(inputUser == user && inputPass == pass)
        .then((accept)=>{
            console.log(accept);
        })
        .catch((reject)=>{
            console.log(reject);
        }); 
};
pengecekanLogin("yusuf", "admin");


// menggunakan function diatas 
// handling menggunakan async await
async function cekLogin (userIn, passIn) {
    const user = "yusuf";
    const pass = "admin";

    const result = await fetchData(userIn == user && passIn == pass);
    console.log(result);
}
cekLogin("yusuf", "admin");


// menggunakan function diatas 
// handling menggunakan try catch
async function cobaLogin (userIn, passIn){
    try{
        const user = "yusuf";
        const pass = "admin";
        const result = await fetchData(userIn == user && passIn == pass);
        console.log(result);
    }catch(err){
        console.log(err);
    }
};
cobaLogin("yusuf", "root");