// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
// import EditAlbum from "./Pages/EditSnack";
// // import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewSnack from "./Pages/NewSnack";
import SnackById from "./Pages/SnackById";
import SnackEdit from "./Pages/SnackEdit";

// COMPONENTS
import NavBar from "./Components/NavBar";
<<<<<<< HEAD
// import About from "./Components/About";
=======
//import About from "./Components/About";
>>>>>>> cf581ccfea1e243a13deb94b10516ac51e53d049


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/snacks" element={<Index />} />
            <Route path="/snacks/new" element={<NewSnack />} />
            <Route path="/snacks/:snackId/edit" element={<SnackEdit />} />
            <Route exact path="/snacks/:snackId" element={<SnackById />} />
            {/* <Route path="/" element ={ <About / >} */}
            {/* 
            
            
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;