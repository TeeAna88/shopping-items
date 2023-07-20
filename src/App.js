import './App.css';
import image from './shopping.jpeg';
import imageTwo from './man.jpeg'
import { GroseryList } from './GroseryList';


function App() {
  return (
    <div className='App'>
      <div className='container'>
       <img src = {image} alt='shopping' width='200px'/>
      </div>
      <div className='container'>
       <h1>Grocery List</h1>
      </div>
      <GroseryList/>
      <div className='container'>
      <img src = {imageTwo} alt='man' width='200px'/>
      </div>
    </div>
  );
}

export default App;
