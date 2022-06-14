
import './App.css';
import Carrousel from './components/carrousel/Carrousel';
import Auth from './components/gridImage/Auth';
import GridImage from './components/gridImage/GridImage';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <div className='section_1'>
        <GridImage/>
        <Auth/>
      </div>
      
    </div>
  );
}

export default App;
