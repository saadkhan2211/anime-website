import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Shop from './Pages/Shop/Shop';
import Login from './Pages/Login/Login';
import Cart from './Pages/Cart/Cart';
import Home from './Pages/Home/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/'element={<Home/>}/>
          <Route path='/shop' element={<Shop/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
