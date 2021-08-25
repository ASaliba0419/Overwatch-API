import { useHistory, useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { baseURL, config } from '../services'
import './ViewChar.css'

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

  const { Name, Role, Difficulty, Abilities, Img } = thisChar.fields



  const deleteChar = async () => {
    await axios.delete(`${baseURL}/${params.id}`, config)
    props.setToggleFetch((prevState) => !prevState)
    history.push('/CharSelect')
  }


  return (
    <>
      <div className="wholePage">
      
      <div className='navViewChar'>
        <Link to='/CharSelect'>All Characters</Link>
        <Link to="/">Home</Link>
      </div>

      <div className="characterContainer">
        <div className="charcterItemsC">

          <div className="nameC">
            <h2 className="name">{Name}</h2>
          </div>

          <div className="roleC">
            <h3 className='roleTitle'>Role</h3>
            <h3 className='diffTitle'>Difficulty</h3>
          </div>

          <div className="roleNameC">
            <h4 className='role'>{Role}</h4>
            <h4 className='diff'>{Difficulty}</h4>
          </div>

          

          <div className="imageC">
            <img src={Img} alt={Name} className='img' />
          </div>

        </div>
      </div>
      <div className="abilC">
      <ul>
        <div className="abilTitleC">
          <h3 className='abilTitle'>Abilities</h3>
        </div>
        <div className="abilNameC">
          <h4 className='abil'>{Abilities}</h4>
          </div>
          </ul>
          </div>


      <div className='delbtn'>
        {
          (thisChar.fields.Deletable === "false") ? null :
            <button onClick={deleteChar}>Delete me!</button>
        }
      </div>

      </div>

    </>

  )
}

export default ViewChar


