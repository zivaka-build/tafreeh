import React from 'react';
import { connect } from 'react-redux';

function requireNoAuth(ComposedComponent) {
  class LoginAuthentication extends React.Component {
    componentWillMount() {
      if (this.props.authenticated) {
        this.gotoPrivateRoute();
      }
    }

    componentWillUpdate(nextProps) {
      if (nextProps.authenticated) {
        this.gotoPrivateRoute();
      }
    }

    gotoPrivateRoute() {
      this.props.history.push('/');
    }

    render() {
      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.user.isAuthenticated,
    };
  }

  return connect(mapStateToProps)(LoginAuthentication);
}

export default requireNoAuth;
