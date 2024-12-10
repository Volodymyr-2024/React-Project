import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";
import Categories from "../components/Categories/Categories";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import "../index.css";

function CategoriesPage() {
  return (
    <div className="categories_container">
      <BreadCrumbs name={"categories"} />
      <HeaderCategory nameCategory="Categories" />
      <Categories />
    </div>
  );
}

export default CategoriesPage;
