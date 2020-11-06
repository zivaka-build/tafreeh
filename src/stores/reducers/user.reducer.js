import { ACTIONS } from "../../common/config/actions";

const initialState={
    user:null,isAuthenticated:false,
};
const processUpdatedUserData=payload=>{
    let data=payload.data;
    return{
        _id:data._id,
        firstname:data.firstname,
        lastname:data.lastname,
        email:data.email,
        address:data.address,
        city:data.city,
        state:data.state,
        landmark:data.landmark,
        pincode:data.pincode
    }
}
const userReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.LOGIN:
            return{
                ...state,
                isAuthenticated:true,
                user:null,
            };
        case ACTIONS.LOGOUT:
            return{
                ...state,
                isAuthenticated:false,
                user:action.payload,
            };
        case ACTIONS.GET_ME:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            };
        case ACTIONS.UPDATE_ME:
        return{
            ...state,
            user:processUpdatedUserData(action.payload)
        };
        default:
            return{ ...state};
    }
}
export default userReducer;