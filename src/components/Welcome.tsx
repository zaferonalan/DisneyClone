import avangers from "../images/avengers.png"

const Welcome = () => {
  return (
    <div style={{backgroundImage:`linear-gradient(to right,rgba(0,0,0,7),rgba(0,0,0,0.1)),url(${avangers})`
        ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}} 
        className="h-screen grid grid-cols-2">
        <div>
            <h1 className="text-slate-300 pt-60 font-bold text-4xl">Endgame</h1>
            <h1 className="text-slate-300 mt-3">2023-10-13</h1>
            <h1 className="text-slate-300 mt-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. 
                It has roots in a piece of classical Latin literature from 45 BC, making it 
                over 2000 years old. Richard McClintock, a Latin
            </h1>
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