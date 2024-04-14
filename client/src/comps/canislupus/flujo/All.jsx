// import One from "./One";
import { useSelector } from "react-redux";
import New from "./New";
// import Resize from "./Resize";

/* 
    /ejemplares/admin > agregar ejemplar > cada ejemplar > detalle > 
    programar un cruce > cruces > agregar cruce > cada cruce > detalle  
*/

export default function All ({admin}) {

    const canis = useSelector(state => state.canis); console.log({canis})

    return (
        <div>
            {/* <Resize/> */}
            <b>Agregar nuevo ejemplar</b>
            {
                admin && 
                <New/>
            }
            <br/>
            <b>
                Lista de ejemplares
            </b>
            {
                !!canis.length ?
                canis.map((c,i)=><New i={i} key={i} each={true} 
                    name={c.name}
                    species={c.species} 
                    s={c.sex} 
                    c={c.cont}
                    e={c.esp}
                    color={c.color}
                    desc={c.desc}
                    date={c.date}
                />)
                    
                : 
                <div>Todavía no hay ejemplares</div>
            }
        </div>
    )
}