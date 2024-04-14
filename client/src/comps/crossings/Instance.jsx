// import { useState } from "react";
import { useState } from "react";
import Img from "./Img";
import { names } from "./names";

export default function Instance ({user, admin, male, female, birth, pairing, ok, change, act}) {

    const [upd, setUpd] = useState(false);
    // const [info, setInfo] = useState({
    //     male: '',
    //     female: '',
    //     birth: '',
    //     pairing: ''
    // })
    // const change = (e) => setInfo({...info, [e.target.name]: e.target.value})

    return (
        <div className='flex instance' id={user ? 'borderuser' : 'borderadmin'}>
            <div className="block">
                <div>Macho</div>
                <div>
                {!user &&
                    <select 
                        value={male}
                        name="male" 
                        onChange={(e)=>change(e)} 
                        className="select colorwhite">
                        {names.map((n,i) => <option key={i}>{n}</option>)}
                    </select>}
                    {user && <div>{male}</div>}
                    <Img ejemplar={male}/>
                </div>
            </div>
            <div className="block">
                <div>Hembra</div>
                <div>
                {!user &&
                    <select 
                        value={female}
                        name="female" 
                        onChange={(e)=>change(e)} 
                        className="select colorwhite">
                        {names.reverse().map((n,i) => <option key={i}>{n}</option>)}
                    </select>}
                    {user && <div>{female}</div>}
                    <Img ejemplar={female}/>
                </div>
            </div>
            <div className="block">
                <div>Fecha estimada apareamiento</div>
                {!user && <input 
                value={pairing}
                type='date' 
                className="inputdate colorwhite"
                name="pairing" 
                onChange={(e)=>change(e)} />}
                {user && <div>{pairing}</div>}
            </div>
            <div className="block">
                <div>Fecha estimada concepción</div>
                {!user && <input 
                value={birth}
                type='date' 
                className="inputdate colorwhite"
                name="birth" 
                onChange={(e)=>change(e)} />}
                {user && <div>{birth}</div>}
            </div>
            <div className="block">
                <div>Confirmar cruce</div>
                {!user && <button 
                    onClick={ok} 
                    className="button colorgreen">
                    Ok
                </button>}
                {!user && <div>Sí</div>}
                {act && act.upd && <div 
                    onClick={()=>setUpd(!upd)} 
                    className={upd? "checked pointer flex between checkupd": 'pointer flex between checkupd'}>
                    <div>Editar</div> 
                    <input className="pointer" type="checkbox" checked={upd}
                    onClick={()=>setUpd(!upd)}/>
                </div>}
            </div>
        </div>
    )
}