
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';

import Home from './pages';
import MainPage from './pages/mainPage';
import SigninPage from './pages/signin';

function App() {
  return (
    <Router>
     
      <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/signin" element={<SigninPage/>}/>
          <Route exact path="/mainPage" element={<MainPage/>}/>
          
      </Routes>
      
    </Router>
     
    
  );
}

export default App;
