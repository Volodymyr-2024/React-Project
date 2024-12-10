import { useEffect } from "react";
import { fetchCategories } from "../redux/categoriesSlice";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../redux/productsSlice";
import { useLocation } from "react-router-dom";

const Loader = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
    dispatch(fetchProducts());
  }, [dispatch]);

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div></div>;
};

export default Loader;
