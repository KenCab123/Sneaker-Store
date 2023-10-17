const { readJSONFile, writeJSONFile} = require('./src/helpers');
const { create, index, show, destroy, edit, total} = require('./src/controller');

const inform = console.log

const sneakers = readJSONFile(`./data`, `sneakerCart.json`);

const run = () => {
    let writeToFile = false;
    let updatedSneaker = [];

    const action = process.argv[2];
    const sneaker = process.argv[3];

    switch(action) {
        case 'create':
            updatedSneaker = create(sneakers, sneaker);
            writeToFile = true
            break;
        case 'index':
            const sneakersView = index(sneakers);
            inform(sneakersView);
            break;
        case 'show':
            const sneakerView = show(sneakers, sneaker);
            inform(sneakerView);
            break;
        case 'destroy':
            updatedSneaker = destroy(sneakers, sneaker);
            writeToFile = true;
            break;
        case 'update':
            updatedSneaker = edit(sneakers, sneaker, process.argv[4]);
            writeToFile = true;
            break;
        case 'total':
            const price = total(sneakers);
            inform(price);
            break;
        default:
            inform(`There was an error.`);
    }


    if(writeToFile) {
        writeJSONFile(`./data`, `sneakerCart.json`, updatedSneaker)
    }
}

run()