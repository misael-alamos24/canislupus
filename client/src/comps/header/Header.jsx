import { useNavigate } from 'react-router-dom';

export default function Header () {

  let navigate = useNavigate();

    return (
        <div className='header resp-header'>
          <div className='center-text cinzel-logo min30 resp-header-item'>
            Canis Lupus
            {/* <b className='padding4'>☑️ Seleccionados (0) $0</b> */}
          </div>
          {/* <img width={'25%'} alt='' src={logo}/> */}
          <div className='resp-header-item min30'>
            <div className='flex between'>
                <div className='padding4 cursorpointer' onClick={()=>navigate('/logup-user')}>Crear cuenta</div>
                <div className='padding4'>|</div>
                <div className='padding4 cursorpointer' onClick={()=>navigate('/login-user')}>Iniciar sesión</div>
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