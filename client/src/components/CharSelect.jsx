import { Route, Link } from 'react-router-dom'

const CharSelect = (props) => {

  




  return (
    <>
      <div>
        <h2 className='CharSelect1'>Character Selection</h2>
        <Link className="home" to="/">Home</Link>
        <Link className="charCreate1" to="/CharCreate">Create Character</Link>
      </div>

    
      <div>
        {props.characters.map((character) => (
          <Link to={`/${character.id}`}>
          <img src={character.fields.Images} alt={character.fields.name} />
          </Link>
          ))}
      </div>
    </>
  )
}

export default CharSelect
