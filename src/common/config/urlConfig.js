export const BASE_URL="http://65.0.81.175:8000/";
export const API_URL=`${BASE_URL}api/v1.0/`;
export const APIS={
    LOGIN:`${API_URL}app/customer/signin`,
    SIGN_UP:`${API_URL}app/customer/signup`,
    ME:`${API_URL}app/customer/details/`,
    UPDATE_USER_INFO:`${API_URL}app/customer/updateprofile/`,
    UPDATE_USER_PASWORD:`${API_URL}app/customer/updatepassword/`,
    FORGOT_PASSWORD:`${API_URL}app/customer/forgotpassword`,
    RESET_PASSWORD:`${API_URL}app/customer/resetpassword/`,
    GET_CATAGORIES:`${API_URL}catagory/getcatagory`,
    GET_PRODUCTS:`${API_URL}products/getproducts`,
    GET_FILTERED_PRODUCTS:`${API_URL}products/filterproduct`,
    GET_PRODUCT_BY_PRODUCT_ID:`${API_URL}products/getproductbyid/`
};
