import { useStore } from "react-redux";
import { SuperCremeux, PouletCroquant } from "../../common/models";
import { useEffect, useState } from "react";


function Cart(){
   const store = useStore();

   const [list, setList] = useState(store.getState().list);

    useEffect(() => {
        store.subscribe(() => { setList(store.getState().list) })
        let total = list.reduce((acc, val)=> acc + val.price, 0)
        list.length !== 0?document.getElementById('total').textContent= `Total de la commande = ${total}`: 
        document.getElementById('total').textContent= `Aucun produit sélectionné`
    }, [store, list])

   return <div className="Selection">
        <h1>Choisir son menu</h1>
        <div className="CartNavBar">
            <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: SuperCremeux})}>Ajouter un super crémeux</button>
            <button onClick={() => store.dispatch({type: 'ADD_PRODUCT', payload: PouletCroquant})}>Ajouter un poulet croquant</button>
        </div>
        {
            list.map(
                (item, index) => <span key={index} className="SelectedProduct">{item.title} {item.price} €</span>
            )
        }
        <span id="total"></span>
        </div>
};

export default Cart