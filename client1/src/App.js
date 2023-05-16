import React from 'react'

import Login from './pages/login'
import Signup from './pages/signup'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import Stage1 from "./pages/Stage1"
import Stage1and2 from "./pages/Stage1and2"
import Stage2 from "./pages/Stage2"
import Stage3 from "./pages/Stage3"
import Stage4 from "./pages/Stage4"
import Stage5 from "./Stage5"
import Deadend1 from "./pages/Deadend1"
import Deadend2 from "./pages/Deadend2"
import Completion from "./pages/Completion"
import Leaderboard from "./pages/Leaderboard"
import RequireAuth from './RequireAuth'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/home" element={<RequireAuth><Home/></RequireAuth>}></Route>
        <Route path="/Stage1" element={<RequireAuth><Stage1/></RequireAuth>}></Route>
        <Route path="/Stage1and2" element={<RequireAuth><Stage1and2/></RequireAuth>}></Route>
        <Route path="/Stage2" element={<RequireAuth><Stage2/></RequireAuth>}></Route>
        <Route path="/Stage3" element={<RequireAuth><Stage3/></RequireAuth>}></Route>
        <Route path="/Deadend1" element={<RequireAuth><Deadend1/></RequireAuth>}></Route>
        <Route path="/Deadend2" element={<RequireAuth><Deadend2/></RequireAuth>}></Route>
        <Route path="/Stage4" element={<RequireAuth><Stage4/></RequireAuth>}></Route>
        <Route path="/Stage5" element={<RequireAuth><Stage5/></RequireAuth>}></Route>
        <Route path="/Leaderbaord" element={<RequireAuth><Leaderboard/></RequireAuth>}></Route>
        <Route path="/Completion" element={<RequireAuth><Completion/></RequireAuth>}></Route>
      </Routes>
    </BrowserRouter>
    
  )
}

export default App
