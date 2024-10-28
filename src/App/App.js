import { Provider } from 'react-redux'
import { store } from './app/store';
import './App.css';
import Cart from '../features/cart/cart';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Cart />
      </div>
    </Provider>
  );
}

export default App;
