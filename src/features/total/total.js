import { useSelector } from "react-redux";
import { getProductList, getTotalOrder } from "../../App/app/selectors";

function Total() {
    const list = useSelector(getProductList)
    const total = useSelector(getTotalOrder)

    return(
        <div className="TotalCommand">
            {list.length === 0 ? <div>Aucun produit sélectionné</div> : <div>Total commande {total} euros</div>}
        </div>
    )
    
}

export default Total