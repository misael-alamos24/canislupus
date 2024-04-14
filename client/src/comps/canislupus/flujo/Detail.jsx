import { useLocation, useNavigate } from "react-router-dom";

export default function Detail () {

    const navigate = useNavigate();
    const location = useLocation(); //console.log(location.state)
    const {i, sex, species} = location.state;
    const state = {state: {i, sex, species}}; 

    return (
        <div>
            <button className="w30" onClick={()=>navigate(-1)}>Volver</button>
            <br />
            <b>Detalle</b>
            <div>Especie: {species}</div>
            <div>Sex: {sex}</div>
            <div>ID: {i}</div>
            <button className="w30" onClick={()=>navigate('/cruces', state)}>Ver cruces programados de este ejemplar</button>
        </div>
    )
}