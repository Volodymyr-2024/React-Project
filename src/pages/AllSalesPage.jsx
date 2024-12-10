import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Products from "../components/Products/Products";
import Sorter from "../components/Sorter/Sorter";

function AllSalesPage() {
  return (
    <div>
      <BreadCrumbs name={"allsales"} />
      <HeaderCategory nameCategory="Discounted items" />
      <Sorter discountOff={"yes"} />
      <Products discount={"yes"} />
    </div>
  );
}

export default AllSalesPage;
