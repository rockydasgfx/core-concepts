import "./App.css";
import Component from "./Components/Component/Component";
import Jsx from "./Components/Jsx/Jsx";
import Props from "./Components/Props/Props";
import Counter from "./Components/State/Counter";
import ApiCall from "./Components/UseEffcet/ApiCall";

function App() {
  return (
    <div className="app">
      <Jsx />
      <Component />
      <Props name="rocky das" />
      <Counter />
      <ApiCall />
    </div>
  );
}

export default App;
