import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Logout from "./Components/Logout";
import Execution from "./Section-2_5/Vid-52/Execution";
import Link2 from "./Components/Link";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/execution" element={<Execution />} />
          <Route path="/link" element={<Link2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
