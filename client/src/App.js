import './App.css';
import axios from 'axios'
import Header from './components/Header'
import CharSelect from './components/CharSelect'
import ViewChar from './components/ViewChar'
import CharCreate from './components/CharCreate'
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseURL, config } from './services'



function App() {
  const [characters, setCharacters] = useState([])
  const [toggleFetch, setToggleFetch] = useState(false)

  useEffect(() => {
    const fetchChar = async () => {
      try {
        const resp = await axios.get(baseURL, config)
        setCharacters(resp.data.records)
        console.log(resp.data.records)
      } catch (error) {
        console.error(error.message)
      }
    }
    fetchChar()
  }, [toggleFetch])


  return (
    <>


      <div className='center'>
        <Header />
      </div>

      <div>

        <Route path="/" exact>
          <div className='charContainer'>

          </div>


          <h2 className="title">Get a view of all the characters, or create your own!</h2>
          <Link className="charSelect" to='/CharSelect'>All Characters</Link>
          <Link className="charCreate" to="/CharCreate">Create Character</Link>

        </Route>

        <Route path="/CharSelect">
          <CharSelect characters={characters} />
        </Route>

        <Route path="/CharCreate">
          <CharCreate characters={characters} setToggleFetch={setToggleFetch}/>
        </Route>

        <Route path='/ViewChar/:id'>
          <ViewChar characters={characters}/>
        </Route>
      </div>
    </>
  );
}

export default App;
