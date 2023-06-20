const fs = require('fs');


if (!fs.existsSync('./new')) {

    fs.mkdir('./new', (err) => {
        if (err) throw err;
        
        console.log('dir.js : บรรทัดที่ #6' + '  🚀 Directory completed');
    })
}

if (fs.existsSync('./new')) {
    fs.rmdir('./new', (err) => {
        if (err) throw err;

        console.log('dir.js : บรรทัดที่ #17' + ' Remove Directories');
    })
}