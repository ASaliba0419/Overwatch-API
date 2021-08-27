import './App.css';
import './components/Header.css'
import axios from 'axios'
import Header from './components/Header'
import CharSelect from './components/CharSelect'
import ViewChar from './components/ViewChar'
import CharCreate from './components/CharCreate'
import { Route, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { baseURL, config } from './services'
import Footer from './components/Footer'



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
      <div>
        <Header />
      </div>


          <div className='charContainer'>
        <Route path="/" exact>



          <div className="title">
          <h2 >Get a view of all the characters, or <br /> create your own!</h2>
          </div>


          <div className='navHomepage'>
          <Link  to='/CharSelect'>All Characters</Link>
            <Link to="/CharCreate">Create Character</Link>
            </div>

        </Route>

          </div>
        <Route path="/CharSelect">
          <CharSelect characters={characters} />
        </Route>

        <Route path="/CharCreate">
          <CharCreate characters={characters} setToggleFetch={setToggleFetch} />
        </Route>

        <Route path='/ViewChar/:id'>
          <ViewChar characters={characters} setToggleFetch={setToggleFetch} />
        </Route>

        <>
      <div>
        <Footer />
        </div>
        </>

    </>
  );
}

export default App;
