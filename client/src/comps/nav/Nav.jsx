import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"

export default function Nav () {

  let navigate = useNavigate();
  let actualSection = useSelector(state=> state.actualSection);

    return (
        <div className='nav'>
          <div className='container'>
            <div className={actualSection==='Inicio'?"green pointer": 'pointer'} onClick={()=>navigate("/inicio")}>Inicio</div>
            <div className={actualSection==='Ejemplares'?"green pointer": 'pointer'} onClick={()=> navigate("/ejemplares")}>Ejemplares</div>
            <div className={actualSection==='Cruces'?"green pointer": 'pointer'} onClick={()=> navigate("/cruces")}>Cruces programados</div>
            <div className={actualSection==='Contacto'?"green pointer": 'pointer'} href="/contacto">Contacto</div>
            <div className={actualSection==='Ayuda'?"green pointer": 'pointer'} href="/ayuda">Ayuda</div>
          </div>
        </div>
    )
};