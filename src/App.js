
import './App.css';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar/>
   
 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
