import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const wolfpng = require('./urbanbrush-20220302195036825030.jpg')

export default function Header () {

  let navigate = useNavigate();
  let actualSection = useSelector(state=> state.actualSection);

    return (
        <div className='header resp-header'>
          <div className='center-text typical-color cinzel-logo min30 resp-header-item flex between shadow-l'>
            <img src={wolfpng} alt='' className='h' style={{height:'36px'}}/> 
            <div className=''>Canis Lupus</div>
            <div>{''}</div>
            {/* <b className='padding4'>☑️ Seleccionados (0) $0</b> */}
          </div>
          {/* <img width={'25%'} alt='' src={logo}/> */}
          <div className='resp-header-item min30'>
            <div className='flex between'>
                <div className={actualSection==='logup-user'?"green cursorpointer padding4": 'cursorpointer padding4'} onClick={()=>navigate('/logup-user')}>Crear cuenta</div>
                <div className='padding4'>|</div>
                <div className={actualSection==='login-user'?"green cursorpointer padding4": 'cursorpointer padding4'} onClick={()=>navigate('/login-user')}>Iniciar sesión</div>
            </div>
          </div>
          <div className='flex center resp-header-item min30'>
            <input 
              placeholder={'Buscador'} 
              title='Buscá por raza o por cualquier otra característica' 
              className='input w100'
            />
            <div title='Ver resultados' className={'search'}>🔎</div>
          </div>
        </div>
    )
}