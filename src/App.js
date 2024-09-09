// import { useState } from "react";
// function App(){
//   let [name,setName]= useState("Krishnendu")
//   return(
//     <>
//     <h1>Hello GGI {name}</h1>
//     <button onClick={()=>{
//       setName("Krishnendu Ghosh");
//     }}>Click Me</button>

//     <h2> Hello</h2>
   
//     <h3>Hello bro</h3>
//     </>
//   )
// }

// export default App;

import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter,Routes,Route,NavLink} from "react-router-dom";
import Add from "./pages/Add";
function App() {

  return(

    <>
    <BrowserRouter>
    

<Routes>
  <Route path="/" element={<Home/>} />
  <Route path="/about" element={<About/>} />
  <Route path="/add" element={<Add/>}/>
</Routes>
    </BrowserRouter>
    </>
  )
}

export default App;