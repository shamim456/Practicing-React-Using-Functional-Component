export default function Text({addEmoji, addBracket}) {
    let Text = "I Am Shamim";
    if(addEmoji) {
        Text = addEmoji(Text, "555")
    }
    if(addBracket) {
        Text = addBracket(Text)
    }
    return(
        <div>
            {Text}
        </div>
       
    )
}