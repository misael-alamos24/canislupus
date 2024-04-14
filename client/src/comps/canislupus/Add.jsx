import Img from "../crossings/Img";

let sex = ['', 'Macho', 'Hembra']

export default function Add () {
    return (
        <div className="flex addcanis">
            <div className="imgaddcanis">
                <Img/>
            </div>
            <div className="block dataaddcanis2">
                <div className="eachdataaddcanis2 flex between"><div>Lobo</div><input placeholder='Variedad (Shadow, Tanka, ...)' className="input"/></div>
                <div className="eachdataaddcanis2 flex between"><div>Nacimiento</div><input type="date"/></div>
                <div className="eachdataaddcanis2 flex between"><div>Sexo</div>
                    <select className="select" color="white">{sex.map((s,i)=><option color="white" key={i}>{s}</option>)}</select>
                </div>
                <div className="eachdataaddcanis2 flex"><div>Descripción</div><textarea rows={'2'} cols={'50'} placeholder='Cualquier característica' className="input"/></div>
                <button className="button" color="lime">Agregar</button>
            </div>
        </div>
    )
}