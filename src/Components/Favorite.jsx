import { Link } from "react-router-dom";
import Head from "./Head";

import "../css/Favorite.scss";

import { TbArrowBigLeftLinesFilled } from "react-icons/tb";

import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import Item from "./Item";

const Favorite = () => {
  const [List, setList] = useState([])
  
  
  useEffect(() => {
    const favAnime = localStorage.getItem("favs");

    let tempAnime;
    if (favAnime === null) {
       Swal.fire(`No posees lista de animes favoritos`);
    } else {
      tempAnime = JSON.parse(favAnime);
      setList(tempAnime)
    
    }
  }, []);

  return (
    <>
      <div className="containerFavite">
        <Head />
        <div className="contentDetail">
          <div className="btnSection">
            <Link to="/anime/home" className="link">
              <button className="btn back">
                <TbArrowBigLeftLinesFilled /> back to list
              </button>
            </Link>
          </div>
          <div className="titleRela">
            <span>Favorites</span>
          </div>
          <div className="itemsFav">
            {List.map((anime) => {
              return (
                <Item
                  key={anime.id}
                  mal_id={anime.id}
                  title={anime.title}
                  img={anime.img}
                  genero={anime.genres}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorite;
