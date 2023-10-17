import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './Pages/Landing';
import Anime from './Pages/Anime';
import Login from './Pages/Login';


const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Landing />}/>

          <Route path='/anime' element={
            <div>
              {/* <NavBar/> */}
              <Anime/>
            </div>
          }/>

          <Route path='/auth' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
