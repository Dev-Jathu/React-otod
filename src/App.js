import './App.css';
import { Route, Routes } from "react-router-dom";
import Homepage from './Componets/Pages/HomePage'
import About from './Componets/Pages/About'
import Node from './Componets/Pages/Note'
import Contact from './Componets/Pages/Contact'
import Signup from './Componets/Pages/Signup'
import Signin from './Componets/Pages/HomePage'


function App() {
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Node" element={<Node/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/Signin' element={<Signin/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
