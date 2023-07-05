import { Link } from 'react-router-dom'
import '../css/item.scss'
import Genero from './Genero'

const Item = ({title, img,genero,mal_id}) => {

  var limitGen= genero.slice(0, 2);



  return (
    <div className="containerItem">
        <img src={img} alt="image" />
        <span className='titleCard'>{title}</span>
        <span className='itenGen'>

          {limitGen.map((oneGen)=>{
            return(
              <Genero 
              genero={oneGen.name}
              key={oneGen.mal_id}
              />
            )
          })}
        </span>
        <Link to={`/anime/detail?id=${mal_id}`} className='link'>
          <button className="button">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">see more</span>
          </span>
        </button>
        </Link>
        
    </div>
  )
}

export default Item