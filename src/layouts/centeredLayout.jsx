import { Outlet } from 'react-router-dom';

const styles = {
  height: 'calc(100vh - 13.5rem)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
const CenteredLayout = () => {
  return (
    <div style={styles}>
      <Outlet />
    </div>
  );
};

export default CenteredLayout;
