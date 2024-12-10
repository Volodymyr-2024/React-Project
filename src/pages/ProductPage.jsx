import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard/ProductCard";
import BreadCrumbs from "../components/BreadCrumbs/BreadCrumbs";

function ProductPage() {
  const { id } = useParams();
  return (
    <div>
      <BreadCrumbs name={"products"} id={Number(id)} />
      <ProductCard />
    </div>
  );
}

export default ProductPage;
