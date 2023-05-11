// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
// import EditAlbum from "./Pages/EditSnack";
// // import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import NewSnack from "./Pages/NewSnack";
import SnackById from "./Pages/SnackById";

// COMPONENTS
import NavBar from "./Components/NavBar";


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
            
            <Route exact path="/snacks/:snackId" element={<SnackById/>} />
            {/* 
            
            <Route path="/albums/:albumId/edit" element={<EditAlbum />} />
            <Route path="*" element={<FourOFour />} /> */}
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;