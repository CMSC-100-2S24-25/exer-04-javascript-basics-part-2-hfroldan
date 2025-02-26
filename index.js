import { v4 as uuidv4 } from 'uuid';
import isEmail from 'validator/lib/isEmail.js';
import { appendFileSync } from 'node:fs';

function generateUniqueID(firstName, lastName) {
    return `${firstName[0].toLowerCase()}${lastName.toLowerCase()}${uuidv4().replace(/-/g,'').substring(0, 8)}`
}

function isStringNull(str) {
    return str === null
}

function addAccount(accInfo) {
    if (!Array.isArray(accInfo) || accInfo.length != 4) return false;

    let [firstName, lastName, email, age] = accInfo

    if (isStringNull(firstName) || 
        isStringNull(lastName) || 
        isStringNull(email) ||
        !isEmail(email) || 
        age < 18
    ) {
        return false;
    }

    accInfo.push(generateUniqueID(firstName, lastName))

    try {
        appendFileSync('users.txt', `${accInfo.join(',').toString()}\n`)
        return true
    } catch (error) {
        console.error("Error appending data to file:", error.message);
        return false
    }
}

export default {generateUniqueID, addAccount}