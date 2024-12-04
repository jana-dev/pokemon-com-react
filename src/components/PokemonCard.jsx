import imgPokemon from '../assets/Bulbasaur.png'

function PokemonCard({pokemonData}) {

  if(!pokemonData){
    return <p>Nenhum Pokemon encontrado.</p>
  }


  return (
    <div className="pokemon-card">
      <img width={150} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <div className="tipo">
        <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
        {pokemonData.types.map((type, index) => (
          <p key={index} className='valor-tipo'>{type.type.name}</p>
        ))}
     
      </div>
      <div className="atributos">
        <div>
          <p className='nome-atributo'>HP</p>
          <p>89</p>
        </div>
        <div>
          <p className='nome-atributo'>Ataque</p>
          <p>66</p>
        </div>
        <div>
          <p className='nome-atributo'>Defesa</p>
          <p>32</p>
        </div>
        <div>
          <p className='nome-atributo'>Velocidade</p>
          <p>45</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard