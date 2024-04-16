import { useState } from "react";
import One from "./One.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { addCrossing, putSection } from "../../../redux/actions";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Crossings ({admin}) {

    const location = useLocation(); console.log(location.state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const crossings = useSelector(state => state.crossings); console.log({crossings});
    const canis = useSelector(state => state.canis); //console.log({canis});
    const males = canis.filter((c,i)=>c.sex==='Macho') || []; //console.log({males})
    const females = canis.filter((c,i)=>c.sex==='Hembra') || []; //console.log({females})
    const male = males.length ? males[0].species : '';
    const female = females.length ? females[0].species : '';
    const [input, setInput] = useState({male, female, year: new Date().getFullYear(), price: '', currency: 'AR$'});
    const change = e => setInput({...input, [e.target.name]:e.target.value});
    const [filter, setFilter] = useState({
        boolean: !!location.state?.species, 
        selected: location.state?.species || '', 
        array: location.state?.species? 
            crossings.filter(c=>c.male === location.state?.species || 
                c.female === location.state?.species
            ) : [],
        });
    let actualSection = useSelector(state=> state.actualSection);
    useEffect(()=>{
        actualSection !== 'Cruces' && dispatch(putSection('Cruces'));
        return ()=>dispatch(putSection(''));
        // eslint-disable-next-line 
    },[])
    return (
        <div className="">
            <div className="">
            <b>
                Filtrar por...
            </b>
            <div className="flex border">
                <select 
                    className="w30 h"
                    value={filter.selected} 
                    onChange={(e)=>setFilter({...filter, selected: e.target.value})}>
                    <option></option>
                    {canis.map((c,i)=><option key={i}>{c.species}</option>)}
                </select>
                <div className="block w30">
                    <button className="w100 green" onClick={()=>setFilter({
                        ...filter, 
                        array: crossings.filter(
                            (c,i)=>c.male === filter.selected || c.female === filter.selected), 
                        boolean: true
                    })}>
                        Aplicar filtro
                    </button>
                    <button className="w100 red" onClick={()=>setFilter({...filter, boolean: false})}>
                        Eliminar filtro
                    </button>
                </div>
            </div>
            {
                !canis.length && 
                <div className="text-center paddingy8 shadow-b">
                    {/* <div className="shadow-l w100">{''}</div> */}
                    {/* <div className="shadow-b w100"> */}
                        {'¡Todavía no hay ejemplares! '}
                        <u onClick={()=>navigate('/ejemplares')} className="orange cursor-pointer">
                            Agregar ejemplares
                        </u>.
                    {/* </div> */}
                    {/* <div className="shadow-r w100">{''}</div> */}
                </div>
            }
            {
                filter.boolean && 
                <div>
                    <br/>
                    <b>Resultados del filtro</b>
                    {filter.array.length? 
                    filter.array.map((c,i)=><One id={i} male={c.male} female={c.female} key={i}/>)
                        :
                        // !canis.length ?
                    // <div className="center-text">
                    //     ¡Todavía no hay ejemplares! <u className="orange cursor-pointer">Agregar ejemplares</u>.
                    // </div>:
                    <div>Todavía no hay cruces programados con este ejemplar.</div>
                    }
                </div>
            }
            </div>
            <br/>
            <div className="">
            {
            admin && 
            <div>
                <b>
                    Programar nuevo cruce
                </b>
                <div className="block border">
                    <div className="flex">
                        <div className="flex w30">
                            <div className="block border w100">
                                <div className="flex center-text"><div className="red">*</div><div className="w100">Macho</div></div>
                                <select className="w100" name="male" onChange={change} value={input.male || males[0]}>
                                    {
                                        // canis.filter(c=>c.sex==='Macho').map(
                                        males.map(
                                            (c,i)=><option key={i}>{c?.species}</option>
                                        )
                                    }
                                </select>
                            </div>
                            <div className="block border w100">
                                <div className="flex center-text"><div className="red">*</div><div className="w100">Hembra</div></div>
                                <select className="w100" name="female" onChange={change} value={input.female || females[0]}>
                                    {
                                        // canis.filter(c=>c.sex==='Hembra').map(
                                        females.map(
                                            (c,i)=><option key={i}>{c?.species}</option>
                                        )
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="flex w30">
                            <div className="w100 border">
                                <div className="center-text borderradius">Temporada</div>
                                <input type='number' onChange={change} name="year" value={input.year} 
                                    min={new Date().getFullYear()} max={new Date().getFullYear()+5}
                                />
                            </div>
                            <div className="w100 border">
                                <div className="center-text borderradius">Precio</div>
                                <div className="flex">
                                    <select onChange={change} name="currency" value={input.currency}>
                                        <option>AR$</option>
                                        <option>USD</option>
                                        <option>EUR</option>
                                    </select>
                                    <input type='number' onChange={change} name="price" value={input.price}/>                            
                                </div>
                            </div>
                        </div>
                        <button 
                            className="w30" 
                            onClick={()=>dispatch(addCrossing({...input}))}
                            disabled={!input.male || !input.female}
                            title={!input.male || !input.female ? 'Aclarar ejemplares Macho y Hembra' : ''}
                            >
                                Agregar cruce
                        </button>
                    </div>
                    <div className="red" style={{fontSize: 'smaller', textAlign: 'right'}}>* obligatorios</div>
                </div>
            </div>
            }
            <br/>
            <b>Cruces programados</b>
            {
                !!crossings.length ? <div>
                    {crossings.map((c,i)=><One id={i} key={i}
                        currency={c.currency} 
                        price={c.price}
                        year={c.year}
                        male={c.male} 
                        female={c.female} 
                    />)}
                </div> :
                <div className="">Todavía no hay cruces programados</div>
            }
            </div>
        </div>
    )
}