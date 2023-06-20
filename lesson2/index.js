const fsPromises = require('fs').promises;
const path = require('path');


const fileOops = async() => {
    try {
        const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
        console.log('index.js : บรรทัดที่ #8' + ' ' + data.toString());

        await fsPromises.unlink(path.join(__dirname, 'files', 'starter.txt'))

        await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), data);

        await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n \n Nice to meet you : Append Promise')

        await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseNewName.txt'))

        const newData = await fsPromises.readFile(path.join(__dirname, 'files', 'promiseNewName.txt'), 'utf-8');
        
        console.log('index.js : บรรทัดที่ #18' + ' ' + newData.toString());


    } catch (error) {
        console.error(err)
    }
}

fileOops();

/* 
fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
    if (err) throw err;

    console.log(data);
});
 */

/* 
fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you again', (err) => {
    if (err) throw err;

    console.log("👋 Write Completed...");

    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), ' \n \n \n Yes it is.', (err) => {
        if (err) throw err;
    
        console.log("👋 Append Completed... ( IN )");
    })

    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
        if (err) throw err;

        console.log("🎉 Rename File() completed");
    })
});

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), ' Testing Text Text Text', (err) => {
    if (err) throw err;

    console.log("👋 Append Completed... ( Out )");
})
 */


// Exit on uncaught errors

process.on('uncaughtException', err => {
    console.error(`🥺 🥺 🥺 Oops!!! :  There was an uncaught error: ${err}`);
    process.exit(1)
})