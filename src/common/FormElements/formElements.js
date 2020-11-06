import React from 'react'
export const Input =  ({ register,error, ...rest }) => {
  return(
    <>
      <input
        ref={register}
        {...rest}
      />
    {error && <span style={form_error}>{error.message}</span>}
    </>
  )
}

const form_error={
  color:'red'
} 
  