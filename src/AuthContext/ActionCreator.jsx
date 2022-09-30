export const getProductRequest = (payload)=>{
    return { type: "GET_PRODUCTS_REQUEST", payload}
}
export const productsAsc = (payload)=>{
    return { type: "PRODUCT_ASC", payload}
}
export const singlePagedata = (payload)=>{
    return {type: "Single_data", payload}
}