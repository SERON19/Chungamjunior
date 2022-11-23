import { Routes,Route } from "react-router-dom";
import About from "./Components/About";
import Advocates from "./Components/Advocates";
import Blog from "./Components/Blog";
import Guardian from "./Components/Guardian";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Portal from "./Components/Portal";
import Services from "./Components/Services";
import Footer from "./Components/Footer";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Lawyers from "./Components/Lawyers";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="portal/advocates" element={<Advocates />} />
      <Route path="blog" element={<Blog />} />
      <Route path="portal/guardian" element={<Guardian />} />
      <Route path="portal" element={<Portal />} />
      <Route path="services" element={<Services />} />
      <Route path="/blog" element={<Blog/>} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="hire" element={<Lawyers />} />e

     </Routes>
     <Footer/>

     </>
     
    
  );
}

export default App;
