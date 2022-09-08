let csvToJson = require('convert-csv-to-json');
let fileInputName = 'myInputFile.csv';
let fileOutputName = 'myOutputFile.json';
// let json = require('./myOutputFile.json');

csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName); //making ',' be the Separator
csvToJson.parseSubArray('*', ' ').getJsonFromCsv('myInputFile.csv'); //making '*' be the Delimiter and an " " the Separator
csvToJson.generateJsonFileFromCsv(fileInputName, fileOutputName); //taking our input file, processing it and outputting it

// if (json) {
//   console.log(json);
// }
