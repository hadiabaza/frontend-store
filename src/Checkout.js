import { useCart } from './useCart'

function Checkout () {
    const cart = useCart()
    console.log('hello')
    return (
        <div>{cart.items}</div>
    ) 
}

export default Checkout;