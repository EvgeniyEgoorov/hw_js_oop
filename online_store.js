class Good {
    constructor(id, name, description, sizes, price, available) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.sizes = sizes;
        this.price = price;
        this.available = available;
    }
    setAvailable(status) {
        this.available = status;
    }
}

class GoodsList {
    #goods
    constructor(filter, sortPrice, sortDir) {
        this.#goods = [];
        this.filter = filter;
        this.sortPrice = sortPrice;
        this.sortDir = sortDir;
    }
    get list() {
        const forSaleList = this.#goods.filter(good => this.filter.test(good.name));

        if (!this.sortPrice) {
            return forSaleList;
        }

        if (this.sortDir) {
            return forSaleList.sort((a, b) => (a.price - b.price));
        }
        return forSaleList.sort((a, b) => (b.price - a.price));
    }

    add(newGood) {
        this.#goods.push(newGood);
    }

    remove(id) {
        const getIndex = this.#goods.findIndex(good => good.id === id);
        if (getIndex != undefined) {
            this.#goods.splice(getIndex, 1);
        }
        return getIndex;
    }
}


const first = new Good(1, "T-shirt", "color: white, material: coton", ["S", "M", "XL"], 1500, true);
const second = new Good(2, "Dress", "color: red, material: silk", ["S", "M", "L"], 10000, true);
const third = new Good(3, "Jacket", "color: black, material: leather", ["XS", "M", "XXL"], 35000, true);
const fourth = new Good(4, "Jeans", "color: blue, material: coton", ["S", "M", "L", "XL"], 8000, true);
const fifth = new Good(5, "Shorts", "color: grey, material: coton", ["L", "XL"], 4500, true);

// second.setAvailable(false);

// console.log(second)