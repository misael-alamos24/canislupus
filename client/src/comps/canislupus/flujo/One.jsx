import { useNavigate } from "react-router-dom"

export default function One ({i, sex, species}) {
    const navigate = useNavigate();
    return (
        <div className="border">
            <div className="flex"> 
                <div className="w10">Id: {i}</div>
                <div className="w30">Especie: {species}</div>
                <div className="w30">Sexo: {sex}</div>
                <button className="w30" onClick={
                    ()=>navigate('/ejemplares/detail', {state: {i,sex,species}})
                }>Ver detalles</button>
            </div>
        </div>
    )
}