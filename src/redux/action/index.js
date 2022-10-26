//  Add to cart
export const AddCart = (product) => {
    return {
        type: "ADDITEM",
        payload: product
    }
}

// Delete From Crat
export const delCrat = (product) => {
    return {
        type: "DELITEM",
        payload: product
    }
}