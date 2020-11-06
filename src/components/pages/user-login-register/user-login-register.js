import React from 'react';
import {connect} from 'react-redux';
import { SAGA_ACTIONS } from '../../../common/config/actions';
import { SignIn } from '../../auth/signIn/signin';
import Signup from '../../auth/signup/signup';
import { bindActionCreators } from 'redux';
import { actions as toastrActions } from 'react-redux-toastr';
import "./login-register.css";
class UserLoginRegister extends React.Component {
    constructor(props){
      super(props);
      this.state={signUPTrigerred:false,signInTrigerred:false}
    }
    componentDidMount() {
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
  showToaster(type, title, message) {
    this.toastr.add({
      type,
      title,
      position: 'top-left',
      attention: true,
      onAttentionClick: id => {},
      message,
      options: { showCloseButton: true },
      showCloseButton: true,
    });
  }
    login=values=>{
      
      this.setState({signInTrigerred:true});
      return new Promise((resolve,reject)=>{
        this.props.dispatch({
          type:SAGA_ACTIONS.LOGIN,
          payload:values,
          callbackSuccess:resp=>{
            this.props.dispatch({
              type:SAGA_ACTIONS.GET_ME,
              payload:{email:values.email},
              callbackSuccess:resp1=>{
                this.showToaster('success', 'Login Success', resp.data.message);
              }
            })
              resolve(resp);
          },
          callbackError:error=>{
              this.setState({signInTrigerred:false});
              this.showToaster('error', 'Login Unsuccessful', error.data.message);
              reject(error);
          }
        })
      })
    }

    signUp=(values)=>{
      this.setState({signUPTrigerred:true});
      return new Promise((resolve,reject)=>{
        this.props.dispatch({
          type:SAGA_ACTIONS.SIGN_UP,
          payload:values,
          callbackSuccess:resp=>{
              this.setState({signUPTrigerred:false});
              this.showToaster("success",'User created',resp.data.message);
              resolve(resp);
          },
          callbackError:error=>{
              this.setState({signUPTrigerred:false});
              this.showToaster("error",'Signup Unsucessful',error.data.message);
              reject(error);
          }
        })
      })
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
                        <Signup
                          signUPTrigerred={this.state.signUPTrigerred}
                          signup={this.signUp}
                        />
                        <SignIn login={this.login} signInTrigerred={this.state.signInTrigerred}/>
                    </div>
                </div>
            </main>
        )
    }
}
const mapStateToProps=state=>{
  return{...state}
}
export default connect(mapStateToProps)(UserLoginRegister);