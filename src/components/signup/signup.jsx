import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { StyledSignUp, StyledH2, StyleLine } from './signup.styles';

import LabelWithInput from '../labelWithInput/labelWithInput';
import Button from '../button/button';

const SignUp = () => {
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <StyledSignUp onSubmit={submitHandler}>
      <StyledH2>Sign up</StyledH2>
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
          Have account?{' '}
          <Link to='/login' style={{ textDecoration: 'underline' }}>
            Sign up
          </Link>
        </p>
      </div>
      <Button bgColor='var(--additional-color)' color='var(--bg-color)'>
        Sign up
      </Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <StyleLine />
        <p
          style={{
            color: 'var(--text-color-additional)',
            fontSize: '1.3rem',
          }}
        >
          Or sign up with
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
    </StyledSignUp>
  );
};

export default SignUp;
