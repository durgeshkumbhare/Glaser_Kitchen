import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";

const HomeLayout = () => {
  return (
    <div className="bg-gray-200">
      <Navbar />
      <Sidebar />
      <Hero />
      <FeaturedProducts />
      <Footer />
    </div>
  );
};

export default HomeLayout;
