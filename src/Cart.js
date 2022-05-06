export class Cart {
    constructor() {
        this.items = [];
    }
    
    addItem({productName, id, price}){
        let foundItem = this.items.find(item => item.id === id)
        if(foundItem) {
            foundItem.quantity++;
        } else {
            this.items.push({productName, price, id, quantity: 1})    
        }
    }

    removeItem({id}) {
        let foundItem = this.items.find(item => item.id === id);
        if(foundItem){
           this.items.splice(this.items.indexOf(foundItem), 1);
        } else {
            throw new Error('Product is not in cart!');
        }
    }

    decrementItem({id}) {
        let item = this.items.find(item => item.id === id) 
        if(item) {
            if(item.quantity > 1) {
                item.quantity--;
            } else {
                this.removeItem({id});
            }
        } else {
            throw new Error('Product does not exist in cart!')
        }
    }
    
    get total () {
        let sum = 0; 
        this.items.forEach(item => sum+= item.price * item.quantity)
        return sum;
    }

    get quantity () {
        // let quantity = 0;
        // this.items.forEach(item => quantity+= 1)
        // return quantity;
        return this.items.length;
    }
}

const item = new Cart();
item.addItem({productName:'orange', id: 2, price: 5})
item.addItem({productName:'apple', id: 3, price: 10 })
item.addItem({productName:'apple', id: 3, price: 10 })
// console.log({quantity: item.quantity, total: item.total})