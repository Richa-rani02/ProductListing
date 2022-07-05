import { Header, Footer, ProductCard } from "../../components/index";
import "./Home.css";
import { useEffect} from "react";
import {getAllProducts} from "../../redux/productSlice";
import { useSelector,useDispatch } from "react-redux";
export const Home = () => {
    const {productList,status} = useSelector((state) => state.product);
    const dispatch = useDispatch();
    useEffect(()=>{
        if(status==="idle"){
            dispatch(getAllProducts());
        }
    },[]);
    console.log(productList);
    return (
        <main>
            <section className="productlist">
                {productList.length>0 ?
                productList.map((item)=>(
                    <ProductCard key={item.id} product={item} />
                )):
                <h1>Loading...</h1>}
                
                {/* <ProductCard />
                <ProductCard />
                <ProductCard /> */}
            </section>
        </main>
    )
}