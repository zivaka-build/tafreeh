import React from 'react';
import "../login-register.css";
import { useForm } from 'react-hook-form';
import { Input } from '../../../common/FormElements/formElements';
import { Link } from 'react-router-dom';

export default function ResetPasswordForm(props) {
    

    const { register, errors, getValues, handleSubmit } = useForm();
    return (
        <main className="main-className">
            <div className="form">
                <div id="login">
                    <h1 className="cred-title">Reset Your Password</h1>

                    <form onSubmit={handleSubmit(props.reset)}>
                        <div className="field-wrap">
                            <label className="label-login">
                                Password<span className="req">*</span>
                            </label>
                            <Input
                                register={register({ required: { value: true, message: 'This field is required' } })}
                                error={errors.password}
                                name="password"
                                className="input-cred"
                                autoComplete="off"
                                type="password"
                                error_class="field-error"
                            />
                        </div>
                        <div className="field-wrap">
                            <label className="label-login">
                                Confirm Password<span className="req">*</span>
                            </label>
                            <Input
                                register={register({
                                    required: { value: true, message: 'This field is required' }
                                    ,
                                    validate: { equalPwd: value => (value !== getValues('password')) ? 'Password doesnot match':undefined }
                                })}
                                error_class="field-error"
                                error={errors.confirm_password}
                                name="confirm_password"
                                className="input-cred"
                                autoComplete="off"
                                type="password"
                                error_class="field-error"
                            />
                        </div>
                        <button className="button button-block" type="submit" style={{ fontSize: '18px', borderRadius: '8px' }}>{props.signInTrigerred ? <>Submitting... <i className="fa fa-circle-o-notch fa-spin"></i></> : 'Reset Password'}</button>

                    </form>
                </div>
                <Link to="login-register"><p className="text-center mt-2 f-pass">Back to signin/signup.</p></Link>
            </div>
        </main>
    )
}

