export const reducer = (state, action)=>{
    switch(action.type){
        case "GET_PRODUCTS_REQUEST":
            return{
                ...state,
                data: action.payload,
            }
            case "PRODUCT_ASC":
                return{
                    ...state,
                    data : action.payload,
                }

                case "Single_data":
                    return{
                        ...state,
                        singlepagedata: action.payload,
                    }
           default:
            return state 
    }

}