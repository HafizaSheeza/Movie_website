import React from 'react'
import { NavLink } from 'react-router-dom';
import { useGlobalContext } from '../Context/Movie_Context'

const Movie = () => {
    const { Movie } = useGlobalContext();

    return (
        <>
            <section className='movie-page'>

                <div className="container grid grid-4-col">

                    {
                        Movie.map((curElem, index) => {
                            const { imdbID, Title, Poster } = curElem;

                            return <NavLink to={`singlemovie/${imdbID}`} key={imdbID}>
                                <div className="card" >
                                    <div className="card-info">
                                        {Title.length > 20 ?
                                            (<h2>  {Title.slice(0, 17)}...</h2>) :
                                            (<h2> {Title}</h2>)}


                                        <img src={Poster} alt={imdbID} />
                                    </div>
                                </div>
                            </NavLink>
                        })
                    }
                </div>
            </section>
        </>
    )
}

export default Movie
