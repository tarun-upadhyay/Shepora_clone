export const reducer = (state, action)=>{
    switch(action.type){
        case "GET_PRODUCTS_REQUEST":
            return{
                ...state,
                data: action.payload,
            }
           default:
            return state 
    }

}