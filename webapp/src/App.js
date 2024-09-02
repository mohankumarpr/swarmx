import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/home";
import './App.css';

function App() {
  return (
    <Router>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
