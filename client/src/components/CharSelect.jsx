import { Link } from 'react-router-dom'
import './CharSelect.css'


const CharSelect = (props) => {



  return (
    <>
      <div>
        <h2 className='CharSelect1'>Character Selection</h2>
        <Link className="home" to="/">Home</Link>
        <Link className="charCreate1" to="/CharCreate">Create Character</Link>
      </div>

    
      <div className="cards">
        {props.characters.map((character) => (
          <Link to={`ViewChar/${character.id}`}>
            <img className='card' src={character.fields.Img} alt={character.fields.name} />
          </Link>
          ))}
      </div>
    </>
  )
}

export default CharSelect
