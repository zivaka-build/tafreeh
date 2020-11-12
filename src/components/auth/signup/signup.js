import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { REGEX_CONSTANTS } from '../../../common/constants/regexConstants';
import { Input } from '../../../common/FormElements/formElements';
export default function Signup(props) {
    const { register, errors, handleSubmit } = useForm();

    return (
        <div id="signup">
            <h1 className="cred-title">Sign Up for Free</h1>

            <form onSubmit={handleSubmit(props.signup)}>

                <div className="top-row">
                    <div className="field-wrap">
                        <label className="label-login">
                            First Name<span className="req">*</span>
                        </label>
                        <Input error_class="field-error" register={register({ required: { value: true, message: 'This field is required' } })} error={errors.firstname} className="input-cred" type="text" autoComplete="off" name="firstname" />
                    </div>

                    <div className="field-wrap">
                        <label className="label-login">
                            Last Name<span className="req">*</span>
                        </label>
                        <Input error_class="field-error" register={register({ required: { value: true, message: 'This field is required' } })} error={errors.lastname} name="lastname" className="input-cred" type="text" autoComplete="off" />
                    </div>
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Email/ Phone<span className="req">*</span>
                    </label>
                    <Input
                        register={register({ required: { value: true, message: 'This field is required' }, pattern: { value: REGEX_CONSTANTS.EMAIL_OR_PHONE, message: 'Invalid email/phone provided.' } })}
                        error={errors.email}
                        name="email"
                        className="input-cred"
                        type="text"
                        error_class="field-error"
                        autoComplete="off" />
                </div>

                <div className="field-wrap">
                    <label className="label-login">
                        Set A Password<span className="req">*</span>
                    </label>
                    <Input
                        register={register({ required: { value: true, message: 'This field is required' } })}
                        error={errors.password}
                        name="password"
                        className="input-cred"
                        type="password"
                        autoComplete="off"
                        passToggle
                        error_class="field-error" />
                </div>

                <button type="submit" className="button button-block" style={{ fontSize: '18px', borderRadius: '8px' }}>{props.signUPTrigerred ? <>Signing up <i className="fa fa-circle-o-notch fa-spin"></i></> : 'Get Started'}</button>

            </form>
            <Link to="/"><p class="text-center mt-2 f-pass">Back to Home</p></Link>
        </div>

    )
}