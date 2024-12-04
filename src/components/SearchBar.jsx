import { useState } from "react";
import { IoMdSearch } from "react-icons/io";

function SearchBar({setPokemonData}) {

    const [searchValue, setSearchValue] = useState("")

    const handleSearch = async () => {
        if (searchValue) {
            try {
                const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue}`)
                if(!response.ok){ //se deu falso
                    throw new Error("Pokemon não encontrado, digite novamente", response.status)
                }
                const data = await response.json()
                // console.log(data)
                setPokemonData(data)
            } catch (error) {
                console.error("Erro ao buscar pokemon", error.message)
                setPokemonData(null)
            }

        } else {
            alert("Digite um nome válido!")
        }
    }

    return (
        <>
            <h1>Busque por um Pokemon</h1>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Digite o nome do Pokemon"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value.toLowerCase())}
                />
                <button onClick={handleSearch}>
                    <IoMdSearch className="search-icon" />
                </button>
            </div>
        </>
    )
}

export default SearchBar