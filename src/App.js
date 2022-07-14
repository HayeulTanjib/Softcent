import Customer from "./Components/Customers/Customer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
import Product from "./Components/Product/Product";
import Services from "./Components/Services/Services";

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Customer/>
      <Services/>
      <Product/>
    </div>
  );
}

export default App;
