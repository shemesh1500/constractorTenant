import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import { notification } from '@iso/components';
import {
  signInWithEmail,
  resetPassword,
} from '@iso/lib/firebase/firebase.authentication.util';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import SignInStyleWrapper from './SignIn.styles';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {

  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);

  const [state, setState] = React.useState({
    email: '',
    password: '',
    confirmLoading: false,
  });
  const handleChange = e => {
    const { name, value } = e.target;
    console.log(name)
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleLogin = async () => {
    const { email, password } = state;
    if (!(email && password)) {
      notification('error', 'Please fill in email. and password');
      return;
    }
    setState({
      ...state,
      confirmLoading: true,
    });
    let user;
    let message;
    try {
      await signInWithEmail(email, password).then(authUser => {
        user = authUser.user;
      });
    } catch (error) {
      message = error.message;
      console.log(error.message, 'Error');
    }
    if (user) {
      const token = await user.getIdToken();
      dispatch(login(token));
      history.push('/dashboard');
    } else {
      notification('error', message);
      setState({
        ...state,
        confirmLoading: false,
      });
    }
  };
  const handleResetPassword = () => {
    const { email } = state;
    if (!email) {
      notification('error', `Please fill in email.`);
      return;
    }
    resetPassword(email)
      .then(() =>
        notification('success', `Password reset email sent to ${email}.`)
      )
      .catch(error => notification('error', 'Email address not found.'));
  };

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  let { from } = location.state || { from: { pathname: '/dashboard' } };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }
  return (
    <SignInStyleWrapper className="isoSignInPage">
      <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/dashboard">
              <IntlMessages id="page.signInTitle" />
            </Link>
          </div>
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper">
                <Input
                  name="email"
                  size="large"
                  placeholder="email"
                  autoComplete="true"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  name="password"
                  size="large"
                  type="password"
                  placeholder="Password"
                  autoComplete="false"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="page.signInRememberMe" />
                </Checkbox>
                <Button type="primary" onClick={handleLogin}>
                  <IntlMessages id="page.signInButton" />
                </Button>
              </div>

              <p className="isoHelperText">
                <IntlMessages id="page.signInPreview" />
              </p>
            </form>
            <div className="isoCenterComponent isoHelperWrapper">
              <Link to="/forgotpassword" className="isoForgotPass">
                <IntlMessages id="page.signInForgotPass" />
              </Link>
              <Link to="/signup">
                <IntlMessages id="page.signInCreateAccount" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
