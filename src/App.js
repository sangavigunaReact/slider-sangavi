import react from "react";
import Imageslider from "./components/imageslider";
import { SliderData } from './components/silderdata';

function App() {

  return (
    <div className="App">
      <Imageslider slides={SliderData} />
    </div>
  );
}

export default App;
