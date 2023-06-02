import { StyledNavigation } from './navigation.styles';
import List from '../list/list';

const nav = ['home', 'categories', 'shop', 'about', 'blog', 'contact'];

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className='container'>
        <List list={nav} />
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
