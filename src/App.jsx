
import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import WantToRead from "./components/WantToRead";
import CurrentlyReading from "./components/CurrentlyReading";
import FinishedReading from "./components/FinishedReading";
import AddBooks from "./components/AddBooks";
import Layout from "./Layout";
import Home from "./Home";

function App() {
  return (
    <div className="main">

      <Routes>
      <Route path="/" element={<Layout/>}>
        {/* Nested routes */}
        <Route path="/" index element={<Home/>} />
        <Route path="wanttoread" element={<WantToRead />} />
        <Route path="currentlyreading" element={<CurrentlyReading />} />
        <Route path="finishedreading" element={<FinishedReading />} />
        <Route path="addbooks" element={<AddBooks/>} />
      </Route>
    </Routes>
    </div>
  );
}

export default App;


