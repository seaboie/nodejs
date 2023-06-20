const { format } = require('date-fns');
const { v4: uuid } = require('uuid');
const fs = require('fs');
const fsPromises = require('fs/promises');
const path = require('path');

const logEvents = async (message) => {
    const dateTime = `${format(new Date(), "yyyy:MM:dd \t HH:mm:ss")}`;
    const logItem = `${dateTime} \t ${uuid()} \t ${message} \n`;

    console.log('logEvents.js : บรรทัดที่ #11' + ' ' + logItem);  

    try {
        if (!fs.existsSync(path.join(__dirname, 'logs'))) {
            fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', 'eventLog.txt'), logItem);

    } catch (error) {
        console.error(error);
    }
}

module.exports = logEvents;