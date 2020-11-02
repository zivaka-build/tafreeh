import React from 'react';
import { SignIn } from '../../auth/signIn/signin';
import Signup from '../../auth/signup/signup';
import "./login-register.css";
class UserLoginRegister extends React.Component {
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
        window.$('.tab a').on('click', function (e) {
  
            e.preventDefault();
            
            window.$(this).parent().addClass('active');
            window.$(this).parent().siblings().removeClass('active');
            
            var target = window.$(this).attr('href');
          
            window.$('#cred_tab > div').not(target).hide();
            
            window.$(target).fadeIn(600);
            
          });
    }
    render() {
        return (
            <main className="main-className">
                <div className="form">
                    <ul className="tab-group">
                        <li className="tab active"><a href="#signup">Sign Up</a></li>
                        <li className="tab"><a href="#login">Log In</a></li>
                    </ul>
                    <div className="tab-content" id="cred_tab">
                        <Signup/>
                        <SignIn/>
                    </div>
                </div>
            </main>
        )
    }
}
export default UserLoginRegister;