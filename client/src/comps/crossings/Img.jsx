export default function Img ({ejemplar, innerRigth}) {
    return (
            <div className="img">
                <div className="rectangle flex">
                    <div className="prev" title="Imagen anterior"><b>{'<'}</b></div>
                        <div className="column font-small">
                            *Imagen{ejemplar && ' ' + ejemplar}* <br />(Cuando se  cargue imagen, se va a mostrar acá)
                        </div>
                    <div className="next" title="Imagen siguiente"><b>{'>'}</b></div>
                </div>
                {/* <div className="innerRight">
                    {innerRigth}
                    data
                </div> */}
            </div>
    )
}