const { ACTIONS } = require("../../common/config/actions");

const initialState={
    token:null,
};
const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.LOGIN:
            return{
                ...state,
                token:action.payload
            };
        default:
            return{ ...state};
    }
}
export default userReducer;