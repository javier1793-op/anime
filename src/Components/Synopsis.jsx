import '../css/synopsis.scss'
import Genero from './Genero'

const Synopsis = ({data,score,episodes,status,year,genres}) => {
  return (
   <>
   <div className="contentSynopsis">
    <h2>introduction</h2>
    <p>{data}</p>
    <hr />
    <div className="detallSynopsis">
        <div className="dataSynopsis">
           <span className="spanDataSynopsis">Score:  {score} </span> 
           <span className="spanDataSynopsis">Episodes:  {episodes} </span> 
           <span className="spanDataSynopsis">Estatus: {status}</span> 
           
        </div>
        <div className="dataSynopsis">
           <span className="spanDataSynopsis">Year: {year} </span> 
           <span className="spanDataSynopsis">Genre: 
           <div className="sectionGenSynopsis">
            {genres?.map((oneGen)=>{
            return(
              <Genero
              genero={oneGen.name}
              key={oneGen.mal_id}
              />
            )
          })}
           </div>
           
           </span> 
        </div>
    </div>
   </div>
    
   </>
  )
}

export default Synopsis