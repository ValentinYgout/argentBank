
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Spinner from './components/Spinner';
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router, Routes, Route,
} from "react-router-dom";


function App() {
  const isLoading = useSelector(state => state.auth.isLoading);
  return (
    <div className="App">
      <NavBar/>
      {(isLoading && <Spinner/>)}
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
