/**
 * Diberikan sebuah fungsi getDataFromServer. Fungis getDataFromServer
 * mensimulasikan pengambilan data dari server dengan setTimeout dan 
 * menerima callback yang akan dipanggil setelah data berhasil diambil. 
 * Lanjutkan kode tersebut, buatkan callback bernama processData untuk 
 * handling error dengan menggunakan try-catch dan meng-outputkan data 
 * dari parameter callback hasil pemanggilan getDataFromServer.
*/
// diketahui function yang memanggil callback 
const getDataFromServer = (status, callback) => {
    if(status){
        setTimeout(() => {
           const products = [
            'product1',
            'product2',
            'product3',
           ];
           callback(products, null);
        }, 3000);
    } else {
        const err = new Error('Failed to fetch data');
        callback(null, err);
    }
};

// buatlah callback untuk 
// callback processData
async function processData (stats, info){
    try{
        const result = await stats;
        if (result == null){
            throw info;
        } else {
           for(let i = 0; i< stats.length; i++){
                console.log(`data ke-${i+1} : ${stats[i]}`);
           }
        }
    } catch (err){
        console.log(err.message);
    }
}

export {getDataFromServer, processData};

