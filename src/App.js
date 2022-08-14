import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import * as math from "mathjs";

import { useState } from "react";
import { evaluate } from "mathjs";

const App = () => {

  const [text, setText] = useState("")
  const [result, setResult] = useState("")

  const addToText = (val) => {
    setText((text)=>[...text,val + " "])
  }

const calculateResult = ()=> {
  const input = text.join("") // remove all commas

  setResult(math.evaluate(input))
}

  const resetInput = () => {
    setText("")
    setResult("")

  }



  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}></Input>
        <div className="row">
        <Button symbol="7" handleClick={addToText}></Button>
        <Button symbol="8" handleClick={addToText}></Button>
        <Button symbol="9" handleClick={addToText}></Button>
        <Button symbol="/" color="#eab676" handleClick={addToText}></Button>
        </div>
        <div className="row">
        <Button symbol="4" handleClick={addToText}></Button>
        <Button symbol="5" handleClick={addToText}></Button>
        <Button symbol="6" handleClick={addToText}></Button>
        <Button symbol="*" color="#eab676" handleClick={addToText}></Button>
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
        <Button symbol="=" handleClick={calculateResult}></Button>
        <Button symbol="-" color="#eab676" handleClick={addToText}></Button>
        </div>
        <Button symbol="Clear" color="#1e81b0"  handleClick={resetInput}></Button>


      </div>
    </div>
  );
};

export default App;
