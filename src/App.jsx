import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import FAQ from "./Pages/FAQ/FAQ.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";
import SingleProduct from "./Pages/SingleProduct/singleproduct.jsx";
import CustomSection from "./Pages/Customcooling/Customcooling.jsx";
import KeyboardHero from "./Pages/Keyboard/Keyboard.jsx";
import Contact from "./Pages/ContactUs/Contactus.jsx";
import './App.css'


const App =() => {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element ={<Home />}/>
        <Route path="/category/:categorySlug" element={<CategoryPage />} />
        <Route path="/product/:id" element={<SingleProduct />} />
        <Route path="/custom-cooling" element={<CustomSection />} />
     <Route path="/keyboards" element={<KeyboardHero />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact-us" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}
 

export default App
