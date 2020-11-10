import React from 'react';
import {connect} from 'react-redux';
import ResetPasswordForm from './reset.pwd';
class ResetPassword extends React.Component {
    componentDidMount() {
       
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
    render(){
        console.log('gyuggu');
        return(
            <ResetPasswordForm/>
        )
    }
}
const mapStateToProps=state=>{
    return{...state}
  }
export default connect(mapStateToProps)(ResetPassword)