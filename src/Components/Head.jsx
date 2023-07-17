import { useState } from "react";
import "../css/head.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbArrowBigRightLineFilled,TbHeart } from "react-icons/tb";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Head = () => {

  const [valor, setValor] = useState('')
  const history = useNavigate()

  const handleSubmit=(e)=>{
    e.preventDefault();
    const Anime = e.currentTarget.nameAnime.value.trim();
    setValor(Anime)
    
    console.log(valor)
    if( Anime.length === 0){
      return Swal.fire("Debe ingresar un valor");
    }

    history(`/anime/result?search=${Anime}`)
  }

   
  return (
    <>
    {name != '' && <Navigate to={`/anime/home?search=${name}`}/>}
     <div className="containerHead">
      <Link to="/anime/home" className="link">
        <div className="logo">
          <span>k</span>oppo
        </div>
      </Link>

      <div className="instruction">
        search for information about your favorite anime
        <TbArrowBigRightLineFilled />
      </div>
      <Link to="/anime/favorite" className="link">
      <div className="favorite">
        Favorites
        <TbHeart/>
      </div>
      </Link>
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
