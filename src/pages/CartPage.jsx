import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";

function CartPage(props) {
  return (
    <div>
      <HeaderCategory
        nameCategory="Shopping cart"
        allCategory="Back to the store"
        link="/allproducts"
        hr={true}
      />
      <ShoppingCart />
    </div>
  );
}

export default CartPage;
