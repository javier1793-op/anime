import { useState } from "react";
import "../css/head.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Head = () => {

  const history = useNavigate()

  const handleSubmit=(e)=>{
    const Anime = e.currentTarget.nameAnime.value.trim();
    e.preventDefault();
    
    if( Anime.length === 0){
      return Swal.fire("Debe ingresar un valor");
    }

    history(`/result?search=${Anime}`)
  }

   
  return (
    <>
    {name != '' && <Navigate to={`/home?search=${name}`}/>}
     <div className="containerHead">
      <Link to="/home" className="link">
        <div className="logo">
          <span>k</span>oppo
        </div>
      </Link>

      <div className="instruction">
        search for information about your favorite anime
        <TbArrowBigRightLineFilled />
      </div>
      <div className="search">
        <BiSearchAlt className="icon" />
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Eg: Naruto" name="nameAnime"  />
         
            <button className="btn">Search</button>
         
        </form>
      </div>
    </div>
    </>
   
  );
};

export default Head;
