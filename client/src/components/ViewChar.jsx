import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseURL, config } from '../services'

const ViewChar = (props) => {


  const params = useParams()
  const history = useHistory()


  const thisChar = props.characters.find(character => params.id === character.id)
  if (!thisChar) {
    return (
      <>
      <div>
      <Link className="home" to="/">Home</Link>
      <Link className="charSelect1" to='/CharSelect'>Character Selection</Link>
      </div>
        <p>Invalid ID</p>
      </>
    )
  }

  const {Name, Role, Difficulty, Abilities, Img} = thisChar.fields



  const deleteChar = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config)
    props.setToggleFetch((prevState) => !prevState)
    history.push('/CharSelect')
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
        {
          (thisChar.fields.Deletable === "false") ? null : 
          <button onClick={deleteChar}>Delete me!</button>

        }
      </div>

    </>
    
  )
}

export default ViewChar


