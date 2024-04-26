import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { putSection } from "../../redux/actions";
import { methods } from "./object";

export default function Home (){
    
    const dispatch = useDispatch();
    let actualSection = useSelector(state => state.actualSection);
    useEffect(()=>{
        actualSection !== 'Inicio' && dispatch(putSection('Inicio'));
        return ()=> dispatch(putSection(''));
        // eslint-disable-next-line 
    },[]);

    return (
        <div>
            Esta es la sección de Inicio.
            <ul>
                <li>
                    Funcionalidad: esta sección será el lugar donde aterriza el usuario una vez se registra. Por lo cual podría contener:
                    <ul>
                        <li>
                            Artículos con título, texto, video e imágenes sobre algunos lobos; 
                        </li>
                        <li>
                            Opiniones de otros compradores cuando las haya; 
                        </li>
                        <li>
                            Explicaciones breves de cómo funciona el sitio. 
                        </li>
                    </ul>
                    Todo esto podrá ser fácilmente editado por el administrador. 
                </li>
            </ul>
            <br />
            <div className="text-center">
                Planes de pago
            </div>
            <br />
            <div className="responsive-home">
                {methods.map((m,i) => <div className="text-center border marginy8 resp-home30" style={{color: m.color}} key={i}>
                    {m.nombre.toUpperCase()}
                        <br />
                        <br />
                        Valor entrega del sitio:
                        <br />
                        1 cuota de
                        <br />
                        AR$ {m.contado * 1000}  
                        <br />
                        ({m.descuento}% descuento)
                        <br />
                        <br />
                        o en
                        <br />
                        3 cuotas de AR$ {m.cuotas3 * 1000} 
                        <br />
                        (AR$ {m.total3 * 1000}  total)
                        <br />
                        <br />
                        o en
                        <br />
                        6 cuotas de AR$ {m.cuotas6 * 1000} 
                        <br />
                        (AR$ {m.total6 * 1000}  total)
                        <br />
                        <br />
                        Comisiones
                        <br />
                        {m.text}
                        <br />
                        {m.text2}
                        <br />
                        <br />
                        *puede variar
                </div>)}
            </div>
        </div>
    )
}