import { useSelector } from "react-redux";
import { //useLocation, 
    useNavigate } from "react-router-dom";
import Img from "../Img";

export default function Crossing ({id, male, female}) { 
    // console.log({id, male, female})

    const navigate = useNavigate();
    const canis = useSelector(state => state.canis);
    const details = {
        male: canis.find((m,i)=>m.species===male), 
        female: canis.find((m,i)=>m.species===female)
    }
    // const location = useLocation();
    // const {i, sex, species} = location.state;
    // const state = {state :{i, sex, species}};

    return (
        <div className="border">
            <div className="w90 border marginy4"><div>ID: {id}</div></div>
            <div className="resp-one"> 
                <div className="w100 center-text border marginy8">{'Macho: '}
                    <u className="u" onClick={()=>navigate('/ejemplares/detail', {state:details.male})}>
                        {male}
                    </u>
                    <Img ejemplar={male}/>
                </div>
                <div className="w100 center-text column border marginy8">
                    <b>+</b>
                </div>
                <div className="w100 center-text border marginy8">{'Hembra: '}
                    <u className="u" onClick={()=>navigate('/ejemplares/detail', {state:details.female})}>
                        {female}
                    </u>
                    <Img ejemplar={female}/>
                </div>
                {/* <button className="w30" onClick={
                    ()=>navigate('/ejemplares/detail', {state: {i, sex, species}})
                }>Ver detalles</button> */}
            </div>
        </div>
    )
}