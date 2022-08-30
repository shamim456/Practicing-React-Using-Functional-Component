import { useState } from "react"
import Input from "./Input"
import {toCelcious, toFahrenhite, convert} from "../Lib/Conveter"
export default function Calculator () {
    const [tempareture, setTempareture ] = useState("");
    const [scale, setScale] = useState("C");

    const inputHandelar = (e, scale) => {
        const input = e.target.value;
        const scaleName = scale;
        setTempareture(input);
        setScale(scaleName);
    }

    const fahenhite = scale === "C" ? convert(tempareture, toFahrenhite) : tempareture;
    const celcious = scale === "F" ? convert(tempareture, toCelcious) : tempareture;

    return(
        
        <div>
            <Input temp ={celcious} handelar = {inputHandelar} scale = "C" />
            <Input temp ={fahenhite} handelar = {inputHandelar} scale = "F" />
        </div>
        
    )
}