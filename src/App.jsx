import Login from "./auth/Login"
import Crousel from "./custom/Crousel"
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./custom/Nav"
import Userpage from "./pages/Userpage";
import Cardpage from "./pages/Cardpage";



function App() {


  return (
 <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>} />
        

        <Route path="/userpage" element={<Userpage/>} />
        <Route path="/cardpage" element={<Cardpage/>} />
        {/* <Route path="/cart" element={<h1>🛒 Cart Page</h1>} />
        <Route path="/balls" element={<h1>🏏 Balls Section</h1>} />
        <Route path="/cricket-kits" element={<h1>🏏 Cricket Kits</h1>} />
        <Route path="/cricket-bats" element={<h1>🏏 Cricket Bats</h1>} /> */}
      </Routes>
    </>
  )
}

export default App
