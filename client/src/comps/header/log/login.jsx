import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../../redux/actions";

export default function Login () {
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'login-user' && dispatch(putSection('login-user'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
            Esta es la sección para ingresar como usuario.
        </div>
    )
}