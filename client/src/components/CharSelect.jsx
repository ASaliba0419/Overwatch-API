import { Link } from 'react-router-dom'
import './CharSelect.css'


const CharSelect = (props) => {



  return (
    <>
      
      <div className='navSelect'>
        <Link to="/CharCreate">Create Character</Link>
        <Link to="/">Home</Link>
      </div>
      
        <div className="charSelectTitle">
        <h2 className='CharSelect1'>Character Selection</h2>
      </div>

      <div className="cardContainer">
      <div className="cards">
        {props.characters.map((character) => (
          <Link to={`/ViewChar/${character.id}`}>
            <img className='card' id='selectImg' src={character.fields.Img} alt={character.fields.name} />
          </Link>
          ))}
        </div>
      </div>
      
    </>
  )
}

export default CharSelect
