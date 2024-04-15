import { useNavigate } from 'react-router-dom';

export default function Header () {

  let navigate = useNavigate();

    return (
        <div className='header resp-header'>
          <div className='flex' >
            <input 
              style={{width: '300px'}}
              placeholder={'Buscador'} 
              title='Buscá por raza o por cualquier otra característica' 
              className='input'
            />
            <div title='Ver resultados' className={'search'}>🔎</div>
          </div>
          {/* <img width={'25%'} alt='' src={logo}/> */}
          <div style={{width: '25%'}}>
            <div className='flex between'>
                <div className='padding4 cursorpointer' onClick={()=>navigate('/logup-user')}>Crear cuenta</div>
                <div className='padding4'>|</div>
                <div className='padding4 cursorpointer' onClick={()=>navigate('/login-user')}>Iniciar sesión</div>
            </div>
          </div>
          <div className='center-text' style={{width: '25%', fontFamily:'serif'}}>
            Canis Lupus
            {/* <b className='padding4'>☑️ Seleccionados (0) $0</b> */}
          </div>
        </div>
    )
}