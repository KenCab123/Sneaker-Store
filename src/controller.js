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

const destroy = (sneakers, sneakerId) => {
    const index = sneakers.findIndex(s => s.id === sneakerId);

    if(index > -1) {
        sneakers.splice(index, 1);
        inform(`Sneaker successfully removed from cart`);
        return sneakers;
    } else {
        inform(`Sneaker not found. No action taken`);
        return sneakers
    }
}

const edit = (sneakers, sneakerId, updatedSneaker) => {
    const index = sneakers.findIndex(s => s.id === sneakerId);

    if (index > -1 && sneakerStock[updatedSneaker]) {
        sneakers[index].id = sneakerId;
        sneakers[index].name = updatedSneaker;
        sneakers[index].rarity = sneakerStock[updatedSneaker].rarity;
        sneakers[index].price = sneakerStock[updatedSneaker].price;
        inform(`Sneaker was successfully updated`);
    } else if (index === -1) {
        inform(`Sneaker not found. No action taken`);
    } else {
        inform(`Sneaker '${updatedSneaker}' does not exist in the stock. No action taken`);
    }

    return sneakers;
}

const total = sneakers => sneakers.reduce((acc, curr) => acc + curr.price, 0);

module.exports = {
    create,
    index,
    show,
    destroy,
    edit,
    total
}