import '../css/login.scss'

const Login = () => {


    
    return (
    <section className='containerLogin'>
    <div className="form-box">
        <div className="form-value">
            <form >
                <h2 className='titleLogin'>Koppo Anime</h2>
                <div className="inputbox">
                    <ion-icon name="mail-outline"></ion-icon>
                    <input 
                    type="email"
                
                    required/>
                    <label >Email</label>
                </div>
                <div className="inputbox">
                    <ion-icon name="lock-closed-outline"></ion-icon>
                    <input type="password" 
            
                    required/>
                    <label >Contraseña</label>
                </div>
                
                <button className='btnLogin' >Ingresar</button>
    
            </form>
        </div>
    </div>
</section>
  )
}

export default Login