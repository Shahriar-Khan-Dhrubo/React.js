import React from "react";
import Card from "./Components/Card";
import data from "./data.json";
import { v4 as uuidv4 } from 'uuid';
function App() {
  return (
    <div>
      <h1>Welcome React</h1>
      <div className="card-container">
        {data.map((item)=> {
          const id = uuidv4();
          console.log(id);
          return <Card heading={item.title} key={id} text={item.desc} />;
        })}
      </div>
    </div>
  );
}

export default App;
