import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { StyledLogin, StyledH2, StyleLine } from './login.styles';
import LabelWithInput from '../labelWithInput/labelWithInput';
import Button from '../button/button';

const Login = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledLogin onSubmit={submitHandler}>
      <StyledH2>Login in</StyledH2>
      <LabelWithInput type='email' />
      <LabelWithInput type='password' />
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
          <Link to='/signup' style={{ textDecoration: 'underline' }}>
            Sign up
          </Link>
        </p>
        <Link to='/forget'>Forget password?</Link>
      </div>
      <Button bgColor='var(--additional-color)' color='var(--bg-color)'>
        Login
      </Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <StyleLine />
        <p
          style={{
            color: 'var(--text-color-additional)',
            fontSize: '1.3rem',
          }}
        >
          Or login with
        </p>
        <StyleLine />
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