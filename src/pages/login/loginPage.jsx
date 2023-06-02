import styled from 'styled-components';

import Login from '../../components/login/login';

const StyledLoginPage = styled.div`
  height: calc(100vh - 13.5rem);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <StyledLoginPage>
      <div className='container'>
        <Login />
      </div>
    </StyledLoginPage>
  );
};

export default LoginPage;
