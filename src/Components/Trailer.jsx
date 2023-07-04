import '../css/trailer.scss'

import ReactPlayer from 'react-player'

const Trailer = ({url}) => {
  return (
    <>
        <div className="containerTrailer">
        <ReactPlayer
          url={url}
          className='react-player '
          width='100%'
          height='100%'
        />
        </div>
    </>
  )
}

export default Trailer