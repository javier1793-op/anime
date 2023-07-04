import not from '../img/nop.png'
import '../css/notFound.scss'

const NotFound = () => {
  return (
    <>
        <div className="containerNotFound">
            <img src={not} alt="notfound" />
            <h2>not available, sorry</h2>
        </div>
    </>
  )
}

export default NotFound