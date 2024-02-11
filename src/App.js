import {useState} from "react";

const App = () => {
    const [colorOne, setColorOne] = useState('red')
    const [colorTwo, setColorTwo] = useState('blue')

    const handleClick = () => {
        setColorOne(colorTwo)
        setColorTwo(colorOne)
    }
  return (
      <div>
        <div onClick={handleClick} style={{background:colorTwo}}></div>
        <div onClick={handleClick} style={{background:colorOne}}></div>
      </div>
  );
};

export default App;
