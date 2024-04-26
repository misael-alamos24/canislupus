import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../../redux/actions";

export default function Logup () {
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'logup-user' && dispatch(putSection('logup-user'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
            Esta es la sección para registrarse como usuario.
        </div>
    )
}