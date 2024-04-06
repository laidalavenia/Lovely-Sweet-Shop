import "./App.scss";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomepageContent from "./pages/HomepageContent";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import ShoppingCart from "./pages/ShoppingCart";
import Checkout from "./pages/Checkout";
import SuccessOrder from "./pages/SuceessOrder";

function App() {
  return (
    <Routes>
      <Route path='/' element={<HomepageContent />} />
      <Route path='/catalog' element={<Catalog />} />
      <Route path='/product-detail' element={<ProductDetail />} />
      <Route path='/shopping-cart' element={<ShoppingCart />} />
      <Route path='/checkout' element={<Checkout />} />
      <Route path='/success-order' element={<SuccessOrder />} />
    </Routes>
  );
}

export default App;
