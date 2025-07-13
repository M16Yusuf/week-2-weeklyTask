/**
 *    WEEKLY TASK 
 *    "Muhammad Yusuf"
 *    Bootcamp Koda batch 3 golang fullstack
 */
import { catchLogin, asyncLogin, tryLogin } from "./src/task1.js";
import { getDataFromServer, processData } from "./src/task2.js";
import { dapatkanData } from "./src/task3.js";
import { divideAndsort } from "./src/task4.js";

// nomor 1
const testUser = "yusuf";
const testPass = "admin";
asyncLogin(testUser, testPass);
catchLogin(testUser, testPass);
tryLogin(testUser, testPass);


// nomor 2
const testNo2 = true; 
getDataFromServer(testNo2, processData);


// Nomor 3
(async function(){
    const url = "https://jsonplaceholder.typicode.com/users";
    const resss = await dapatkanData(url);
    console.log(resss);
})();


// nomor 4
console.log(divideAndsort(5956560159466056));
// output 56159466595656