import { useLocation, useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

function ProductPage() {
  const location = useLocation();
  const currentPath = location.pathname.split("/").filter(Boolean);

  const { id } = useParams();
  return (
    <div>
      <BreadCrumbs name={currentPath[0]} id={Number(id)} />
      <ProductCard />
    </div>
  );
}

export default ProductPage;
