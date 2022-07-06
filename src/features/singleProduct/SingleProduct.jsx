import "./SingleProduct.css";
import { useParams } from "react-router-dom";
import { useSelector} from "react-redux";
export const SingleProduct=()=>{
    const { id } = useParams();
    const {productList} = useSelector((state) => state.product);
    const singleProduct=productList?.find((product) => product.id == id);
    return(
        <div className="single-product">
            <div className="product-half">
                <img className="img-responsive" src={singleProduct.image}>
               </img>
            </div>
           <div className="product-half">
           <h3>{singleProduct.title}</h3>
           <p>{singleProduct.description}</p>
           <strong>Rs.{singleProduct.price}</strong>
           </div>
         
            </div>
           
    )
}