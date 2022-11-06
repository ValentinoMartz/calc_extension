import "./App.css";

function App() {
  return (
    <div className="flex bg-slate-500">
      <div className="flex">
        <div className="">
          <input type="text" placeholder="..." />
          <button className="m-5">+</button>
          <button className="m-5">-</button>
          <button className="m-5">*</button>
          <button className="m-5">/</button>
          <button className="m-5">=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
