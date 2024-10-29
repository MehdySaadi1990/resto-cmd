import { useDispatch } from 'react-redux'
import * as ProductList from '../../common/models'
import ProductCard from '../../component/productCard/productCard'

function Menu(params) {
    const dispatch = useDispatch()
   return(
    <div className="Menu">
        <h1>Choisir son menu</h1>
        {
            Object.values(ProductList).map(
                    product => <ProductCard key={product.name} product={product} onSelect={()=>{dispatch({type:'ADD_PRODUCT', payload : product })}}/>
                )
            
        }

    </div>
   ) 
}

export default Menu