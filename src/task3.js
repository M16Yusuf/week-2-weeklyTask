/**
 * Buatlah program menggunakan FETCH API dari REST API
 * https://jsonplaceholder.typicode.com/users, dengan ketentuan
 * - output merupakan array of object memiliki data nama dan 
 *   domisili dari masing-masing user.
 * - Output diurutkan berdasarkan domisilinya secara ascending
 */

// return array of object {nama, domisili} 
async function dapatkanData (url){
    try{
        // dapatkan response dari fetch url 
        const response = await fetch(url);
        // jika response false throw error status
        if(!response.ok) throw response.status;
        // dapatkan data response dengan method json
        const result = await response.json();
        // reconstruc data array of object result jadi yang baru
        const reconstrucResult = result.map(item => ({
            nama: item.name,
            domisili: item.address.city,
        }));
        // urutkan menggunakan sort localecompare
        const urut = reconstrucResult.sort((a,b)=>a.domisili.localeCompare(b.domisili));
        return urut;
    }catch (err) {
        // catch menangkap throw return error message
        return err.message;
    }
}


export { dapatkanData };