export default function Bracket(props) {
    const addBracket = (text) => `[ ${text} ]`;
    
    return(
        <div>
            {props.children({addBracket})}
        </div>
    )
}