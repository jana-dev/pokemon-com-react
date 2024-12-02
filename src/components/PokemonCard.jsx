import imgPokemon from '../assets/Bulbasaur.png'

function PokemonCard() {


  return (
    <div className="pokemon-card">
      <img width={150} src={imgPokemon} alt="nome" />
      <div className="tipo">
        <h2>Pikachu</h2>
        
          <p className='valor-tipo'>elétrico</p>
     
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