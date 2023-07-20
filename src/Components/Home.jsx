import Swal from 'sweetalert2'
import axios from "axios";

import Head from "./Head"
import Item from "./Item"
import Slider from "./Slider"
import { useEffect, useState } from 'react';
import { Navigate } from "react-router-dom";



const Home = () => {

  const [list, setlist] = useState([])
  const storageValue = localStorage.getItem("tokenPag")

  const endPoint='https://api.jikan.moe/v4/top/anime'
 

  useEffect(() => {
   axios.get(endPoint)
  .then(function (response) {

    const data= response.data.data

    setlist(data)
    
  })
  .catch(function (error) {
    Swal.fire(`A ocurrido un error ${error}`)

  })
  }, [setlist])
  
 
 

  return (
    <>
    {storageValue == null && <Navigate to="/"/>}
    <div className="container">
        <Head />
        <Slider />
        <div className="titleRela">
          <span>KOPPO your free online anime source in HD</span>
          <hr className='subtitle'/>
        </div>
         <div className="items">
          
             {list.map((anime)=>{
            return(
              <Item
              key={anime.mal_id}
              mal_id={anime.mal_id}
              title={anime.title}
              img={anime.images.jpg.image_url}
              genero={anime.genres}
              />
            )
          })  
          }

         
       
          
        </div>
      </div>
    </>
    
  )
}

export default Home