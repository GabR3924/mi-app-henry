import '../App.css'
import { Link } from 'react-router-dom';

function Card({name, gender, onClose, species, image, detailId}) {
   return (
      <div className='cardPp'>
         <button className='boton' onClick={onClose}>X</button>
         <img className='img' src={image} alt={name} />
         <Link to={`/detail/${detailId}`}>
         <h2 className='nombre'>{name}</h2>
         </Link>
         <h2 className='especie'>{species}</h2>
         <h2 className='genero'>{gender}</h2>
   
      </div>
   );
}

export default Card;
