import { useEffect, useState } from 'react'
import movieDB from "../api/movieDB"
import { Movie, MovieDBMoviesResponse } from "../interfaces/movieInterface"

interface MoviesState {
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcomnig: Movie[];
}

export const useMovies = () => {

    const [ isLoadig, setIsLoadig ] = useState(true)
    const [ moviesState, setMoviesState] = useState<MoviesState>({
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcomnig: [],
    })

    const getMovies = async () => {
        const nowPlayingPromise = movieDB.get<MovieDBMoviesResponse>('/now_playing');
        const popularPropmise = movieDB.get<MovieDBMoviesResponse>('/popular');
        const topRatedPromise = movieDB.get<MovieDBMoviesResponse>('/top_rated');
        const upcomnigPromise =  movieDB.get<MovieDBMoviesResponse>('/upcoming');

        const resps = await Promise.all([ 
            nowPlayingPromise, 
            popularPropmise, 
            topRatedPromise, 
            upcomnigPromise  
        ])

        setMoviesState({
            nowPlaying: resps[0].data.results,
            popular: resps[1].data.results,
            topRated: resps[2].data.results,
            upcomnig:  resps[3].data.results,
        })

        setIsLoadig(false)
    }


    useEffect(() => {
        getMovies()
    }, [])

    return {
        ...moviesState,
        isLoadig
    }

}