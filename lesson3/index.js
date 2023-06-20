const { format } = require('date-fns');
const { v4: uuid} = require('uuid');


console.log('index.js : บรรทัดที่ #4' + ' ' + format(new Date(), "yyyy:MM:dd \t HH:mm:ss")); 
console.log('index.js : บรรทัดที่ #6' + ' ' + uuid());  