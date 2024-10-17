import logo from './logo.svg';
import './App.css';
import Card1 from './Components/Card1';
import Card2 from './Components/Card2';

function App() {
  return (
    <div className="App">
      hello world
      <Card1 heading="Card 1" desc="card using functional components" />
      <Card2 heading="Card 2" desc="card using class component" />
    </div>
  );
}

export default App;
