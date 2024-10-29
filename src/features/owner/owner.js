import { useStore } from "react-redux"
import { useEffect, useState } from "react"

function Owner(params) {
    const store = useStore()
    const [owner, setOwner] = useState(store.getState().owner)
    useEffect(()=>store.subscribe(()=>setOwner(store.getState().owner)))
    function submit(e){
        e.preventDefault()
        const firstName = e.target.firstName.value
        store.dispatch({type : 'UPDATE_FIRSTNAME', payload : firstName})
        
    }
    return(
        <div>
        <form id="addForm" onSubmit={submit} action="#">
            <input type = "text" name="firstName"/>
            <button type = "submit">Enregistrer</button>
        </form>
        
            <div className="ownerName">{owner?.firstName?`Le prenom du propriétaire est ${owner.firstName}`:'Le propriétaire n’a pas été configuré'}</div>
        </div>
    )
}

export default Owner