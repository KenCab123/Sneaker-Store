const { create, index, show, destroy, edit, total} = require(`../src/controller`);

describe("Controller Functions", () => {
    describe("create()", () => {
        it("should add a sneaker of you choice to the cart if the sneaker is in store", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
            const input2 = "Jordan 1";
            const actual = create(input1, input2);
            const expected = input1.length + 1
            expect(actual.length + 1).toEqual(expected)
        })
    })

    describe("create()", () => {
        it("should print 'Sneaker not found' if sneaker is not in sneaker stock", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
            const input2 = "jkjkj";
            const actual = create(input1, input2);
            const expected = input1
            expect(actual).toEqual(expected)
        })
    })


    describe("index()", () => {
        it(`should display all sneakers in the cart`, () => {
            const input = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
            
            const actual = index(input)
            const expected = [
                'GKZqT | Jordan 1 | inStock: false | rarity: 92 | price: 150',
                'iQhHH | Air Max 90 | inStock: true | rarity: 90 | price: 120'
              ]
              expect(actual).toEqual(expected)
        })
    })



    describe("show()", () => {
        it("should only display the specified show you input", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "iQhHH"
              const actual = show(input1, input2)
              const expected = "iQhHH | Air Max 90 | inStock: true | rarity: 90 | price: 120"
              expect(actual).toEqual(expected)
        })
    })
    

    describe("destroy()", () => {
        it("should delete the specified show you input if it the sneaker is in the store", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "iQhHH"
              const actual = destroy(input1, input2)
              const expected = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                }
              ]
              expect(actual).toEqual(expected)
        })
    })


    describe("destroy()", () => {
        it("should print 'Sneaker not found. No action taken' if the sneaker is not sold in the store", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "opopop"
              const actual = destroy(input1, input2)
              const expected = input1
              expect(actual).toEqual(expected)
        })
    })

    
    describe("edit()", () => {
        it("should update a sneaker in the cart with a different sneaker of your choice", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "iQhHH"
              const input3 = "NMD R1"
              const actual = edit(input1, input2, input3)
              const expected = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                    "id": "iQhHH",
                    "name": "NMD R1",
                    "inStock": true,
                    "rarity": 87,
                    "price": 130
                  }
              ]
              expect(actual).toEqual(expected)
        })
    })


    describe("edit()", () => {
        it("should print `Sneaker not found. No action taken' if the id is incorrect", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "iQhHj"
              const input3 = "NMD R1"
              const actual = edit(input1, input2, input3)
              const expected = input1
              expect(actual).toEqual(expected)
        })
    })

    
    describe("edit()", () => {
        it("should print `Sneaker '${updatedSneaker}' does not exist in the stock. No action taken` if the sneaker is not sold in the store", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const input2 = "iQhHH"
              const input3 = "NMD R7"
              const actual = edit(input1, input2, input3)
              const expected = input1
              expect(actual).toEqual(expected)
        })
    })


    describe("total()", () => {
        it("should print total price of all the sneakers in the cart", () => {
            const input1 = [
                {
                  "id": "GKZqT",
                  "name": "Jordan 1",
                  "inStock": false,
                  "rarity": 92,
                  "price": 150
                },
                {
                  "id": "iQhHH",
                  "name": "Air Max 90",
                  "inStock": true,
                  "rarity": 90,
                  "price": 120
                }
              ]
              const actual = total(input1)
              const expected = 270
              expect(actual).toEqual(expected)
        })
    })

})