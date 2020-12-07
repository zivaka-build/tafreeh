import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';
import loaderReducer from './loader.reducer';
import layoutReducer from './layout.reducer';
import productReducer from './product.reducer';
const rootReducer=combineReducers(
    {
        layout:layoutReducer,
        loader:loaderReducer,
        toastr: toastrReducer,
        user:userReducer,
        cart:cartReducer,
        products:productReducer,
    }
);
export default rootReducer;