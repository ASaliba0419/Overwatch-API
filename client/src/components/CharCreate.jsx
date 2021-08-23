import axios from "axios"
import { Link, useParams } from "react-router-dom"
import { useState } from "react"
import { baseURL, config } from '../services'


const CharCreate = (props) => {

  const [Name, setName] = useState('')
  const [Difficulty, setDifficulty] = useState('')
  const [Abilities, setAbilities] = useState('')
  const [Role, setRole] = useState('')
  const [Avatar, setAvatar] = useState('')

  const params = useParams()



  const handleSubmit = async (event) => {
    event.preventDefault()
    const newChar = {
      Name,
      Role,
      Difficulty,
      Abilities,
      Avatar
    }


    if (params.id) {
      await axios.put(`${baseURL}/${params.id}`, { fields: newChar }, config)
    } else {
      await axios.post(baseURL, { fields: newChar }, config)
    }
    props.setToggleFetch(prevToggleFetch => !prevToggleFetch)
  }

return (
  <>
    <div>
      <Link className="home" to="/">Home</Link>
      <Link className="" to="/CharSelect">All Characters</Link>
      <h2 className='CharCreate1'>Create your Character</h2>
    </div>

    <form onSubmit={handleSubmit}>
      <input
        id="name"
        type="text"
        value={Name}
        placeholder='Name'
        onChange={(e) => setName(e.target.value)}
      />

      <select id="role" onChange={(e) => setRole(e.target.value)}>
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
        onChange={(e) => setDifficulty(e.target.value)}
      />
      <input
        id="abilities"
        type='text'
        value={Abilities}
        placeholder='Add Abilities'
        onChange={(e) => setAbilities(e.target.value)}
      />
      <input
        type='file'
        id='avatar'
        accept="image/png, image/jpeg, image/url"
        onChange={(e) => setAvatar(e.target.value)}
      />
      <button id='submitBtn' type='submit'>Submit</button>
      
    </form>
    
  </>
)
}

export default CharCreate
