import { useLocation } from "react-router-dom";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Categories from "../components/Categories/Categories";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import "../index.css";

function CategoriesPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);

  return (
    <div className="categories_container">
      <BreadCrumbs name={currentPath[0]} />
      <HeaderCategory nameCategory="Categories" />
      <Categories />
    </div>
  );
}

export default CategoriesPage;
