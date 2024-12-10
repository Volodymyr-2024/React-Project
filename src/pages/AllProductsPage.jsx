import Products from "../components/Products/Products";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Sorter from "../components/Sorter/Sorter";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import { useLocation } from "react-router-dom";

function AllProductsPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);

  return (
    <div>
      <BreadCrumbs name={currentPath[0]} />
      <HeaderCategory nameCategory="All products" />
      <Sorter />
      <Products />
    </div>
  );
}

export default AllProductsPage;
