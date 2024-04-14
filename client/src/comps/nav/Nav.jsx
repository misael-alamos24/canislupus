import { useNavigate } from "react-router-dom"

export default function Nav () {

  let navigate = useNavigate();

    return (
        <div className='nav'>
          <div className='container'>
            <div className='pointer' href="/">Inicio</div>
            <div className='pointer' onClick={()=> navigate("/ejemplares")}>Ejemplares</div>
            <div className='pointer' onClick={()=> navigate("/cruces")}>Cruces programados</div>
            <div className='pointer' href="/contacto">Contacto</div>
            <div className='pointer' href="/ayuda">Ayuda</div>
          </div>
        </div>
    )
};