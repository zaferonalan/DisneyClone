import { useEffect, useState } from "react"
import jhonwick from "../images/johnwick.png"

const Home = () => {
    const [movies, setMovies] = useState([])

    const getMovies = async() => {
        try {
           await fetch("https://api.themoviedb.org/3/discover/movie?api_key=47387f32ec52bbabd8acb2378d3123ef")
            .then(res => res.json())
            .then(json => setMovies(json.results))
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMovies()
    }, [])

    console.log(movies)

  return (
    <div className="grid grid-cols-4">
        {movies.map((data:string) => {
            return <>
                <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 ml-2">
                    <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Sunset in the mountains"/>
                </div>
            </>
        })}
    </div>
  )
}

export default Home