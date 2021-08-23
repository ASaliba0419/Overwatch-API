import './App.css';
import Header from './components/Header'
import axios from 'axios'
import { Route, Link } from 'react-router-dom';
import CharSelect from './components/CharSelect'
import { useState, useEffect } from 'react';
import { baseURL, config } from './services'
import CharCreate from './components/CharCreate'
import ViewChar from './components/ViewChar'



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
          <Link className="charSelect" to='/CharSelect'>Character Selection</Link>
          <Link className="charCreate" to="/CharCreate">Create Character</Link>

        </Route>

        <Route path="/CharSelect">
          <CharSelect characters={characters} />
        </Route>

        <Route path="/CharCreate">
          <CharCreate />
        </Route>

        <Route path='/:id'>
          <ViewChar characters={characters}/>
        </Route>
      </div>
    </>
  );
}

export default App;
