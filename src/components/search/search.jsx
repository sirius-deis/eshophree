import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineSearch, MdKeyboardArrowDown } from 'react-icons/md';

import { StyledSearch, StyledSearchInput, StyledText } from './search.styles';
import Button from '../button/button';
import Dropdown from '../dropdown/dropdown';
import DropdownMenu from '../dropdown-menu/dropdownMenu';
import DropdownItem from '../dropdown-item/dropdownItem';

const Search = () => {
  const categories = useSelector((store) => store.category.categories);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSelectCategoryHandler = (value) => {
    setSelectedCategory(value);
    setIsDropdownOpen(false);
  };

  const onDropdownClickHandler = () => {
    setIsDropdownOpen((prevState) => {
      return !prevState;
    });
  };

  const DropdownMouseEnterHandler = () => {
    setIsDropdownOpen(true);
  };

  const DropdownMouseLeaveHandler = () => {
    setIsDropdownOpen(false);
  };
  return (
    <StyledSearch>
      <Dropdown onMouseLeaveHandler={DropdownMouseLeaveHandler}>
        <Button kind='dropdown' onClickHandler={onDropdownClickHandler} onMouseEnterHandler={DropdownMouseEnterHandler}>
          <StyledText className={`${isDropdownOpen ? 'opened' : ''}`}>{selectedCategory}</StyledText>
          <MdKeyboardArrowDown fontSize={22} />
        </Button>
        {isDropdownOpen && (
          <DropdownMenu>
            {categories &&
              [{ _id: 1, name: 'All categories' }, ...categories].map((category) => (
                <DropdownItem
                  key={category._id}
                  onSelectCategoryHandler={onSelectCategoryHandler}
                  value={category.name}
                />
              ))}
          </DropdownMenu>
        )}
      </Dropdown>
      <StyledSearchInput type='text' />
      <Button type='button' kind='round' bgColor='additional-color' color='bg-color'>
        <MdOutlineSearch />
      </Button>
    </StyledSearch>
  );
};

export default Search;
