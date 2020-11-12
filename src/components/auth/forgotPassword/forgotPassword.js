import React from 'react';
import { connect } from 'react-redux';
import { actions as toastrActions } from 'react-redux-toastr';
import { bindActionCreators } from 'redux';
import { ACTIONS, SAGA_ACTIONS } from '../../../common/config/actions';
import ForgotPassword from './forgot.pass';
class SendPasswordLink extends React.Component {
    componentDidMount() {
        this.props.dispatch({
            type:ACTIONS.LAYOUT.HIDE_HEADER
        });
        this.toastr = bindActionCreators(toastrActions, this.props.dispatch);
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
    sendLink = (values) => {
        return new Promise((resolve, reject) => {
            this.props.dispatch({
                type: SAGA_ACTIONS.FORGOT_PASSWORD,
                payload: values,
                callbackSuccess: resp => {
                    this.showToaster("success", "Success", resp.data.message);
                    resolve(resp);
                },
                callbackError: error => {
                    this.showToaster("error", "Error", error.data.message);
                    reject(error);
                }
            })
        })

    }
    render() {
        return (
            <ForgotPassword
                sendLink={this.sendLink}
            />
        )

    }
}
const mapStateToProps = state => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(SendPasswordLink)