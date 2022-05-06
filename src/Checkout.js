import {useCart} from './Cart.js'

function Checkout ({cart}) {
    console.log('hello')
    return (
        <div>{cart.items}</div>
    ) 
}

export default Checkout;