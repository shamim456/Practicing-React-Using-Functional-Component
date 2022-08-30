import { useEffect, useState } from "react"
import Button from "./Button";

export default function Clock() {
    const [date, setDate] = useState(new Date());
    const [locale, setLocale] = useState("bn-BD");
    const [buttonLocale, setButtonLocale] = useState("Change To English Ghori");
    const [show, setShow] = useState(true);

    useEffect (() => {
        const intervel = setInterval(tick, 1000)

        // clear intervel

        return () => {
            clearInterval(intervel);
        }
    },[])

    const tick = () => {
        setDate(new Date())
    }

    const changHandelar = () => {
        if(locale === "bn-BD") {
            setLocale("en-US");
            setButtonLocale("Change To English Ghori");
            setShow(false);
            
        } else{
            setLocale("bn-BD");
            setButtonLocale("Change To Bangla Ghori");
            setShow(true);
        }    
    }
    return(
        <div>
            <h1>This Time Is: {date.toLocaleTimeString(locale)}</h1>
            <button onClick={changHandelar}>{buttonLocale}</button>
            <Button changHandelar= {changHandelar} locale = "bn-BD" buttonLocale={buttonLocale} />
            <h1>{show && "shamim"}</h1>
        </div>
    )
}