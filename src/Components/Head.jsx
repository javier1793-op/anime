import { useState } from "react";
import "../css/head.scss";
import { BiSearchAlt } from "react-icons/bi";
import { TbArrowBigRightLineFilled } from "react-icons/tb";
import { Link, Navigate } from "react-router-dom";

const Head = () => {

  const [name, setName] = useState('')

  const handleSubmit=(e)=>{
    e.preventDefault();
    const Anime = e.target.nameAnime.value;
    setName(Anime)
  }

    console.log(name)
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
