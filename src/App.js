import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ShopCategory from './Components/Pages/ShopCategory';
import Cart from './Components/Pages/Cart';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Shop />} /> */}
          <Route path="/" element={<ShopCategory  />} />
          {/* <Route path="/Women" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/Kids" element={<ShopCategory banner={kids_banner}  category="kid" />} /> */}
          {/* <Route path="/Product" element={<Product />}>
            <Route path=':ProductId' element={<Product/>}/>
          </Route> */}
          <Route path="/Cart" element={<Cart />} />
          {/* <Route path="/Login" element={<Login />} /> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;