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
      <Link to='/forget' style={{ marginLeft: 'auto', fontSize: '1.2rem', color: 'var(--text-color-additional)' }}>
        Forget password?
      </Link>
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
