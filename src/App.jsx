import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Cart from "./pages/cart";
import DetailProduct from "./pages/detailProduct";
import Home from "./pages/home";
import Login from "./pages/login";
import PageNotFound from "./pages/PageNotFound";
import Register  from "./pages/register"

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<DetailProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
