import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addDog } from "../../../redux/actions";
import Img from "../../crossings/Img";
import { useNavigate } from "react-router-dom";

export default function New ({each, i, name, species, s, c, e, color, desc, date}) {

    const sex = ['Macho', 'Hembra', ''];
    const cont = ['HC (alto)', 'MC (medio)', 'LW (bajo)', ''];
    const esp = ['Perro-Lobo', 'Perro', 'Lobo', '']
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const canis = useSelector(state => state.canis); //console.log({canis})
    const [clean, setClean] = useState(false);
    const [input, setInput] = useState({name: '', species: '', sex: '', cont: '', esp: '', color: '', desc: '', date: '', });
    const change = e => setInput({...input, [e.target.name]:e.target.value});
    const marktext = 'Marque esta casilla para no mostrar este dato';

    const state = {state: {i, sex: s, species}}; 

    return (
        <div className="new border">
            <div className="block">
                <Img/>
                {!each && <div className="flex">
                    <button className="red w100">Eliminar esta imagen</button>
                    <button className="green w100">Agregar nueva imagen</button>
                </div>}
            </div>
            <div className="block responsive30-90">
                <div className="resp-new paddingy4">
                    {!each ? <div className="w100 center-text">Nombre</div>: name && <div className="w100 center-text">Nombre</div>}
                    {each ? <div className="w100">{name}</div> : <div className="w100 flex">
                            <input className="w100" style={{fontFamily: 'serif'}} placeholder="Nombre" name="name" value={input.name} 
                            onChange={change}/>
                            <input type="checkbox" title={marktext}/>
                        </div>}
                </div>    
                <div className="resp-new paddingy4">
                    {!each ? <div className="w100 center-text">Variedad</div>: species && <div className="w100 center-text">Variedad</div>}
                    {each ? <div className="w100">{species}</div> : <div className="w100 flex">
                            <input className="w100" style={{fontFamily: 'serif'}} placeholder="Variedad" name="species" value={input.species} 
                            onChange={change}/>
                            <input type="checkbox" title={marktext}/>
                        </div>}
                </div>    
                <div className="flex paddingy4">
                    {!each ? <div className="w100 center-text">Sexo</div> : s && <div className="w100 center-text">Sexo</div>  }
                    {each ? <div className="w100">{s}</div> : <div className="w100 flex">
                            <select className="w100" name="sex" onChange={change} value={input.sex}>
                            {
                                sex.map((s,i)=><option key={i}>{s}</option>)
                            }
                        </select>  
                        <input type="checkbox" title={marktext}/>
                    </div>}
                </div>
                <div className="flex paddingy4">
                    {!each ? <div className="w100 center-text">Nacimiento</div> : date && <div className="w100 center-text">Nacimiento</div>}
                    {each ? <div className="w100">{date}</div> : <div className="w100 flex">
                            <input type="date" className="w100"
                        name="date" value={input.date} onChange={change}/>
                        <input type="checkbox" title={marktext}/>
                    </div>}
                </div>
                <div className="resp-new paddingy4">
                    {!each ? <div className="w100 center-text">Descripción</div> : desc && <div className="w100 center-text">Descripción</div>}
                    {each ? <div className="w100">{desc}</div> : <div className="w100 flex">
                            <textarea  onChange={change} style={{fontFamily:'serif'}} className="w100"
                        placeholder="Cualquier característica" name="desc" value={input.desc}/>
                        <input type="checkbox" title={marktext}/>
                    </div>}
                </div>
            </div>
            
            <div className="block responsive30-90">
                <div className="flex paddingy4">
                    {!each ? <div className="w100 center-text">Especie</div>:  e && <div className="w100 center-text">Especie</div>}
                    {each ? <div className="w100">{e}</div> : 
                        <div className="w100 flex">
                            <select className="w100" name="esp" onChange={change} value={input.esp}>
                            {
                                esp.map((s,i)=><option key={i}>{s}</option>)
                            }
                        </select>  
                        <input type="checkbox" title={marktext}/>
                    </div>}
                </div>    
                <div className="flex paddingy4">
                    {!each ? <div className="w100 center-text">Contenido</div>:  c && <div className="w100 center-text">Contenido</div>}
                    {each ? <div className="w100">{c}</div> : 
                        <div className="w100 flex">
                            <select className="w100" name="cont" onChange={change} value={input.cont}>
                            {
                                cont.map((s,i)=><option key={i}>{s}</option>)
                            }
                        </select>  
                        <input type="checkbox" title={marktext}/>
                    </div>}
                </div>    
                <div className="flex paddingy4">
                    {!each ? <div className="w100 center-text">Color</div> : color && <div className="w100 center-text">Color</div>}
                    {each ? <div className="w100">{color}</div> : 
                        <div className="w100 flex">
                            <input className="w100" style={{fontFamily: 'serif'}} placeholder="Color" name="color" value={input.color} 
                            onChange={change}/> 
                        <input type="checkbox" title={marktext}/> 
                    </div>}
                </div>
                {each? 
                <div>
                    <button className="w100 h marginy4" onClick={
                        ()=>navigate('/ejemplares/detail', {state: {i,sex: s,species}})
                    }>Ver detalles</button>
                    <button className="w100 h marginy4" onClick={()=>navigate('/cruces', state)}>Ver cruces programados de este ejemplar</button>
                </div>
                :
                <div className="marginy4">
                    <button className="w100 h marginy4" onClick={()=>dispatch(addDog({...input, i: canis.length}))}>
                            Agregar ejemplar
                    </button>
                    <button className="w100 h marginy4" onClick={()=>setClean(true)}>
                            Borrar campos
                    </button>
                    {clean && <div className="w100">
                        <div className="center-text">Borrar campos de este formulario</div>
                        <div className='flex justify'>
                            <button className="red w100" onClick={()=>setClean(false)}>No</button>
                            <button className="green w100" onClick={()=>{setClean(false); 
                                setInput({name: '', species: '', sex: '', cont: '', esp: '', color: '', desc: '', date: ''})}
                            }>Sí</button>
                        </div>
                    </div>}
                </div>}
            </div>
        </div>
    )
}