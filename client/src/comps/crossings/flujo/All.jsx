import { useState } from "react";
import One from "./One.jsx";
import { useDispatch, useSelector } from 'react-redux';
import { addCrossing } from "../../../redux/actions";
import { useLocation } from "react-router-dom";

export default function Crossings ({admin}) {

    const location = useLocation(); console.log(location.state);
    const dispatch = useDispatch();
    const crossings = useSelector(state => state.crossings); //console.log({crossings});
    const canis = useSelector(state => state.canis); //console.log({canis});
    const males = canis.filter((c,i)=>c.sex==='Macho') || []; //console.log({males})
    const females = canis.filter((c,i)=>c.sex==='Hembra') || []; //console.log({females})
    const male = males.length ? males[0].species : '';
    const female = females.length ? females[0].species : '';
    const [input, setInput] = useState({male, female});
    const change = e => setInput({...input, [e.target.name]:e.target.value});
    const [filter, setFilter] = useState({
        boolean: !!location.state?.species, 
        selected: location.state?.species || '', 
        array: location.state?.species? 
            crossings.filter(c=>c.male === location.state?.species || 
                c.female === location.state?.species
            ) : [],
        });
    console.log({filter})
    return (
        <div className="">
            <div className="">
            <b>
                Filtrar por subespecie
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
                <div className="center-text">
                    ¡Todavía no hay ejemplares! <u className="orange cursor-pointer">Agregar ejemplares</u>.
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
                <div className="flex border">
                    <div className="flex w30">
                        <div className="block border w100">
                            <div>Macho</div>
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
                            <div>Hembra</div>
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
                    <button className="w30" onClick={()=>dispatch(addCrossing({...input}))}>
                            Agregar cruce
                    </button>
                </div>
            </div>
            }
            <br/>
            <b>Cruces programados</b>
            {
                !!crossings.length ? <div>
                    {crossings.map((c,i)=><One id={i} male={c.male} female={c.female} key={i}/>)}
                </div> :
                <div className="">Todavía no hay cruces programados</div>
            }
            </div>
        </div>
    )
}