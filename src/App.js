import logo from './logo.svg';
import './App.css';
import WishList from './components/WishList';
import Vegetables from './components/Vegetables';

function App() {
  return (
    <div className="App">
      <WishList />
      <hr/>
      <Vegetables/>
    </div>
  );
}

export default App;
