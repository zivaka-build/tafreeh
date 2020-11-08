export const BASE_URL="http://13.233.247.206:8000/";
export const API_URL=`${BASE_URL}api/v1.0/app/`;
export const APIS={
    LOGIN:`${API_URL}customer/signin`,
    SIGN_UP:`${API_URL}customer/signup`,
    ME:`${API_URL}customer/details/`,
    UPDATE_USER_INFO:`${API_URL}customer/updateprofile/`,
    UPDATE_USER_PASWORD:`${API_URL}customer/updatepassword/`,
    FORGOT_PASSWORD:`${API_URL}customer/forgotpassword/`,
    RESET_PASSWORD:`${API_URL}/customer/resetpassword/`
};
