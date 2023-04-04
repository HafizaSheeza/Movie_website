// context(api) is like a warehouse where we can take a and get data
// provider is a delivery boy which contain all area
//consumer is usecontext hook which is used thse data
import React, { useEffect, useState } from "react";
import axios from "axios";
import { createContext, useContext } from "react";
// const url = import.meta.env.VITE_SERVER_URL;
// console.log(${ JSON.stringify(import.meta.env) })
const API = ` http://www.omdbapi.com/?apikey=8ac876ff`;
const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [Loading, setLoading] = useState(true)
    const [Movie, setMovie] = useState([])
    const [Error, setError] = useState({ show: "false", msg: "" })
    const [Query, setQuery] = useState("barbie")
    const [singleMovie, setSingleMovie] = useState("")
    const getMovies = async (url) => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            // console.log(data);
            if (data.Response === "True") {
                setLoading(false)
                setMovie(data.Search)
            } else {
                setError({
                    show: "true",
                    msg: data.Error,
                })
            }

        } catch (error) {
            console.log(error)

        }
    }

    const getSingleMovie = async (url) => {
        try {
            const res = await axios.get(url);
            const data = await res.data;
            // console.log(data);
            if (data.Response === "True") {
                setLoading(false)
                setSingleMovie(data)

            } else {
                setError({
                    show: "true",
                    msg: data.Error,
                })
            }
        } catch (error) {
            console.log("error" + error)
        }
    }

    useEffect(() => {
        const timeout = setTimeout(() => {
            getMovies(`${API}&s=${Query}`)
        }, .800);
        return () => clearTimeout(timeout)

    }, [Query])


    return <AppContext.Provider value={{ Loading, Movie, Error, setQuery, setError, singleMovie, getSingleMovie, setLoading, setMovie }}>{children}</AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, useGlobalContext }