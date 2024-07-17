
interface movieProp {
    movies:any
}

const Home = (props:movieProp) => {
   
  return (
    <>
        <h1 className="text-slate-300 pl-28 text-2xl mt-5 font-bold">Latest Releases</h1>
        <div className="grid grid-cols-4 pl-24 mt-5">
            {props.movies.map((data:any) => {
                return <>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg mt-2 mx-auto">
                        <img className="w-full" src={`https://image.tmdb.org/t/p/w500/${data.poster_path}`} alt="Sunset in the mountains"/>
                    </div>
                </>
            })}
        </div>
    </>
  )
}

export default Home