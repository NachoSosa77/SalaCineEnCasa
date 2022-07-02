import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MovieListContainer from "./components/MovieListContainer/MovieListContainer";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<MovieListContainer/>} />  
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
