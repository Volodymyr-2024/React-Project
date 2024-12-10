import Products from "../components/Products/Products";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Sorter from "../components/Sorter/Sorter";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

function AllProductsPage() {
  return (
    <div>
      <BreadCrumbs name={"allproducts"} />
      <HeaderCategory nameCategory="All products" />
      <Sorter />
      <Products />
    </div>
  );
}

export default AllProductsPage;
