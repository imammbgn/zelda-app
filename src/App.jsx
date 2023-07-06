import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/utils/ScrollToTop";
import Cart from "./pages/cart";
import DetailProduct from "./pages/detailProduct";
import Home from "./pages/home";
import PageNotFound from "./pages/PageNotFound";
import SuccesPayment from "./pages/succesCheckOut";
import Contact from "./pages/contact";

const Login = lazy(() => import("./pages/login"));
const Register = lazy(() => import("./pages/register"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<h1>Please Wait..</h1>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<DetailProduct />} />
          <Route path="/succesPayment" element={<SuccesPayment />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
