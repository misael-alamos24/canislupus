import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../redux/actions";

export default function Help () {
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'Ayuda' && dispatch(putSection('Ayuda'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
            Esta es la sección de Ayuda.
            <ul>
                <li>
                    Funcionalidad: ofrece una sección de preguntas frecuentes y una guía para el usuario que puede ser editada por el administrador 
                </li>
            </ul>
        </div>
    )
}