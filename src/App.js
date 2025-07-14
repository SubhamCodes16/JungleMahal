import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import AboutJungleMahal from "./pages/AboutJungleMahal";
import Review from "./pages/Review";
import ThingstoDo from "./pages/ThingstoDo";
import Donation from "./pages/Donation";
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/booking" element={<Booking/>}/>
      <Route path="/about" element={<AboutJungleMahal/>}/>
      <Route path="/review" element={<Review/>}/>
      <Route path="/thingstodo" element={<ThingstoDo/>}/>
      <Route path="/donation" element={<Donation/>}/>
    </Routes>
    </BrowserRouter></>
  );
}

export default App;
