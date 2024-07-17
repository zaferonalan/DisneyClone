import Home from './Home'
import Navbar from './Navbar'
import Welcome from './Welcome'
import { useEffect, useState } from "react"

const Main = () => {

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
    <div className='bg-black'>
        <div className='flex h-screen w-full'>
            <div className='w-1/12'>
                <Navbar/>
            </div>
            <div className=' w-11/12'>
                <Welcome movies={movies[0]}/>
            </div>
        </div>
        <div>
            <Home movies={movies}/>
        </div>
    </div>
  )
}

export default Main