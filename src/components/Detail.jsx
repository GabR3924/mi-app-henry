import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Detail = () => {
  const {detailId} = useParams()
  const[character, setCharacter] = useState({})

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);


  return (
    <div>
      <button>
        <Link to='/home'>Back</Link>
      </button>
      {/* //el signo de pregunta despues de character ( ? ) se llama condiciona chaining y es para preguntar si ya tiene la info la peticion asincrona  */}
        <h1>{character?.name}</h1>
        <p>{character?.status}</p>
        <p>{character?.species}</p>
        <p>{character?.gender}</p>
        {/* <p>{character.origin}</p>
        <p>{character.origin.name}</p> */}
        <img src={character?.image} alt={character?.name} />
    </div>
  )
}

export default Detail