
import './App.css';
import Carrousel from './components/carrousel/Carrousel';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ContactUs from './components/contact/ContactUs';
import Music from "./components/images/fondo.mp3"

function App() {
  return (
    <div className="App">
      <audio controls autoPlay>
        <source src={Music}/>
      </audio>
      
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route 
          path='/' 
          element={
          <Carrousel/>
          }/>
        </Routes>
        
        </Router>  
    </div>
  );
}

export default App;
