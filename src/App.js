import logo from './logo.svg';
import './App.css';
import { useCart } from './useCart';

function App() {
  const cart = useCart();
  
  
  return (
    <div className="App">
      <p>{cart.items}</p>
    </div>
  );
}

export default App;
