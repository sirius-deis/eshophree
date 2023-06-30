import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { StyledSignUp } from './signup.styles';
import H2 from '../h2/h2';
import Line from '../line/line';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../label-with-input/labelWithInput';
import Button from '../button/button';
import Modal from '../modal/modal';
import { signUp } from '../../store/user/user.actions';

const SignUp = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password, confirm } = e.target.elements;
    dispatch(
      signUp({ email: email.value, password: password.value, passwordConfirm: confirm.value }),
    );
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && !isLoading && !error) {
      navigate('/login');
    }
    if (isSubmitted && error) {
      setIsModalOpened(true);
    }
  }, [isLoading, error, isSubmitted, navigate]);

  return (
    <StyledSignUp onSubmit={submitHandler} aria-label='form'>
      {isLoading && <Spinner />}
      {isModalOpened && <Modal closeModal={() => setIsModalOpened(false)}>{error}</Modal>}
      <H2>Sign up</H2>
      <LabelWithInput type='email' name='email' />
      <LabelWithInput type='password' name='password' minLength={8} />
      <LabelWithInput
        type='password'
        label='password confirm'
        placeholder='Confirm your password'
        name='confirm'
        minLength={8}
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
          Have an account?{' '}
          <Link to='/login' style={{ textDecoration: 'underline', paddingLeft: '0.7rem' }}>
            Sign in
          </Link>
        </p>
      </div>
      <Button
        bgColor='var(--additional-color)'
        color='var(--bg-color)'
        disabled={isLoading ? true : false}
      >
        Sign up
      </Button>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem' }}>
        <Line width={35} />
        <p
          style={{
            color: 'var(--text-color-additional)',
            fontSize: '1.3rem',
          }}
        >
          Or sign up with
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
    </StyledSignUp>
  );
};

export default SignUp;
