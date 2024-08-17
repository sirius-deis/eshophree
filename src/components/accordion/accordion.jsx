import { useState } from 'react';
import List from '../list/list';
import {StyledAccordion, StyledAccordionBody, StyledAccordionButton, StyledAccordionCollapse, StyledAccordionHeader} from './accordion.styles'



const Accordion = ({ title, list = [] }) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledAccordion>
      <StyledAccordionHeader>
        <StyledAccordionButton onClick={() => setIsOpened((prevState) => !prevState)}>
          <span>{title}</span> {isOpened ? <>&#8722;</> : <>&#43;</>}
        </StyledAccordionButton>
      </StyledAccordionHeader>
      {isOpened && (
        <StyledAccordionCollapse>
          <StyledAccordionBody>
            {
              <List
                list={list}
                isColumn
                styles={{ fontSize: '1.2rem' }}
                color='text-color'
                position='left'
              />
            }
          </StyledAccordionBody>
        </StyledAccordionCollapse>
      )}
    </StyledAccordion>
  );
};

export default Accordion;
