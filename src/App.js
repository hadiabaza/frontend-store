import './App.css';
import { useCart } from './useCart';

const marketPlace = [{price: $ +'10',productName: 'Dark side of the moon - Pink Floyd', id: 1, img: 'https://cdn.lorem.space/images/album/.cache/150x150/dark-side-of-the-moon_pink-floyd.jpg'},{price: $ +'10',productName: 'Take care - Drake', id:2, img: 'https://cdn.lorem.space/images/album/.cache/150x150/take-care_drake.jpg'},{price: $ +'10',productName: 'Nevermind - Nirvana', id:3, img: 'https://cdn.lorem.space/images/album/.cache/150x150/nevermind_nirvana.jpg'}, {price: $ +'10',productName: 'I wanna thank me - Snoop Dogg',id: 4, img: 'https://cdn.lorem.space/images/album/.cache/150x150/i-wanna-thank-me_snoop-dogg.jpg'}] 


function App() {
  const cart = useCart();

  const imgRender = {
    padding: '20px'
  }

  const renderedItems = marketPlace.map(item => {
    return (<img 
    onClick={cart.addItem(productName: item.productName, id: item.id, price: item.price)} 
    style={imgRender}
    key={item.id} 
    src={item.img} 
    alt={item.id}></img>)
  })
  
  return (
    <div className="App">
      <h1>My Pick</h1>
      {renderedItems}
    </div>
  );
}

export default App;
