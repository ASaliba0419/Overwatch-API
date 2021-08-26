import axios from "axios"
import { Link, useHistory } from "react-router-dom"
import { useState } from "react"
import { baseURL, config } from '../services'
import './CharCreate.css'


const CharCreate = (props) => {

  const [Name, setName] = useState('')
  const [Difficulty, setDifficulty] = useState('')
  const [Abilities, setAbilities] = useState('')
  const [Role, setRole] = useState('')
  const [Img, setImg] = useState('')

  const history = useHistory()


  const handleSubmit = async (event) => {
    event.preventDefault()
    const newChar = {
      Name,
      Role,
      Difficulty,
      Abilities,
      Img
    }

    const resp = await axios.post(baseURL, { fields: newChar }, config)

    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
    history.push(`/ViewChar/${resp.data.id}`)

  }

  return (
    <>
      <div className='navCharCreate'>
        <Link className="" to="/CharSelect">All Characters</Link>
        <Link className="home" to="/">Home</Link>
      </div>
        <h2 className='CharCreate1'>Create your Character</h2>

      <div className="formC">
      <form onSubmit={handleSubmit} className='formPge'>
        <div className='name'>
          <input
            type="text"
            value={Name}
            placeholder='Name'
            onChange={(e) => setName(e.target.value)}
          />
        </div>


        <div className='diffRole'>
          <select onChange={(e) => setRole(e.target.value)}>
            <option value="" disabled selected hidden>Choose a role</option>
            <option value='Tank'>Tank</option>
            <option value='Support'>Support</option>
            <option value='Damage'>Damage</option>
          </select>

          <input
            id="difficulty"
            type='number'
            value={Difficulty}
            max="3"
            min="1"
            placeholder='Difficulty'
            onChange={(e) => setDifficulty(e.target.valueAsNumber)}
            />
        </div>


        <div className="userCreatedPic">
          <input
            type='url'
            placeholder='https://YourImageHere.com'
            required
            onChange={(e) => setImg(e.target.value)}
          />
        </div>


      </form>
      </div>
      <div className='abilContent'>
          <input
            id="abilities"
            type='text'
            value={Abilities}
            placeholder='Add Abilities'
            onChange={(e) => setAbilities(e.target.value)}
          />
        <button id='submitBtn' type='submit'>Submit</button>
        </div>
    </>
  )
}

export default CharCreate
