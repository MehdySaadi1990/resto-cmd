import { useSelector} from "react-redux";
import { getListQtyProductPerName } from "../../App/app/selectors";

function Cart(){
   const list = useSelector(getListQtyProductPerName)
   return <div className="Selection">
        {
            list.filter(
                product => product.quantity !== 0
            ).map(
                (product, index) => <span key={index} className="SelectedProduct">{product.title} {product.price} € x {product.quantity}</span>
            )
        }
        </div>
};

export default Cart