import Emoji from "./Component/Emoji";
import Text from "./Component/Text";
import Bracket from "./Component/Bracket"
function App() {
  return (
    <div>
      <Emoji>
        {({addEmoji})=> 
          <Bracket>
            {({addBracket}) => <Text addEmoji={addEmoji} addBracket={addBracket}/> }
          </Bracket>}  
      </Emoji>
    </div>
  );
}

export default App;
