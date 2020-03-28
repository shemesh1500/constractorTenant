import React from 'react';
import { Link, Redirect, useHistory, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Input from '@iso/components/uielements/input';
import Checkbox from '@iso/components/uielements/checkbox';
import Button from '@iso/components/uielements/button';
import IntlMessages from '@iso/components/utility/intlMessages';
import authAction from '@iso/redux/auth/actions';
import appAction from '@iso/redux/app/actions';
import SignInStyleWrapper from './SignIn.styles';

import { notification } from '@iso/components';
import {signInWithEmail} from '@iso/lib/firebase/firebase.authentication.util';

const { login } = authAction;
const { clearMenu } = appAction;

export default function SignIn() {
  let history = useHistory();
  let location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.Auth.idToken);

  const [redirectToReferrer, setRedirectToReferrer] = React.useState(false);
  React.useEffect(() => {
    if (isLoggedIn) {
      setRedirectToReferrer(true);
    }
  }, [isLoggedIn]);

  const [state, setState] = React.useState({
    visible: false,
    email: '',
    password: '',
    confirmLoading: false,
  });

  const handleChange = e => {
    const {name, value } = e.target;
    setState({
      ...state,
      [name] : value
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
      dispatch(clearMenu());
      history.push('/dashboard');
      console.log("After pushing")
    } else {
      notification('error', message);
      setState({
        ...state,
        confirmLoading: false,
      });
    }
  };
  
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
              <IntlMessages id="הקבלן והדייר"  />
            </Link>
          </div>
          <div className="isoSignInForm">
            <form>
              <div className="isoInputWrapper">
                <Input
                  size="large"
                  name='email'
                  placeholder="Username"
                  autoComplete="true"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper">
                <Input
                  size="large"
                  type="password"
                  name='password'
                  placeholder="Password"
                  autoComplete="false"
                  onChange={handleChange}
                />
              </div>

              <div className="isoInputWrapper isoLeftRightComponent">
                <Checkbox>
                  <IntlMessages id="זכור אותי" />
                </Checkbox>
                <Button type="primary" onClick={handleLogin}>
                  <IntlMessages id="כניסה" />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </SignInStyleWrapper>
  );
}
