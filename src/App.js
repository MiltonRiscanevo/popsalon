
import './App.css';
import Carrousel from './components/carrousel/Carrousel';
import Auth from './components/gridImage/Auth';
import Grid from './components/gridImage/Grid';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Carrousel/>
      <div className='section_1'>
        <Grid/>
        <Auth className='sub_2'/>
      </div>
      
    </div>
  );
}

export default App;
