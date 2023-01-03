const fs = require('fs')

var fileContent = 'Hello World !'
var filename = 'welcome.txt'


fs.writeFile(filename, fileContent, (err) => {
    if (err) throw err;
    console.log('The file was succesfuly created !')
})


fs.readFile(filename, (err, data) => {
    console.log(' read File => ',data.toString())    
})