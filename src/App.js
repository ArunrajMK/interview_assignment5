
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer';

import MainRoute from './components/MainRoute';
import Navbar from './components/Navbar';


function App() {



  return (
    <div className="App">
    <MainRoute/>
    {/* <Navbar/> */}
   
    </div>
  );
}

export default App;
