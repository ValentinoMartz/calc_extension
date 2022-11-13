import { useState } from "react";
import "./App.css";
const mexp = require("math-expression-evaluator");

function App() {
  const [result, setResult] = useState("");

  const clickHandler = (e) => {
    e.preventDefault();
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };

  const calculate = (e) => {
    e.preventDefault();
    try {
      setResult(mexp.eval(result).toString());
    } catch (err) {
      setResult("error");
    }
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      calculate(e);
    } else if (result === "error") {
      setResult("");
    } else {
      setResult(e.target.value);
    }
  };

  return (
    <div className=" bg-slate-500 w-[320px] m-auto text">
      <input
        onChange={(e) => setResult(e.target.value)}
        value={result /*  === "error" ? setResult("") : result */}
        onKeyDown={keyDownHandler}
        type="text"
        placeholder="👨‍🚀🌔"
        className={
          result === "error"
            ? " text-[#f81717] bg-[#e3e3e3] p-10 text-4xl text-right w-full h-[45px] border-[3px] border-black outline-none hover:bg-[#f81717] hover:text-black hover:border-black"
            : "bg-[#e3e3e3] p-10 text-4xl text-right w-full h-[45px] border-[3px] border-black outline-none hover:border-[#0e06f5] hover:text-[#0e06f5] placeholder:text-3xl placeholder:"
        }
      />
      <input
        onClick={clickHandler}
        type="button"
        value="1"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="2"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="3"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="4"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="5"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="6"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="7"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="8"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="9"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointe text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="0"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="+"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="-"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-4xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="*"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="/"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="%"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-xl"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="."
        className="bg-[#333] h-[80px] w-[80px] hover:bg-[#0e06f5] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />

      <input
        onClick={clearDisplay}
        type="button" /* #f81717 */
        value="clear"
        className="bg-[#333] h-[80px] w-[160px] hover:bg-[#f81717] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
      <input
        onClick={calculate}
        type="button"
        value="="
        className="bg-[#333] h-[80px] w-[160px] hover:bg-[#1cc619] text-white font-[30px] border-black border-[1px] float-left cursor-pointer text-2xl"
      />
    </div>
  );
}

export default App;
