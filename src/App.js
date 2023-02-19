import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import { Routes, Route, useLocation} from "react-router-dom";
import About from './components/About'
import Detail from './components/Detail'
import Form from "./components/Form";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const  onSearch = (character)=> {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             window.alert('No hay personajes con ese ID');
          }
       });
 }

 const onClose = (id) => {
  setCharacters(
    characters.filter(character => character.id !== id)
  )
 }

  return (
    <div className="App" style={{ padding: "35px" }}>
      {location.pathname === '/' ? <Form/> : <Nav onSearch={onSearch}/>}
      
      <Routes>
        <Route path="/home" element ={<Cards characters={characters}
        onClose={onClose}/>} />
        <Route path="/about" element ={<About/>} />
        <Route path="/detail/:detailId" element ={<Detail/>} />        
      </Routes>


    </div>
  );
}

export default App;

