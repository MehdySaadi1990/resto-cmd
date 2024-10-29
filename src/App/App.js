import { Provider } from 'react-redux'
import { store } from './app/store';
import './App.css';
import Cart from '../features/cart/cart';
import Total from '../features/total/total';
import Voucher from '../features/voucher/voucher';
import Owner from '../features/owner/owner';
import Menu from '../features/menu/menu';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Menu />
      <Cart />
      <Total />
      <Voucher/>
      <Owner/>
      </div>
    </Provider>
  );
}

export default App;
