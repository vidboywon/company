import "./App.css";
import Navbar  from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="p-10"></div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
