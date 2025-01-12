import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import { StyledSignup, StyledSocialSignup, StyledSocialButtons, StyledOrSignup } from './signup.styles';
import Heading from '../heading/heading';
import Line from '../line/line';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../label-with-input/labelWithInput';
import Button from '../button/button';
import Modal from '../modal/modal';
import AccountLink from '../account-link/accountLink';
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
    <StyledSignup onSubmit={submitHandler} aria-label='form'>
      {isLoading && <Spinner />}
      {isModalOpened && <Modal closeModal={() => setIsModalOpened(false)}>{error}</Modal>}
      <Heading>Sign up</Heading>
      <LabelWithInput type='email' name='email' label="Email" required />
      <LabelWithInput type='password' name='password' label="Password" minLength={8} required />
      <LabelWithInput
        type='password'
        label='password confirm'
        placeholder='Confirm your password'
        name='confirm'
        minLength={8}
        required
      />
      <AccountLink>
        <p>
          Have an account?{' '}
          <Link to='/login' style={{ textDecoration: 'underline', paddingLeft: '0.7rem' }}>
            Sign in
          </Link>
        </p>
      </AccountLink>
      <Button
        bgColor='var(--additional-color)'
        color='var(--bg-color)'
        disabled={isLoading}
      >
        Sign up
      </Button>
      <StyledSocialSignup>
        <Line width={35} />
        <StyledOrSignup>
          Or sign up with
        </StyledOrSignup>
        <Line width={35} />
      </StyledSocialSignup>
      <StyledSocialButtons>
        <Button bordered>
          <FaFacebookF /> Facebook
        </Button>
        <Button bordered>
          <FaGoogle /> Google
        </Button>
      </StyledSocialButtons>
    </StyledSignup>
  );
};

export default SignUp;
