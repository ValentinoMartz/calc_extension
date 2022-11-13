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

  return (
    <div className=" bg-slate-500 w-[320px] mt-[100px] m-auto">
      <input
        onChange={(e) => setResult(e.target.value)}
        value={result}
        type="text"
        placeholder="0"
        className={
          result === "error"
            ? " text-red-600 bg-[#e3e3e3] p-10 text-4xl text-right w-full h-[45px] border-[3px] border-black outline-none hover:bg-red-600 hover:text-black hover:border-black"
            : "bg-[#e3e3e3] p-10 text-4xl text-right w-full h-[45px] border-[3px] border-black outline-none hover:border-blue-700 hover:text-blue-700"
        }
      />
      <input
        onClick={clickHandler}
        type="button"
        value="1"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="2"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="3"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="4"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="5"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="6"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="7"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="8"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="9"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="0"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="+"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="-"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="*"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="/"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="%"
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={clickHandler}
        type="button"
        value="."
        className="bg-[#333] h-[80px] w-[80px] hover:bg-blue-700 text-white font-[30px] border-black border-[1px] float-left"
      />

      <input
        onClick={clearDisplay}
        type="button"
        value="clear"
        className="bg-[#333] h-[80px] w-[160px] hover:bg-red-800 text-white font-[30px] border-black border-[1px] float-left"
      />
      <input
        onClick={calculate}
        type="button"
        value="="
        className="bg-[#333] h-[80px] w-[160px] hover:bg-lime-700 text-white font-[30px] border-black border-[1px] float-left"
      />
    </div>
  );
}

export default App;
