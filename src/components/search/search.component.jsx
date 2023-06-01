import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdOutlineSearch, MdKeyboardArrowDown } from 'react-icons/md';

import { StyledSearch, StyledSearchInput, StyledText } from './search.styles';
import Button from '../button/button.component';
import Dropdown from '../dropdown/dropdown.component';
import DropdownMenu from '../dropdown-menu/dropdownMenu.component';
import DropdownItem from '../dropdown-item/dropdownItem.component';

const Search = () => {
  const categories = useSelector((store) => store.category.categories);
  const [selectedCategory, setSelectedCategory] = useState('All categories');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const onSelectCategoryHandler = (value) => {
    setSelectedCategory(value);
    setIsDropdownOpen(false);
  };

  const onDropdownClickHandler = () => {
    setIsDropdownOpen((prevState) => {
      setIsDropdownOpen(!prevState);
    });
  };

  //transform: rotate(180deg);

  return (
    <StyledSearch>
      <Dropdown>
        <Button type='button' bgColor='transparent' onClick={onDropdownClickHandler}>
          <StyledText className={`${isDropdownOpen ? 'opened' : ''}`}>{selectedCategory}</StyledText>
          <MdKeyboardArrowDown fontSize={22} />
        </Button>
        {isDropdownOpen && (
          <DropdownMenu>
            {categories &&
              [{ id: 1, name: 'All categories' }, ...categories].map((category) => (
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
      <Button type='button' kind='round' bgColor='var(--additional-color)' color='var(--bg-color)'>
        <MdOutlineSearch />
      </Button>
    </StyledSearch>
  );
};

export default Search;
