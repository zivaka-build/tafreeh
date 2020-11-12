import React from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import { actions as toastrActions } from 'react-redux-toastr';
import { ACTIONS, SAGA_ACTIONS } from '../../../common/config/actions';
import ResetPasswordForm from './reset.pwd';
const qs = require('query-string');

class ResetPassword extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type:ACTIONS.LAYOUT.HIDE_HEADER
        });
        let t=qs.parse(this.props.history.location.search)
        if(!t.token){
            this.props.history.push("/login-register");
        }
        this.toastr = bindActionCreators(toastrActions, this.props.dispatch);        
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
                if ($this.val() === '') {
                    label.removeClass('active highlight');
                } else {
                    label.removeClass('highlight');
                }
            } else if (e.type === 'focus') {

                if ($this.val() === '') {
                    label.removeClass('highlight');
                }
                else if ($this.val() !== '') {
                    label.addClass('highlight');
                }
            }

        });
    }
    componentWillUnmount(){
        this.props.dispatch({
            type:ACTIONS.LAYOUT.SHOW_HEADER
        });
    }
    showToaster(type, title, message) {
        this.toastr.add({
            type,
            title,
            position: 'top-left',
            attention: true,
            onAttentionClick: id => { },
            message,
            options: { showCloseButton: true },
            showCloseButton: true,
        });
    }
    resetPassword=(values)=>{
        let t=qs.parse(this.props.history.location.search)
        return new Promise((resolve,reject)=>{
            this.props.dispatch({
                type:SAGA_ACTIONS.RESET_PASSWORD,
                payload:{
                    resetToken:t.token,
                    password:values.confirm_password
                },
                callbackSuccess:resp=>{
                    this.showToaster('success','Successful',resp.data.message);
                    this.props.history.push("/login-register");
                    resolve(resp);
                },
                callbackError:error=>{
                    this.showToaster('error','Error',error.data.message);
                    this.props.history.push("/forgot_pwd");
                    reject(error);
                }
            })
        })
    }
    render(){
        return(
            <ResetPasswordForm
                reset={this.resetPassword}
            />
        )
    }
}
const mapStateToProps=state=>{
    return{...state}
  }
export default connect(mapStateToProps)(ResetPassword)