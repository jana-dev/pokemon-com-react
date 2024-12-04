import imgPokemon from '../assets/Bulbasaur.png'

function PokemonCard({pokemonData}) {


  if(!pokemonData){
    return <p>Nenhum Pokemon encontrado.</p>
  }

  const stats = pokemonData.stats
  const hp = stats[0].base_stat
  const attack = stats[1].base_stat
  const defense = stats[2].base_stat
  const speed = stats[5].base_stat

  const getStatsPokemon = (value) => {
    if (value > 50) return "valor-atributo-maior"
    if (value < 50) return "valor-atributo-menor"
    return ""
  }

  const getTypePokemon = (value) => `valor-tipo ${value}`

  return (
    <div className="pokemon-card">
      <img width={150} src={pokemonData.sprites.front_default} alt={pokemonData.name} />
      <div className="tipo">
        <h2>{pokemonData.name.charAt(0).toUpperCase() + pokemonData.name.slice(1)}</h2>
        {pokemonData.types.map((type, index) => (
          <p key={index} className={getTypePokemon(type.type.name)}>{type.type.name}</p>
        ))}
     
      </div>
      <div className="atributos">
        <div>
          <p className='nome-atributo'>HP</p>
          <p className={getStatsPokemon(hp)}>{hp}</p>
        </div>
        <div>
          <p className='nome-atributo'>Ataque</p>
          <p className={getStatsPokemon(attack)}>{attack}</p>
        </div>
        <div>
          <p className='nome-atributo'>Defesa</p>
          <p className={getStatsPokemon(defense)}>{defense}</p>
        </div>
        <div>
          <p className='nome-atributo'>Velocidade</p>
          <p className={getStatsPokemon(speed)}>{speed}</p>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard