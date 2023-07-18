import {Routes, Route} from 'react-router-dom'

import "./App.css";

import Login from './Components/Login';
import Home from './Components/Home';
import Details from './Components/Details';
import List from './Components/List';
import Favorite from './Components/Favorite';


function App() {

  

  return (
    <>
      <Routes>
        <Route path='/anime' element={<Login/>}/>
        <Route path='/anime/home' element={<Home/>}/>
        <Route path='/anime/detail' element={<Details/>}/>
        <Route path='/anime/result' element={<List/>}/>
        <Route path='/anime/favorite' element={<Favorite/>}/>
      </Routes>
      
      
    </>
  );
}

export default App;
