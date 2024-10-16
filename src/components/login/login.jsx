import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Line from '../line/line';
import Heading from '../heading/heading';
import { StyledLogin } from './login.styles';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../label-with-input/labelWithInput';
import Button from '../button/button';
import Modal from '../modal/modal';
import { signIn } from '../../store/user/user.actions';

const Login = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    dispatch(signIn({ email: email.value, password: password.value }));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (isSubmitted && !isLoading && !error) {
      navigate('/');
    }
    if (isSubmitted && error) {
      setIsModalOpened(true);
    }
  }, [isLoading, error, isSubmitted, navigate]);

  return (
    <StyledLogin onSubmit={submitHandler} aria-label='form'>
      {isLoading && <Spinner />}
      {isModalOpened && <Modal closeModal={() => setIsModalOpened(false)}>{error}</Modal>}
      <Heading>Log in</Heading>
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
      <Button bgColor='var(--additional-color)' color='var(--bg-color)' disabled={isModalOpened}>
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
        <Button bordered disabled={isModalOpened}>
          <FaFacebookF /> Facebook
        </Button>
        <Button bordered disabled={isModalOpened}>
          <FaGoogle /> Google
        </Button>
      </div>
    </StyledLogin>
  );
};

export default Login;
