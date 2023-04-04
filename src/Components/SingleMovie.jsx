import React, { useState, useEffect } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { useGlobalContext } from '../Context/Movie_Context'
import styled from 'styled-components';
import axios from 'axios';
import Movie from './Movie';

const SingleMovie = () => {
    const { singleMovie, getSingleMovie, Loading } = useGlobalContext()

    const { id } = useParams();
    const API = ` https://www.omdbapi.com/?apikey=8ac876ff&i=${id}`;



    useEffect(() => {
        getSingleMovie(API)

    }, [])

    if (Loading) {
        return (<>
            <EmptyDiv>.....loading</EmptyDiv></>)
    }
    return (
        <Wrapper>
            <div className=' '>

                <div className='container grid grid-2-col'>
                    <div>
                        <img src={singleMovie.Poster} alt="" /></div>

                    <div className='movie-detail'>  <h1>{singleMovie.Type}:  {singleMovie.Title} </h1>
                        <h1>Release Year : {singleMovie.Year}</h1>

                    </div>
                </div>
                <NavLink to='/'><button>Go Back</button></NavLink>
            </div>
        </Wrapper>
    )
}

const EmptyDiv = styled.div`
  padding: 9rem 0;
  height: 80vh;
  font-size: 3rem;
  text-align: center;
  color: white;
 
`
const Wrapper = styled.div`
    
    .container{
    margin:3rem auto;
   max-width: 70rem;
   background-color: #080b0c;
        color: white;
  
 } 
    .grid{
        display: grid;
        place-items: center;
        
    }
    .grid-2-col{
      
        grid-template-columns: repeat(2,1fr);
      
    }
    img{
        width: 30rem;
       
    }
    .movie-detail{
       
        display: flex;
        flex-direction: column;
       justify-content: center;
        gap: 2rem;
        align-items: center;
       h1{
        text-transform: capitalize;
       }
    }
    button{
        display: flex;
        justify-content: center;
        margin: auto;
        padding: 1rem 2rem;
        background-color: #080b0c;
        border: 1px solid white;
        color: white;
        &:hover{
            cursor: pointer;

background-color:white;
color:black;
transition:all 0.5s ease;        }
    }
    @media screen  and (max-width:700px){
        .grid-2-col{

            grid-template-columns: 1fr;
        }
        .container{
    
  max-width: 33rem;
  
  /* padding:1rem 3.3rem ; */

 } 
        .movie-detail{

            order: -1;
        }
        
    }
`
export default SingleMovie
