const scaleName = {
    C: "Celcious",
    F: "Faharenhite"
}
export default function Input({temp, inputHandelar,scale}) {
    return(
        <div>
            <h1>Input Temperature In {scaleName[scale]}</h1>
            <input type="text" value={temp} onChange={(e) => inputHandelar(e, scale)} />
        </div>
        
    )
}