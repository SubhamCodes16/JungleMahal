import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import AboutJungleMahal from "./pages/AboutJungleMahal";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/about" element={<AboutJungleMahal/>}/>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
