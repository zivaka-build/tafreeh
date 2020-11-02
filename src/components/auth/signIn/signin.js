import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../common/FormElements/formElements';
export function SignIn() {
    const {register,errors,handleSubmit}=useForm();
    return (
        <div id="login">
            <h1 className="cred-title">Welcome Back!</h1>

            <form onSubmit={handleSubmit((values)=>{console.log(values)})}>

                <div className="field-wrap">
                    <label className="label-login">
                        Email Address<span className="req">*</span>
                    </label>
                    <Input  register={register({required:{value:true,message:'This field is required'}})} error={errors.email} name="email" className="input-cred" autoComplete="off" />
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Password<span className="req">*</span>
                    </label>
                    <Input  register={register({required:{value:true,message:'This field is required'}})} error={errors.password} className="input-cred" type="password" name="password" autoComplete="off" />
                </div>

                <button className="button button-block" style={{ fontSize: '18px', borderRadius: '8px' }}>Log In</button>

            </form>

        </div>

    )
}