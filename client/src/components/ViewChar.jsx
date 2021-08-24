import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const ViewChar = (props) => {

  const [Name, setName] = useState('')
  const [Difficulty, setDifficulty] = useState('')
  const [Abilities, setAbilities] = useState('')
  const [Role, setRole] = useState('')
  const [Img, setImg] = useState('')

  const params = useParams()

  useEffect(() => {
    if (params.id && props.characters.length > 0) {
      const thisChar = props.characters.find(character => params.id === character.id)
      console.log(thisChar)
      if (thisChar) {
        setName(thisChar.fields.Name)
        setRole(thisChar.fields.Role)
        setDifficulty(thisChar.fields.Difficulty)
        setAbilities(thisChar.fields.Abilities)
        setImg(thisChar.fields.Img)
      }
    }
  }, [params.id, props.characters])

  const deleteChar = async () => {
    await axios.delete(`https://api.airtable.com/v0/${process.env.REACT_APP_OVERWATCH_BASE}/characters/${props.character}`)
    props.setToggleFetch((prevState) => !prevState)
  }

  return (
    <>
      <div>
      <Link className="home" to="/">Home</Link>
      <Link className="charSelect1" to='/CharSelect'>Character Selection</Link>
      </div>

      <div className="CharacterItems">
        <h2>{Name}</h2>

        <h3>Role</h3>
        <h4>{Role}</h4>
        <h3>Difficulty</h3>
        <h4>{Difficulty}</h4>

        <h3>Abilities</h3>
        <h4>{Abilities}</h4>
        
        <img src={Img} alt={Name} />
      </div>

      <div>
      <button onClick={deleteChar}>Delete me!</button>
      </div>
    </>
    
  )
}

export default ViewChar


