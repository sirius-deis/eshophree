import StyledNotFound from './notfound.styles';

const NotFound = () => {
  return (
    <StyledNotFound>
      <div className='cont_error'>
        <h1>Oops</h1>
        <p>The Page you're looking for isn't here.</p>
      </div>
      <div className='cont_aura_1'></div>
      <div className='cont_aura_2'></div>
    </StyledNotFound>
  );
};

export default NotFound;
