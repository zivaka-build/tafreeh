import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '../../../common/FormElements/formElements';
export default function Signup() {
    const { register, errors, handleSubmit } = useForm();
    const submitData=value=>{
        console.log("recvd",value);
    }
    return (
        <div id="signup">
            <h1 className="cred-title">Sign Up for Free</h1>

            <form onSubmit={handleSubmit(submitData)}>

                <div className="top-row">
                    <div className="field-wrap">
                        <label className="label-login">
                            First Name<span className="req">*</span>
                        </label>
                        <Input register={register({required:{value:true,message:'This field is required'}})} error={errors.first_name} className="input-cred" type="text"  autoComplete="off" name="first_name" />
                    </div>

                    <div className="field-wrap">
                        <label className="label-login">
                            Last Name<span className="req">*</span>
                        </label>
                        <Input register={register({required:{value:true,message:'This field is required'}})} error={errors.last_name} name="last_name" className="input-cred" type="text"  autoComplete="off" />
                    </div>
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Email Address<span className="req">*</span>
                    </label>
                    <Input register={register({required:{value:true,message:'This field is required'}})} error={errors.email} name="email" className="input-cred" type="email"  autoComplete="off" />
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Set A Password<span className="req">*</span>
                    </label>
                    <Input register={register({required:{value:true,message:'This field is required'}})} error={errors.password} name="password" className="input-cred" type="password"  autoComplete="off" />
                </div>

                <button type="submit" className="button button-block" style={{ fontSize: '18px', borderRadius: '8px' }}>Get Started</button>

            </form>

        </div>

    )
}