
import { Navbar } from "./components/Navbar"
import { Link, Route, Routes } from "react-router-dom"
import { Home } from "./components/Home"
import { Courses } from "./components/Courses"
import { About } from "./components/About"
import { Conatct } from "./components/Conatct"
import { Itcours } from "./components/Itcours"
import { Footer } from "./components/Footer"
import { HighSchool } from "./components/HighSchool"
import { MathGrades } from "./components/MathGrades"
import PhysicGrades from "./components/PhysicGrades"
import { BiologyGrades } from "./components/BiologyGrades"
import { ChemGrades } from "./components/ChemGrades"



function App() {


  return (
    <div>
      <Navbar/>
     <Routes>
      
       <Route index element={<Home/>}></Route>
       <Route path="/courses" element={<Courses/>}></Route>
       <Route path="/about" element={<About/>}></Route>
       <Route path="/contact" element={<Conatct/>}></Route>
       <Route path="/itcourse" element={<Itcours/>}></Route>
       <Route path="/footer" element={<Footer/>}></Route>
       <Route path="/highschool" element={<HighSchool/>}></Route>
       <Route path="/mathsgrades" element={<MathGrades/>}></Route>
       <Route path="/physicsgrades" element={<PhysicGrades/>}></Route>
       <Route path="/biologygrades" element={<BiologyGrades/>}></Route>
       <Route path="/cheistrygrades" element={<ChemGrades/>}></Route>
     
     </Routes>
     <div className="bottom-0 mt-80">
      <Footer/>
     </div>
    </div>
  )
}

export default App
