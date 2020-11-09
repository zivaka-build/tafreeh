const { ACTIONS } = require("../../common/config/actions");
// function for incrementing the quantity and calculating price
const increment=(items,id)=>{
    let arr=items;
    let index=arr.findIndex(item=>{return item.id===id});
    if(index !==-1){
        arr[index].quantity=parseInt(arr[index].quantity)+1;
        arr[index].total=parseFloat(items[index].price*items[index].quantity);
    }
    return arr;
}
// function for decrementing the quantity and calculatin
const decrement=(items,id)=>{
    let arr=items;
    let index=arr.findIndex(item=>{return item.id===id});
    if(index !==-1){
        if(arr[index].quantity>1){
            arr[index].quantity=parseInt(arr[index].quantity)-1;
            arr[index].total=parseFloat(items[index].price*items[index].quantity);
        }   
    }
    return arr;
}
// function for deleting single cart item
const deleteCartItem=(items,id)=>{
    let arr=items;
    let index=arr.findIndex(item=>{return item.id===id});
    if(index !==-1){
        arr.splice(index,1); 
    }
    return arr;
}
const initialState={
    cartItems:null,
};
const cartReducer=(state=initialState,action)=>{
    switch(action.type)
    {
        case ACTIONS.GET_CART_ITEMS:
            return{
                ...state,
                cartItems:action.payload
            };
        case ACTIONS.INCREMENT_CART_QUANTITY:
            let updatedIncrementCart=increment(state.cartItems,action.payload);
            return{
                ...state,
                cartItems:updatedIncrementCart
            };
        case ACTIONS.DECREMENT_CART_QUANTITY:
            let updatedDecrementCart=decrement(state.cartItems,action.payload);
            return{
                ...state,
                cartItems:updatedDecrementCart
            };
        case ACTIONS.DELETE_SINGLE_CART_ITEM:
            
            return{
                ...state,
                cartItems:deleteCartItem(state.cartItems,action.payload)
            };
        default:
            return{ ...state};
    }
}
export default cartReducer;