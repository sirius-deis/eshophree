import { StyledNavigation } from './navigation.styles';
import List from '../list/list';

const nav = [
  { name: 'home' },
  { name: 'categories' },
  { name: 'shop' },
  { name: 'about' },
  { name: 'blog' },
  { name: 'contact' },
];

const Navigation = () => {
  return (
    <StyledNavigation>
      <div className='container'>
        <List list={nav} styles={{ fontSize: '1.7rem' }} link />
      </div>
    </StyledNavigation>
  );
};

export default Navigation;
