import "./App.css";
import Head from "./Components/Head";
import Item from "./Components/Item";
import Slider from "./Components/Slider";

function App() {
  return (
    <>
      <div className="container">
        <Head />
        <Slider />
        <div className="titleRela">
          <span>Related</span>
        </div>
        <div className="items">
          <Item />
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </>
  );
}

export default App;
