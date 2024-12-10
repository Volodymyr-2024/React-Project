import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Products from "../components/Products/Products";
import Sorter from "../components/Sorter/Sorter";

function AllSalesPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);

  return (
    <div>
      <BreadCrumbs name={currentPath[0]} />
      <HeaderCategory nameCategory="Discounted items" />
      <Sorter discountOff={"yes"} />
      <Products discount={"yes"} />
    </div>
  );
}

export default AllSalesPage;
