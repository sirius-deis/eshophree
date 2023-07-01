import { createPortal } from 'react-dom';

const Portal = ({ children, wrapperId }) => {
  return createPortal(children, document.getElementById(wrapperId));
};

export default Portal;
