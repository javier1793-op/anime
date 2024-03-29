import { Link, Navigate, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import {TbArrowBigLeftLinesFilled} from "react-icons/tb";

import Head from "./Head";
import Item from "./Item";

import Swal from "sweetalert2";
import axios from "axios";

const List = () => {
  const [list, setlist] = useState([]);
  const storageValue = localStorage.getItem("tokenPag");
  const location = useLocation()

  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  var name = urlParams.get("search");
  

  const endPoint=`https://api.jikan.moe/v4/anime?q=${name}`
 
  useEffect(() => {
   axios.get(endPoint)
  .then(function (response) {

    const data= response.data.data

    setlist(data)
    
    
  })
  .catch(function (error) {
    Swal.fire(`A ocurrido un error ${error}`)

  })
  },[location])

  return (
    <>
      {storageValue == null && <Navigate to="/" />}
      <div className="container">
        <Head />
       
            <Link to="/anime/home" className="link">
              <button className="btn back">
                <TbArrowBigLeftLinesFilled /> back to list
              </button>
            </Link>
          
        <div className="titleRela">
          <span>List</span>
        </div>
        <div className="items">
          {list.map((anime) => {
            return (
              <Item
                key={anime.mal_id}
                mal_id={anime.mal_id}
                title={anime.title}
                img={anime.images.jpg.image_url}
                genero={anime.genres}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default List;
