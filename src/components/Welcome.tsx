
interface Movie {
    title: string,
    release_date: string;
    overview: string;
    poster_path: string;
    [key: string]: any;
}
interface movieProp {
    movies: Movie
}

const Welcome = (props:movieProp) => {
    console.log(props.movies)
  return (
    <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(https://image.tmdb.org/t/p/w500${props.movies.poster_path})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} 
        className="h-screen grid grid-cols-2">
        <div>
            <h1 className="text-slate-300 pt-60 font-bold text-4xl">{props.movies.title}</h1>
            <h1 className="text-slate-300 mt-3">{props.movies.release_date}</h1>
            <h1 className="text-slate-300 mt-4">{props.movies?.overview.substring(0,props?.movies?.overview.indexOf("."))}</h1>
            <h1 className="text-yellow-500 font-bold text-3xl mt-8" >Review</h1>
            <button className="bg-gray-500 mt-10 w-80 h-12 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded">
                Watch Now
            </button>
        </div>
        <div>

        </div>

    </div>
  )
}

export default Welcome