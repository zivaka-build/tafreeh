import { ACTIONS } from "../../common/config/actions";

const initialState={
    header_visible:true,
};
const layoutReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.LAYOUT.SHOW_HEADER:
            return{
                ...state,
                header_visible:true,
            };
        case ACTIONS.LAYOUT.HIDE_HEADER:
            return{
                ...state,
                header_visible:false,
            };
        
        default:
            return{ ...state};
    }
}
export default layoutReducer;