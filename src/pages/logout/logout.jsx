import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signOut } from '../../store/user/user.actions';

const Logout = () => {
  const dispatch = useDispatch();
  dispatch(signOut);
  return <Navigate to='/' />;
};

export default Logout;
