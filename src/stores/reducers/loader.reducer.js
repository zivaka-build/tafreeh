import { ACTIONS } from "../../common/config/actions";

const initialState={
    backdropVisible:false,
};
const loaderReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.LOADER.BACKDROP_VISIBLE:
            return{
                ...state,
                backdropVisible:true,
            };
        case ACTIONS.LOADER.HIDE_BACKDROP:
            return{
                ...state,
                backdropVisible:false,
            };
        
        default:
            return{ ...state};
    }
}
export default loaderReducer;