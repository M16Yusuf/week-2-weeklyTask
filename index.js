/**
 *    WEEKLY TASK 
 *    "Muhammad Yusuf"
 *    Bootcamp Koda batch 3 golang fullstack
 */
import { catchLogin, asyncLogin, tryLogin } from "./src/task1.js";
import { getDataFromServer, processData } from "./src/task2.js";


// nomor 1
const testUser = "yusuf";
const testPass = "admin";
asyncLogin(testUser, testPass);
catchLogin(testUser, testPass);
tryLogin(testUser, testPass);


// nomor 2
const testNo2 = true; 
getDataFromServer(testNo2, processData);
