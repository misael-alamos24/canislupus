import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../redux/actions";

export default function Contact () {
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'Contacto' && dispatch(putSection('Contacto'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
            Esta es la sección de Contacto.
            <ul>
                <li>
                    Funcionalidad: que el usuario pueda entablar contacto mediante distintos medios para resolver dudas o concretar procesos. 
                </li>
                <li>
                    Elementos: 
                </li>
                <ul>
                        <li>
                            Datos de contacto: son expuestos solo aquellos que el administrador considere necesarios (como ser redes sociales, WhatsApp, un email, localidad). Serán aquellos donde el usuario pueda encontrar información útil o pueda entablar contacto para resolver sus dudas y confiar en el vendedor.  
                        </li>
                        <li>
                            Formulario para entablar contacto: cualquier usuario puede ingresar sus datos y un mensaje para posteriormente el administrador comunicarse con este. 
                        </li>
                </ul>
            </ul>
        </div>
    )
}