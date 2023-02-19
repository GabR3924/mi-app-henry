import Card from './Card';
import '../App.css'
import { Link } from 'react-router-dom';


 function Cards({characters, onClose}) {

   return(
      <div className='cardsUno'>
         {
             characters.map(({id,name, species, gender, image})=> {
               return( 
               <div className='cardP'>
               <Card
               key ={id}
               name={name}
               species={species}
               gender={gender}
               image={image}
               detailId={id}
               onClose={() => onClose(id)}
               />
               </div>)
             })
         }
      </div>
   )
};


export default Cards