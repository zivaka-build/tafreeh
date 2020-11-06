export const REGEX_CONSTANTS={
    EMAIL_REGEX:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
    MOBILE_REGEX:"^/[789]\d{9}$/",
    EMAIL_OR_PHONE:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}|[789]\d{9}$/i,
    PASSWORD_REGEX:"/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|\]).{8,32}$/",
    ALPHABET_AND_SPACE:'/^[a-zA-Z][a-zA-Z\\s]+$/',
    INDIAN_PINCODE:/^[1-9][0-9]{5}$/
};