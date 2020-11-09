import React, { useEffect } from 'react';
import "../login-register.css";
import {connect} from 'react-redux';
import {useForm} from 'react-hook-form';
import { Input } from '../../../common/FormElements/formElements';
import { Link } from 'react-router-dom';
import { SAGA_ACTIONS } from '../../../common/config/actions';

function ResetPassword(props) {
    useEffect(()=>{
        window.$('.form').find('.input-cred').on('keyup blur focus', function (e) {

            var $this = window.$(this),
                label = $this.prev('.label-login');
          
              if (e.type === 'keyup') {
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                  } else {
                    label.addClass('active highlight');
                  }
              } else if (e.type === 'blur') {
                if( $this.val() === '' ) {
                  label.removeClass('active highlight'); 
                } else {
                  label.removeClass('highlight');   
                }   
              } else if (e.type === 'focus') {
                
                if( $this.val() === '' ) {
                  label.removeClass('highlight'); 
                } 
                else if( $this.val() !== '' ) {
                  label.addClass('highlight');
                }
              }
          
          });
    })
    const sendLink=(values)=>{
      props.dispatch({
        type:SAGA_ACTIONS.FORGOT_PASSWORD,
        payload:values
      })
    }
    const {register,errors,handleSubmit}=useForm();
    return (
        <main className="main-className">
            <div className="form">
                <div id="login">
                    <h1 className="cred-title">Reset Your Password</h1>

                    <form onSubmit={handleSubmit(sendLink)}>
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
                            />
                        </div>
                        <div className="field-wrap">
                            <label className="label-login">
                                Password<span className="req">*</span>
                            </label>
                            <Input
                                register={register({ required: { value: true, message: 'This field is required' } })}
                                error={errors.confirm_password}
                                name="confirm_password"
                                className="input-cred"
                                autoComplete="off"
                            />
                        </div>
                        <button className="button button-block" type="submit" style={{ fontSize: '18px', borderRadius: '8px' }}>{props.signInTrigerred ? <>Sending... <i className="fa fa-circle-o-notch fa-spin"></i></> : 'Send resent link'}</button>

                    </form>
                </div>
                <Link to="login-register"><p className="text-center mt-2 f-pass">Back to signin/signup.</p></Link>
            </div>
        </main>
    )
}
const mapStateToProps=state=>{
  return{...state}
}
export default connect(mapStateToProps)(ResetPassword);