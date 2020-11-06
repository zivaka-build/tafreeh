import React from 'react';
import {
  connect
} from 'react-redux';

function requireAuth(ComposedComponent) {
  class RequireAuthentication extends React.Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.gotoPublicRoute();
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.gotoPublicRoute();
      }
    }

    gotoPublicRoute() {
      this.props.history.push('/login-register');
    }

    render() {
      // return this.props.authenticated ? <ComposedComponent {...this.props} /> : null;
      return <ComposedComponent {
        ...this.props
      }
      />;
    }
  }

  function mapStateToProps(state) {
    return {
      authenticated: state.user.isAuthenticated,
    };
  }

  return connect(mapStateToProps)(RequireAuthentication);
}

export default requireAuth;
