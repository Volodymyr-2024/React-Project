import Categories from "../components/Categories/Categories";
import Promotions from "../components/Promotions/Promotions";
import Discount from "../components/Discount/Discount";
import HeaderCategory from "../components/HeaderCategory/HeaderCategory";
import Products from "../components/Products/Products";

function HomePage() {
  return (
    <div>
      <Promotions />
      <HeaderCategory
        nameCategory="Categories"
        allCategory="All categories"
        link="/categories"
        hr={true}
      />
      <Categories countCategories={4} />
      <Discount />
      <HeaderCategory
        nameCategory="Sale"
        allCategory="All sales"
        link="/allsales"
        hr={true}
      />
      <Products countSales={4} discount="yes" />
    </div>
  );
}

export default HomePage;
