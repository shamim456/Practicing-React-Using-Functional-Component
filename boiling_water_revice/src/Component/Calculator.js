import { useState } from "react"
import Input from "./Input";
import { toCelcious, toFaharenhite, convert } from "../Lib/Conveter";
import Boiling from "./Boiling";

export default function Calculator() {
    const [tempareture, setTempareture] = useState("");
    const [scale, setScale] = useState("C");

    const inputHandelar = (e, scale) => {
        const tempareture = e.target.value;
        const scaleName = scale;
        setTempareture(tempareture);
        setScale(scaleName);
    }
    const Celcious = scale === "C" ? convert(tempareture, toFaharenhite) : tempareture;
    const faharenhite = scale === "F" ? convert(tempareture, toCelcious) : tempareture;
    return(
        <div>
            <Input temp={faharenhite} inputHandelar= {inputHandelar} scale = "C"/>
            <Input temp={Celcious} inputHandelar= {inputHandelar} scale = "F"/>
            <Boiling Celcious={faharenhite} faharenhite={Celcious}/>
        </div>
    )
}