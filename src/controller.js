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

const index = (sneakers) => sneakers.map(s => s.id + ' | ' + s.name + ' | inStock: ' + s.inStock + ' | rarity: ' + s.rarity + ' | price: ' + s.price)

const show = (sneakers, sneakerId) => {
    const sneaker = sneakers.find(s => s.id === sneakerId);

    if(sneaker) {
        return sneaker.id + ' | ' + sneaker.name + ' | inStock: ' + sneaker.inStock + ' | rarity: ' + sneaker.rarity + ' | price: ' + sneaker.price
    } else {
        return `Sneaker not found`
    }
}

module.exports = {
    create,
    index,
    show
}