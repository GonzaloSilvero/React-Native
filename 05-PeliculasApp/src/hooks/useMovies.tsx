import { useEffect, useState } from 'react'
import movieDB from "../api/movieDB"
import { Movie, MovieDBNowPlaying } from "../interfaces/movieInterface"

export const useMovies = () => {

    const [isLoadig, setIsLoadig] = useState(true)
    const [peliculasEnCine, setPeliculasEnCine] = useState<Movie[]>([])

    const getMovies = async () => {
        const resp = await movieDB.get<MovieDBNowPlaying>('/now_playing');
        setPeliculasEnCine( resp.data.results )

        setIsLoadig(false)
    }


    useEffect(() => {
        getMovies()
    }, [])

    return {
        peliculasEnCine,
        isLoadig
    }

}