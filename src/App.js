import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";

import { useState } from "react";

const App = () => {

  const [text, setText] = useState("text")
  const [result, setResult] = useState("result")

  const addToText = (val) => {
    setText((text)=>[...text,val + " "])
  }



  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}></Input>
        <div className="row">
        <Button symbol="7" handleClick={addToText}></Button>
        <Button symbol="8" handleClick={addToText}></Button>
        <Button symbol="9" handleClick={addToText}></Button>
        <Button symbol="/" color="#eab676"></Button>
        </div>
        <div className="row">
        <Button symbol="4" handleClick={addToText}></Button>
        <Button symbol="5" handleClick={addToText}></Button>
        <Button symbol="6" handleClick={addToText}></Button>
        <Button symbol="*" color="#eab676"></Button>
        </div>
        <div className="row">
        <Button symbol="1" handleClick={addToText}></Button>
        <Button symbol="2" handleClick={addToText}></Button>
        <Button symbol="3" handleClick={addToText}></Button>
        <Button symbol="+" color="#eab676"></Button>
        </div>
        <div className="row">
        <Button symbol="0" handleClick={addToText}></Button>
        <Button symbol="." handleClick={addToText}></Button>
        <Button symbol="="></Button>
        <Button symbol="-" color="#eab676"></Button>
        </div>
        <Button symbol="Clear" color="#1e81b0" handleClick={addToText} ></Button>


      </div>
    </div>
  );
};

export default App;
