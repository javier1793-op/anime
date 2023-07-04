import {Routes, Route} from 'react-router-dom'


import Login from './Components/Login';
import Home from './Components/Home';

import "./App.css";
import Details from './Components/Details';


function App() {


  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Details/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
