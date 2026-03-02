import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Home from "./Pages/Home/Home.jsx";
import CategoryPage from "./Pages/CategoryPage/CategoryPage.jsx";
import SingleProduct from "./Pages/SingleProduct/singleproduct.jsx";
import CustomSection from "./Pages/Customcooling/Customcooling.jsx";
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
      </Routes>
      <Footer />
    </div>
  );
}
 

export default App
