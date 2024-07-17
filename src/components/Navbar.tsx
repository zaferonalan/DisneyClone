import logo from "../images/logo.png"
import user from "../images/user.png"
import search from "../images/search.png"
import home from "../images/home.png"
import love from "../images/love.png"
import action from "../images/action.png"
import comedy from "../images/comedy.png"
import { useState } from "react"
import { Fade } from "react-awesome-reveal"
import { Link } from "react-router-dom"

const Navbar = () => {

    const [touch, setTouch] = useState(false)

  return (
    <div className='fixed z-20 grid grid-cols-2 bg-black h-screen w-28'>
        <div onMouseEnter={() => setTouch(true)} onMouseLeave={() => setTouch(false)}>
            <img src={logo} className="w-28 ml-5 mt-5" />
            <Link to="/sigin"><img src={user} className="w-5 ml-9 mt-8 cursor-pointer" /> </Link>
            <img src={search} className="w-9 ml-7 mt-8 cursor-pointer" />
            <img src={home} className="w-9 ml-7 mt-8 cursor-pointer" />
            <img src={love} className="w-16 ml-5 mt-8 cursor-pointer" />
            <img src={action} className="w-16 ml-5 mt-8 cursor-pointer" />
            <img src={comedy} className="w-16 ml-5 mt-8 cursor-pointer" />
        </div>
        {touch && <Fade> <div className="bg-opacity-60 z-20 ml-8 w-20 bg-black h-screen font-bold text-base text-slate-300">
            <h4 className="mt-[82px]">Signin</h4>
            <h4 className="mt-9">Search</h4>
            <h4 className="mt-11">Home</h4>
            <h4 className="mt-10">Love</h4>
            <h4 className="mt-10">Action</h4>
            <h4 className="mt-10">Comedy</h4>
        </div> </Fade>}

    </div>
  )
}

export default Navbar