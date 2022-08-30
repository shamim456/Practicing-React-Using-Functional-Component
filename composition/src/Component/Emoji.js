export default function Emoji(props) {
    const addEmoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    return(
        <div>
            {props.children({addEmoji})}
        </div>
    )
}