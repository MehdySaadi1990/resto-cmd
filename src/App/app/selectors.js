import * as ProductList from "../../common/models"

export const getProductList = (state) => state&&state.list

export const getTotalOrder = (state) => getProductList(state).reduce((prv, cur) => cur.price + prv, 0)

export const isVoucherAvailable = (state) => getProductList(state).find((product) => product.title === "Super Crémeux")

export const getQtyProductPerName = (name) => (state) => getProductList(state).filter(product=>product.title === name).length

export const getListQtyProductPerName = (state) => Object.values(ProductList).map(
    product => ({
        title : product.title,
        price : product.price,
        quantity : getQtyProductPerName(product.title)(state)
    })
)