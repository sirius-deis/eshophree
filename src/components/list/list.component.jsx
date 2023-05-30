import PropTypes from 'prop-types';

import { StyledList } from './list.styles';

import ListItem from '../listItem/listItem.component';

const List = ({ list }) => {
    const navigation = list.map((item, i) => {
        return <ListItem key={i}>{item}</ListItem>;
    });
    return <StyledList>{navigation}</StyledList>;
};

List.propTypes = {
    list: PropTypes.array,
};

export default List;
