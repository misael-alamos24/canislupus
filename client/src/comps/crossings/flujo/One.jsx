import { useSelector } from "react-redux";
import { //useLocation, 
    useNavigate } from "react-router-dom";
import Img from "../Img";

export default function Crossing ({id, male, female, currency, price, year}) { 
    console.log({id, male, female, currency, price, year})

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
            <div className="flex">
            <div className="w30 border marginy4"><div>ID: {id}</div></div>
            <div className="w30 border marginy4 center-text pointer">Reservar cachorro</div>
            </div>
            <div className="resp-one"> 
                <div className="w100 center-text border border-r0 border-tr0 border-br0">{'Macho: '}
                    <u className="u" onClick={()=>navigate('/ejemplares/detail', {state:details.male})}>
                        {male}
                    </u>
                    <Img ejemplar={male}/>
                </div>
                <div className="w100 column">
                    <div className="border h100 column border-t0 border-b0 borderradius0 center-text text-noback">
                        {year && 'Temporada: ' + year}
                    </div>
                    <b className="borderradius0 center-text border border-r0 border-l0">+</b>
                    <div className="border h100 column border-t0 border-b0 borderradius0 center-text text-noback">
                        {price && 'Precio: ' + currency && currency + ' ' + price}
                    </div>
                </div>
                <div className="w100 center-text border border-l0 border-tl0 border-bl0">{'Hembra: '}
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