import Products from "../components/Products/Products";
import { useLocation, useParams } from "react-router-dom";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import { useSelector } from "react-redux";
import Sorter from "../components/Sorter/Sorter";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

function CategoriesIdPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);
  const { categoryId } = useParams();
  const categories = useSelector((state) => state.categories.categories);
  const category = categories.find(
    (category) => category.id === Number(categoryId)
  );
  if (!category) {
    return <p style={{ marginLeft: "40px", fontSize: "24px" }}>Loading...</p>;
  }

  return (
    <div>
      <BreadCrumbs name={currentPath[0]} id={Number(categoryId)} />
      <HeaderCategory nameCategory={category.title} />
      <Sorter />
      <Products categoryId={Number(categoryId)} />
    </div>
  );
}

export default CategoriesIdPage;
