import {Routes, Route} from 'react-router-dom'


import Login from './Components/Login';
import Home from './Components/Home';

import "./App.css";
import Details from './Components/Details';
import List from './Components/List';


function App() {


  

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/detail' element={<Details/>}/>
        <Route path='/result' element={<List/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
