import "../css/details.scss";
import {
  TbArrowBigLeftLinesFilled,
  TbTrophyFilled,
  TbHeart,
  TbThumbUpFilled,
} from "react-icons/tb";
import { FcLike } from "react-icons/fc";
import axios from "axios";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

import Head from "./Head";
import { Link } from "react-router-dom";
import Synopsis from "./Synopsis";
import Trailer from "./Trailer";
import Episodes from "./Episodes";

const Details = () => {
  const [oneAnime, setOneAnime] = useState([]);
  const [like, setLike] = useState(false);
  const [menu, setMenu] = useState("synopsis");

  const valores = window.location.search;
  const urlParams = new URLSearchParams(valores);
  var idAnime = urlParams.get("id");

  const endPoint = `https://api.jikan.moe/v4/anime/${idAnime}/full`;

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

  const handleLike = () => {
    setLike(!like);
  };

  return (
    <>
      <div className="container">
        <Head />
        <div className="contentDetail">
          <div className="btnSection">
            <Link to="/anime/home" className="link">
              <button className="btn back">
                <TbArrowBigLeftLinesFilled /> back to list
              </button>
            </Link>
          </div>

          <div className="detailSection">
            <div className="imgDetail borderSection">
              <div className="backColor">
                <img
                  src={oneAnime?.images?.jpg?.large_image_url}
                  alt="portada"
                />
                <h2>{oneAnime?.title}</h2>
                <div className="favoriteD">
                  <span className="spanFavorite">
                    <TbThumbUpFilled />
                    {oneAnime?.favorites}
                  </span>
                  <span className="spanFavorite">
                    {" "}
                    <TbTrophyFilled />
                    {oneAnime?.rank}
                  </span>
                </div>
                <div className="favoriteD">
                  <span className="spanFavorite">
                    {like && <FcLike className="heart" />}
                    {!like && <TbHeart className="heart" />}
                  </span>
                  <button className="button btnlike" onClick={handleLike}>
                    <span className="button_lg">
                      <span className="button_sl"></span>
                      <span className="button_text"> LIKE</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="infoDetail borderSection">
              <div className="backColor">
                <div className="menuInfo">
                  <button
                    className={`btn back ${
                      menu === "synopsis" ? "active" : ""
                    }`}
                    onClick={() => {
                      setMenu("synopsis");
                    }}
                  >
                    synopsis
                  </button>
                  <button
                    className={`btn back ${menu === "trailer" ? "active" : ""}`}
                    onClick={() => {
                      setMenu("trailer");
                    }}
                  >
                    trailer
                  </button>
                  <button
                    className={`btn back ${
                      menu === "episodes" ? "active" : ""
                    }`}
                    onClick={() => {
                      setMenu("episodes");
                    }}
                  >
                    episodes
                  </button>
                </div>
                <div className="contentInfo">
                  {menu === "synopsis" && (
                    <Synopsis
                      data={oneAnime?.synopsis}
                      score={oneAnime?.score}
                      episodes={oneAnime?.episodes}
                      status={oneAnime?.status}
                      year={oneAnime?.year}
                      genres={oneAnime?.genres}
                    />
                  )}
                  {menu === "trailer" && (
                    <Trailer url={oneAnime?.trailer.url} />
                  )}
                  {menu === "episodes" && <Episodes id={oneAnime?.mal_id} />}
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default Details;
