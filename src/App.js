import './App.css';
import { useCart } from './useCart';
import {Checkout} from './Checkout.js'

const marketPlace = [{price:  10,productName: 'Dark side of the moon - Pink Floyd', id: 1, img: 'https://cdn.lorem.space/images/album/.cache/150x150/dark-side-of-the-moon_pink-floyd.jpg'},{price:  10,productName: 'Take care - Drake', id:2, img: 'https://cdn.lorem.space/images/album/.cache/150x150/take-care_drake.jpg'},{price:  10,productName: 'Nevermind - Nirvana', id:3, img: 'https://cdn.lorem.space/images/album/.cache/150x150/nevermind_nirvana.jpg'}, {price:  10,productName: 'I wanna thank me - Snoop Dogg',id: 4, img: 'https://cdn.lorem.space/images/album/.cache/150x150/i-wanna-thank-me_snoop-dogg.jpg'}] 


function App() {
  const cart = useCart();

  const imgRender = {
    padding: '20px'
  }

  const handleAdd = (item) => {
    console.log(item)
    return cart.addItem({productName: item.productName, id: item.id, price: item.price, img: item.img})
  }

  console.log(cart.items)

  const renderedItems = marketPlace.map(item => {
    return (
    <div>
      <img 
      onClick={() => handleAdd(item)} 
      style={imgRender}
      key={item.id} 
      src={item.img} 
      alt={item.id}>
      </img>
      <div>{item.productName}</div>
      <div>${item.price}</div>
    </div>
    )
  })

  const openCart = (cart) => {
    <Checkout cart="cart"/>
  }
  
  return (
    <div className="App">
      <h1>My Pick</h1>
      {renderedItems}
      <button onClick={() => openCart()}>CheckOut</button>
    </div>
    
  );
}

export default App;
