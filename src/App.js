import "./App.css";
import data from "./../src/constant/data.json";
import Card from "./components/Card/Card";
import images from "./../src/constant/thumbnail.json"

function App() {
  return (
    <div>
      {data.map((each,_idx)=>(
        <Card title={each.title} img={images[_idx].img}  />
      ))}
    </div>
  );
}

export default App;
