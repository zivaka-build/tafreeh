import { ACTIONS } from "../../common/config/actions";

const initialState={
    products:false,
};
const productReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.GET_ALL_PRODUCTS:
            return{
                ...state,
                products:action.payload,
            };
        
        default:
            return{ ...state};
    }
}
export default productReducer;