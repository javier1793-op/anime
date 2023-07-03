import axios from "axios";
import Swal from 'sweetalert2'
import { useEffect, useState } from 'react';

import "../css/slider.scss";

import Genero from "./Genero";

const Slider = () => {

  const [top, setTop] = useState([])
  const busqueda='kimetsu no yaiba'

  const endPoint=`https://api.jikan.moe/v4/anime?q=${busqueda}`
 

  useEffect(() => {
   axios.get(endPoint)
  .then(function (response) {

    const data= response.data.data

    setTop(data.slice(-1).pop())
    console.log(top)
    
  })
  .catch(function (error) {
    Swal.fire(`A ocurrido un error ${error}`)

  })
  }, [setTop])

  return (
    <div className="containerSlider">
      <div className="contentSlider">
        <div className="title">
          {top.title_synonyms}
        </div>
        <div className="genero">
          {top.genres.map((oneGen, idx)=>{
            return(
              <Genero 
              genero={oneGen.name}
              key={idx} />
            )
          })}
          
        </div>
        <div className="description">
          {top.synopsis}
        </div>
        <div className="btnSee">
          <button className="button">
            <span className="button_lg">
              <span className="button_sl"></span>
              <span className="button_text">see more</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;
