import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FaGoogle, FaFacebookF } from 'react-icons/fa';
import Heading from '../heading/heading';
import { StyledLogin } from './login.styles';
import Spinner from '../spinner/spinner';
import LabelWithInput from '../label-with-input/labelWithInput';
import Button from '../button/button';
import Modal from '../modal/modal';
import AccountLink from '../account-link/accountLink';
import SocialButtons from '../social-buttons/socialButtons';
import { signIn } from '../../store/user/user.actions';

const Login = () => {
  const { isLoading, error } = useSelector((state) => state.user);
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(signIn({ email, password }));
    clearForm();
    setIsSubmitted(true);
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
  }

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
      <LabelWithInput type='email' label='email' name='email' value={email} setValue={setEmail} />
      <LabelWithInput type='password' label='password' name='password' minLength={8} value={password} setValue={setPassword} />
      <AccountLink>
        <p>
          Don't have account?{' '}
          <Link to='/signup' style={{ textDecoration: 'underline', marginLeft: '0.3rem' }}>
            Sign up
          </Link>
        </p>
        <Link to='/forget' style={{ textDecoration: 'underline' }}>
          Forget password?
        </Link>
      </AccountLink>
      <Button bgColor='var(--additional-color)' color='var(--bg-color)' disabled={isModalOpened}>
        Login
      </Button>
      <SocialButtons title="login" buttons={[
        { buttonContent: <FaFacebookF /> + " Facebook", onClick: () => { } },
        { buttonContent: <FaGoogle /> + " Google", onClick: () => { } }]}
      />
    </StyledLogin>
  );
};

export default Login;
