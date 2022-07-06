import { ProductCard, Filter } from "../../components/index";
import "./Home.css";
import { useEffect } from "react";
import { filterByCategory } from "../../utils/helper";
import { getAllProducts } from "../../redux/productSlice";
import { useSelector, useDispatch } from "react-redux";
export const Home = () => {
    let { productList, filters, status } = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(() => {
        if (status === "idle") {
            dispatch(getAllProducts());
        }
    }, []);
    productList = filterByCategory(productList, filters);
    return (
        <main>
            <Filter />
            <section className="productlist">
                {productList.length > 0 ?
                    productList.map((item) => (
                        <ProductCard key={item.id} product={item} />
                    )) :
                    <h1>Loading...</h1>}

            </section>
        </main>
    )
}