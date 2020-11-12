import React from 'react'
export const Input =  ({ register,error,error_class, ...rest }) => {
  return(
    <>
      <input
        ref={register}
        {...rest}
      />
    {error && <span style={form_error} className={error_class}>{error.message}</span>}
    </>
  )
}

const form_error={
  color:'red'
} 
  