import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Cart from "./pages/cart/Cart";
import ContactUS from "./pages/contactUs/ContactUs";
import Login from "./pages/auth/Login";
import OrderHistory from "./pages/orderHistory/OrderHistory";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Register from "./pages/auth/Register";
import Reset from "./pages/auth/Reset";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SmartPhone from "./pages/smartPhone/SmartPhone";
import ProductDetails from "./pages/smartPhone/productDetails/ProductDetails";

function App() {
  return (
    <div className="App">
      <>
        <BrowserRouter>
          <ToastContainer />
          <Header />
          <div className="margin">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="admin" element={<Admin />} />
              <Route path="cart" element={<Cart />} />
              <Route path="contact" element={<ContactUS />} />
              <Route path="login" element={<Login />} />
              <Route path="Orderhistory" element={<OrderHistory />} />
              <Route path="register" element={<Register />} />
              <Route path="reset" element={<Reset />} />
              <Route path="smartPhone" element={<SmartPhone />} />
              <Route
                path="smartPhone/:productId"
                element={<ProductDetails />}
              />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </>
    </div>
  );
}

export default App;
