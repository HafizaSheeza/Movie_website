import React from 'react'
import { useGlobalContext } from '../Context/Movie_Context'
import styled from 'styled-components'
import { HiOutlineSearch } from 'react-icons/hi';

const Search = () => {
    const { Query, setQuery, Error, setError } = useGlobalContext()
    return (
        <>
            <Wrapper className="search-section">
                {/* <h2>Search Your Favourite Movie</h2> */}
                <form action="#" onSubmit={(e) => e.preventDefault()}>
                    <div className='input-search'><input type="Search" name="" id="" placeholder='Search Your Favourite Movie...' value={Query} onChange={(e) => setQuery(e.target.value)} />
                        <button>   <HiOutlineSearch className='icon' /></button></div>
                </form>
                <div className='card-error'>
                    <p>{Error.show && Error.msg}</p>
                </div>

            </Wrapper>
        </>
    )
}

const Wrapper = styled.section`
    text-align: center;
   h2{
    color: #ffffff;
        opacity: 12.0%;
        padding: 4rem 0;
        font-size: 3rem;
   }
   .input-search{
    margin-top: 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   button{
    padding:1.12rem 1.5rem;
    border-top-right-radius: 50px;
border-bottom-right-radius:50px ;
background-color: #080b0c;
/* opacity: 30.0%; */
border: none;
   }
   .icon{
display: flex;
justify-content: center;
align-items: center;
    color: #ffffff;
    font-size: 2rem; 
   }
    input{
        padding: 1rem 1.5rem;
        width: 40rem;
        min-width: 20rem;
        max-width: 40rem;
        /* border-radius: 50px; */
        background-color: #080b0c;
        /* opacity: 30.0%; */
        border: none;
        outline: none;
border-top-left-radius: 50px;
border-bottom-left-radius:50px ;

  color: #ffffff;
    font-size: 1.5rem;
    /* border: 1px solid #8696a0; */
    ::placeholder{
        color: white;
    }
    }
    .card-error{
        padding-top: 1rem;
        font-size: 2rem;
        color: blue;
    }
    @media screen and (max-width:700px) {
input{
    width: 30rem;
}
    }
`
export default Search
