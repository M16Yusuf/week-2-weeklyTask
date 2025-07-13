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

/**
 * Promise adalah salah satu cara untuk mengandle asynchrounous
 * program, dengan cara kerja memberikan perwakilan dari sebuah 
 * nilai yang belum diketahui nilainya saat promise dibuat. 
 * Promise dapat gigunakan dengan fungsi handler dalam 
 * kesuksesan dan kegagalan dalam sebuah proses aynchronous.
 */

/**
 * then catch sebuah method dari instance promise yang dapat digunakan untuk
 * menangani proses asynchronous, dapat digunakan untuk mereturn object 
 * dari promise lain atau memanggil fungsi lain apabila promise ditolak 
 */

//menggunakan function diatas untuk handling then catch
// pencocokan akun
const catchLogin = function(inputUser, inputPass){
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

/**
 * Async await adalah salah satu cara menghandle proses asychronous. 
 * Perintah atau syntax paling mudah dipahami dalam asychronous, dimana 
 * kita merubah function seolah olah menjadi beerjalan secara sychronous,
 * dan await didalam function itu akan menunda eksekusi hingga proses asychronous
 * selesai.
 */

// menggunakan function diatas 
// handling menggunakan async await
async function asyncLogin (userIn, passIn) {
    const user = "yusuf";
    const pass = "admin";

    const result = await fetchData(userIn == user && passIn == pass);
    console.log(result);
}

/**
 * Try catch digunakan sebagai error handling, digunakan sebagai error handling 
 * dalam perngkondisian atau error handling dalam asychronous program. 
 */

// menggunakan function diatas 
// handling menggunakan try catch
async function tryLogin (userIn, passIn){
    try{
        const user = "yusuf";
        const pass = "admin";
        const result = await fetchData(userIn == user && passIn == pass);
        console.log(result);
    }catch(err){
        console.log(err);
    }
};


export { catchLogin, asyncLogin, tryLogin };