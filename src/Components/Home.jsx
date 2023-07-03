import Swal from 'sweetalert2'
import axios from "axios";

import Head from "./Head"
import Item from "./Item"
import Slider from "./Slider"
import { useEffect, useState } from 'react';




const Home = () => {

  const [list, setlist] = useState([])

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
  
 console.log(list)
 

  return (
    <div className="container">
        <Head />
        <Slider />
        <div className="titleRela">
          <span>List</span>
        </div>
        <div className="items">

          {list.map((anime, idx)=>{
            return(
              <Item
              key={idx}
              title={anime.title}
              img={anime.images.jpg.image_url}
              genero={anime.genres}
              />,
            )
          })  
          }
          
          
        </div>
      </div>
  )
}

export default Home