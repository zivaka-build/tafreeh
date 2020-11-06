import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import loaderReducer from './loader.reducer';
const rootReducer=combineReducers(
    {
        loader:loaderReducer,
        toastr: toastrReducer,
        user:userReducer,
        cart:cartReducer
    }
);
export default rootReducer;