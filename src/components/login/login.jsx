import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Line from '../line/line';
import H2 from '../h2/h2';
import { StyledLogin } from './login.styles';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../label-with-input/labelWithInput';
import Button from '../button/button';
import { signIn } from '../../store/user/user.actions';

const Login = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(signIn({ email: email.value, password: password.value }));
    e.target.reset();
  };

  return (
    <StyledLogin onSubmit={submitHandler} aria-label='form'>
      {isLoading && <Spinner />}
      <H2>Login in</H2>
      <LabelWithInput type='email' label='email' name='email' />
      <LabelWithInput type='password' label='password' name='password' minLength={8} />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '1.3rem',
          color: 'var(--text-color-additional)',
        }}
      >
        <p>
          Don't have account?{' '}
          <Link to='/signup' style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>
            Sign up
          </Link>
        </p>
        <Link to='/forget' style={{ textDecoration: 'underline' }}>
          Forget password?
        </Link>
      </div>
      <Button bgColor='var(--additional-color)' color='var(--bg-color)'>
        Login
      </Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <Line width={35} />
        <p
          style={{
            color: 'var(--text-color-additional)',
            fontSize: '1.3rem',
          }}
        >
          Or login with
        </p>
        <Line width={35} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
        }}
      >
        <Button bordered>
          <FaFacebookF /> Facebook
        </Button>
        <Button bordered>
          <FaGoogle /> Google
        </Button>
      </div>
    </StyledLogin>
  );
};

export default Login;
