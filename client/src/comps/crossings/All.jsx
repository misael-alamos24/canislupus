import { useState } from "react";
import Instance from "./Instance";
// import Img from "./Img";

export default function All () {

    // const [instance, setInstance] = useState(false);
    // const [upd, setUpd] = useState(false);
    // const [del, setDel] = useState(false);
    const [act, setAct] = useState({
        add: false,
        upd: false,
        del: false,
    });
    const [array, setArray] = useState([])
    const [info, setInfo] = useState({
        male: '',
        female: '',
        birth: '',
        pairing: ''
    })
    const change = (e) => setInfo({...info, [e.target.name]: e.target.value})
    const ok = () => {
        setArray([...array, info]); 
        setInfo({
            male: '',
            female: '',
            birth: '',
            pairing: ''
        })
    }
    console.log({array})

    return (
        <div style={{fontFamily: 'cursive'}}>
            <button 
                className={!act.add ? 'colorgreen button' : 'colorred button'} 
                onClick={()=> setAct({...act, add: !act.add})}>
                {!act.add ? 
                '➕ Agregar nuevo cruce de ejemplares' : 
                '➕ Cancelar nuevo cruce de ejemplares'}
            </button>
            <button 
                className={!act.upd ? 'colorgreen button' : 'colorred button'} 
                onClick={()=> setAct({...act, upd: !act.upd})}>
                {!act.upd ? 
                '✏️ Editar un cruce de ejemplares' : 
                '✏️ Cancelar edición'}
            </button>
            <button 
                className={!act.del ? 'colorgreen button' : 'colorred button'} 
                onClick={()=> setAct({...act, del: !act.del})}>
                {!act.del ? 
                '🗑️ Eliminar un cruce de ejemplares' : 
                '🗑️ Cancelar eliminación'}
            </button>
            {act.add && <Instance 
                change={change}
                ok={ok} 
                male={info.male} 
                female={info.female} 
                birth={info.birth} 
                pairing={info.pairing}
                
            />}
            {!!array.length && array.map((a,i) => <Instance 
                key={i}
                user={true}
                male={a.male} 
                female={a.female} 
                birth={a.birth} 
                pairing={a.pairing}
                change={change}
                
            />)}
        </div>
    )
}