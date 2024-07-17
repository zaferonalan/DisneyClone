import { Route, Routes } from "react-router-dom";
import Main from "./components/Main";
import Signin from "./components/Signin";


function App() {

  return (
    <div>
      <Routes>
        <Route path="/sigin" element={<Signin/>}/>
        <Route path="/" element={<Main/>}/>
      </Routes>
    </div>
  )
}

export default App
