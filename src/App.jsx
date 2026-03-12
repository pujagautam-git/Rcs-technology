import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";
import KeyboardProduct from "./Pages/keyboardProduct/keyboardproduct.jsx";
import CustomSection from "./Pages/Customcooling/Customcooling.jsx";
import KeyboardHero from "./Pages/Keyboard/Keyboard.jsx";
import HeadsetHero from "./Pages/Headsets/Headset.jsx";
import MiceHero from "./Pages/Mice/Mice.jsx";
import MousePadHero from "./Pages/MousePad/MousePad.jsx";
import MonitorArmHero from "./Pages/MonitorArm/MonitorArm.jsx";
import GamingChairs from "./Pages/GamingChair/GamingChair";
import GamingDesks from "./Pages/GamingDesks/GamingDesks.jsx";
import GamingFurniture from "./Pages/GamingFurniture/GamingFurniture.jsx";
import Contact from "./Pages/ContactUs/Contactus.jsx";
import './App.css'


const App =() => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<KeyboardProduct />} />
        <Route path="/custom-cooling" element={<CustomSection />} />
     <Route path="/keyboards" element={<KeyboardHero />} />
     <Route path="/headsets" element={<HeadsetHero />} />
      <Route path="/mice" element={<MiceHero />} />
      <Route path="/mousepads" element={<MousePadHero />} />
      <Route path="/monitor-arms" element={<MonitorArmHero />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/gaming-chairs" element={<GamingChairs />} />
      <Route path="/gaming-desks" element={<GamingDesks />} />
      <Route path="/gaming-furniture" element={<GamingFurniture />} />
      </Routes>
      <Footer />
    </div>
  );
}
 

export default App
