const fs = require('fs');
const filename = 'firstFile.txt';
fs.closeSync(fs.openSync(filename, 'w'));
const filename2 = 'secondFile.txt';
fs.closeSync(fs.openSync(filename2, 'a'));
