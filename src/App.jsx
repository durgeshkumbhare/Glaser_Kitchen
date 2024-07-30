import { Routes, Route } from "react-router-dom";
import HomeLayout from "./pages/HomeLayout";
import About from "./pages/About";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import Contact from "./pages/Contact";

function App() {
 
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeLayout />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:productId" element={<SingleProduct />} />
      </Routes>
    </div>
  );
}

export default App;
