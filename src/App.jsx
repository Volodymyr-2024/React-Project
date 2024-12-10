import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage";
import AllProductsPage from "./pages/AllProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
import Loader from "./components/Loader";
import AllSalesPage from "./pages/AllSalesPage";
import ProductPage from "./pages/ProductPage";
import CategoriesIdPage from "./pages/CategoriesIdPage";
import NotFoundPage from "./pages/NotFoundPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <div>
      <Loader />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/categories" element={<CategoriesPage />}></Route>
          <Route path="/allproducts" element={<AllProductsPage />}></Route>
          <Route path="/allsales" element={<AllSalesPage />}></Route>
          <Route path="/products/:id" element={<ProductPage />}></Route>
          <Route
            path="/categories/:categoryId"
            element={<CategoriesIdPage />}
          ></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
