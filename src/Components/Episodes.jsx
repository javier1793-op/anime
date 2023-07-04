import "../css/episodes.scss";

import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";

const Episodes = ({ id }) => {

    const [oneAnime, setOneAnime] = useState([]);
    console.log(id)

    const endPoint = `https://api.jikan.moe/v4/anime/${id}/episodes`;

    useEffect(() => {
      axios
        .get(endPoint)
        .then(function (response) {
          const data = response.data.data;
  
          setOneAnime(data);
        })
        .catch(function (error) {
          Swal.fire(`A ocurrido un error ${error}`);
        });
    }, [setOneAnime]);

    console.log(oneAnime)

  return (
    <>
      <div className="containerEpisodes">
      {oneAnime.length == 0 && <NotFound/>}
        {oneAnime?.map((anime)=>{
            return(
        <button 
        className="button btnEpisodes"
        key={anime.mal_id}
        >
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text"> 
            {anime.mal_id} - {anime.title}
            </span>
          </span>
        </button>  
            )
        })}
          
      </div>
    </>
  );
};

export default Episodes;
