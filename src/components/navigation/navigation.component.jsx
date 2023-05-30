import { StyledNavigation } from './navigation.styles';
import List from '../list/list.component';

const nav = [
    'home',
    'new-arrivals',
    'best-sales',
    'value-of-the-day',
    'blog',
    'help',
];

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
