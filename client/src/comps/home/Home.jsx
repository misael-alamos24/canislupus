import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../redux/actions";

export default function Home (){
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'Inicio' && dispatch(putSection('Inicio'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>Home</div>
    )
}