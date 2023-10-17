const { readJSONFile, writeJSONFile} = require('./src/helpers');
const { create, index, show, destroy, edit} = require('./src/controller');

const inform = console.log

const sneakers = readJSONFile(`./data`, `sneakerCart.json`);