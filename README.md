# Sneaker Store Application

Welcome to our Sneaker Store Application! This application enables you to manage a virtual sneaker store, allowing you to browse available sneakers, add them to your cart, update cart items, view detailed information about sneakers, and remove items from your cart. Below, you'll find details on how to get started and an explanation of the core functions powering this application.

## Features

- **Add to Cart:** Add your favorite sneakers to your cart if they are in stock.

- **Update Cart:** Modify the quantity, name, rarity, or price of sneakers in your cart.

- **View Sneaker Details:** Access detailed information about a specific sneaker, including its availability, rarity, and price.

- **Remove from Cart:** Remove sneakers from your cart if you change your mind.

## Getting Started

### Prerequisites

- **Node.js:** Make sure you have Node.js installed. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository:**

```git clone https://github.com/your-username/sneaker-store.git```

2. **Navigate to the Project Directory:**

```cd sneaker-store```

3. **Install Dependencies:**

```npm install nanoid@3```

4. **Run the Application:**

```npm run {whatever command you type}```
```
[ npm run create "Air Max 90", 
  npm run index, 
  npm run show "pPhUU", 
  npm run destroy "pPhUU", 
  npm run update "pPhUU" "Jordan 1", 
  npm run total ]
```
## Controller Functions

### `create(sneakers, sneakerName)`
- Adds a sneaker to the `sneakers` array if it exists in the `sneakerStock`.
- Generates a custom ID, sets availability, rarity, and price.
- Returns the updated `sneakers` array.

### `index(sneakers)`
- Formats each sneaker's information into a string.
- Returns an array of formatted strings representing the sneakers in the store.

### `show(sneakers, sneakerId)`
- Finds a specific sneaker based on its ID.
- Returns detailed information about the sneaker if found, else "Sneaker not found."

### `destroy(sneakers, sneakerId)`
- Removes a sneaker from the `sneakers` array based on its ID.
- Returns the updated `sneakers` array after removal.

### `edit(sneakers, sneakerId, updatedSneaker)`
- Modifies details of a specific sneaker in the `sneakers` array based on its ID.
- Updates ID, name, rarity, and price if the sneaker exists in `sneakerStock`.
- Logs appropriate messages if the sneaker is not found or does not exist in the stock.
- Returns the updated `sneakers` array.

### `total(sneakers)`
- Calculates the total price of all sneakers in the `sneakers` array.
- Returns the total price.

By utilizing these controller functions, you can seamlessly manage your sneaker store, providing an enjoyable shopping experience to your customers. Happy coding!

---

Feel free to customize the README further based on additional details you want to provide or any specific instructions for users and contributors.