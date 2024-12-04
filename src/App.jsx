import { useState } from 'react'
import './App.css'
import PokemonCard from './components/PokemonCard'
import SearchBar from './components/SearchBar'

function App() {

  const [pokemonData, setPokemonData] = useState(null)
  console.log(pokemonData)

  return (
    <div className='app'>
      <SearchBar setPokemonData={setPokemonData}/>
      <PokemonCard pokemonData={pokemonData}/>
    </div>
  )
}

export default App
