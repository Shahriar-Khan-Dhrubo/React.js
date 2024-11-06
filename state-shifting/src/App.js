import logo from './logo.svg';
import './App.css';

import Child from './Components/State-shifting/Child';

function App() {
  const dataParent = "i am data from parent";
  const handleChildData = (childData)=>{
    console.log(childData);
  }
  return (
    <div className="App">
      <Child data={dataParent} onChildData={handleChildData}/>
    </div>
  );
}

export default App;
