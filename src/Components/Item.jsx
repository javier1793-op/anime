import '../css/item.scss'
import Portada from '../assets/prueba2.jpg'
import Genero from './Genero'

const Item = ({title, img,genero}) => {

  var limitGen= genero.slice(0, 2)

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
        <button className="button">
          <span className="button_lg">
            <span className="button_sl"></span>
            <span className="button_text">see more</span>
          </span>
        </button>
    </div>
  )
}

export default Item