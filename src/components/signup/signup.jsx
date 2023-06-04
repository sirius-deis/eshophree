import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { StyledSignUp, StyledH2, StyleLine } from './signup.styles';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../labelWithInput/labelWithInput';
import Button from '../button/button';
import { signUp } from '../../store/user/user.actions';

const SignUp = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password, confirm } = e.target;
    dispatch(signUp({ email: email.value, password: password.value, passwordConfirm: confirm.value }));
    e.target.reset();
  };

  return (
    <StyledSignUp onSubmit={submitHandler}>
      <StyledH2>Sign up</StyledH2>
      <LabelWithInput type='email' name='email' />
      <LabelWithInput type='password' name='password' validation={{ minLength: 8 }} />
      <LabelWithInput
        type='password'
        label='password confirm'
        placeholder='Confirm your password'
        name='confirm'
        validation={{ minLength: 8 }}
      />
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
          <Link to='/login' style={{ textDecoration: 'underline', paddingLeft: '0.5rem' }}>
            Sign in
          </Link>
        </p>
      </div>
      <Button bgColor='var(--additional-color)' color='var(--bg-color)' disabled={isLoading ? true : false}>
        {isLoading ? <Spinner /> : 'Sign up'}
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
