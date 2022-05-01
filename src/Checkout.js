import {useCart} from './Cart.js'

function Checkout ({cart}) {
    console.log(cart.items)
    return (
        <div>{cart.items}</div>
    ) 
}

export default Checkout;