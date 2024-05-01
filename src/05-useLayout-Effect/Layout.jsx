import React from 'react'
import { useCounter, useFetch } from '../hooks'
import LoadingMessage from '../03-examples/LoadingMessage';
import PokemonCard from '../03-examples/PokemonCard';

const Layout = () => {

    const { counter, increment, decrement } = useCounter(1);
    const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    return (
        <div>
            <h1>Poke API</h1>

            <hr />

            {isLoading ?
                <LoadingMessage/>
                :
                // <h2>{ data?.name }</h2> 
                (
                    <PokemonCard
                        id={counter}
                        name={data.name}
                        sprites={[
                            data.sprites.front_default,
                            data.sprites.front_shiny,
                            data.sprites.back_default,
                            data.sprites.back_shiny,
                        ] }
                    />
                )
            }

            <button
                onClick={ () => counter > 1 ? decrement() : null }
                className='btn btn-primary mt-2'
            >
                Anterior
            </button>
            <button
                onClick={() => increment()}
                className='btn btn-primary mt-2'
            >
                Siguiente
            </button>


        </div>
    )
}

export default Layout
