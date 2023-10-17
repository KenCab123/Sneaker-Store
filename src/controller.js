const { customAlphabet } = require('nanoid');

const sneakerStock = require("../data/sneakerStock.json");

const alphabet = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`;
const generateCustomId = customAlphabet(alphabet, 5);

const inform = console.log

const getRandomBoolean = () => Math.random() >= 0.5;


const create = (sneakers, sneakerName) => {
    if(!sneakerStock[sneakerName]) {
        inform(`Sneaker not found`);
        return sneakers;
    }

    const sneaker = {
        id: generateCustomId(),
        name: sneakerName,
        inStock: getRandomBoolean(),
        rarity: sneakerStock[sneakerName].rarity,
        price: sneakerStock[sneakerName].price
    }

    sneakers.push(sneaker);
    inform(`Sneaker added to cart`);
    return sneakers;
}

module.exports = {
    create
}