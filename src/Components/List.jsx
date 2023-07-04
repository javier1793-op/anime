import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Head from "./Head";
import Item from "./Item";

import Swal from "sweetalert2";
import axios from "axios";

const List = () => {
  const [list, setlist] = useState([]);
  const storageValue = localStorage.getItem("tokenPag");

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
  }, [setlist])

  return (
    <>
      {storageValue == null && <Navigate to="/" />}
      <div className="container">
        <Head />
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
