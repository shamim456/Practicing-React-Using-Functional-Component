const scaleName = {
    C: "Celcious",
    F: "Farenhite"
}
export default function Input ({temp, handelar, scale}) {
    return(
        <div>
            <h1>Input Tempareture In {scaleName[scale]}</h1>
            <input type="text" value={temp} onChange = {(e) =>handelar(e,scale)} />
        </div>
    )
}