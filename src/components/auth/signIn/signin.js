import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { REGEX_CONSTANTS } from '../../../common/constants/regexConstants';
import { Input } from '../../../common/FormElements/formElements';
export function SignIn(props) {
    const {register,errors,handleSubmit}=useForm();
    
    return (
        <div id="login">
            <h1 className="cred-title">Welcome Back!</h1>

            <form onSubmit={handleSubmit(props.login)}>

                <div className="field-wrap">
                    <label className="label-login">
                        Email/Phone<span className="req">*</span>
                    </label>
                    <Input  
                        register={register({required:{value:true,message:'This field is required'},pattern:{value:REGEX_CONSTANTS.EMAIL_OR_PHONE,message:'Invalid email/phone.'}})} 
                        error={errors.email} 
                        name="email" 
                        className="input-cred" 
                        autoComplete="off" 
                    />
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Password<span className="req">*</span>
                    </label>
                    <Input  register={register({required:{value:true,message:'This field is required'}})} error={errors.password} className="input-cred" type="password" name="password" autoComplete="off" />
                </div>

                <button className="button button-block" type="submit" style={{ fontSize: '18px', borderRadius: '8px' }}>{props.signInTrigerred?<>Logging In <i className="fa fa-circle-o-notch fa-spin"></i></>:'Log In'}</button>

            </form>
            <Link to="forgot_pwd"><p className="text-center mt-2 f-pass">Forgot Password?</p></Link>
        </div>

    )
}