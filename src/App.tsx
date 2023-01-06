import './App.css';
import { Accordion } from './components/Accordion';
import { Rating } from './components/Rating';

function App() {
  return (
    <div className="App">
      <Rating />
      --------------
      <Rating />
      --------------
      <Accordion title={"Accordion Title"} collapsed={true}/>
      --------------
      <Accordion title={"Accordion Title"} collapsed={false}/>
    </div>
  );
}

export default App;