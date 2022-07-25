'use strict'

const fs = require('fs/promises');

module.exports = async () => {
    try {
        const data = await fs.readFile('./index.html', { encoding: 'utf8' });
        return data;
    } catch (err) {
        console.log("Error whille reading file : ", err);
    }
}   