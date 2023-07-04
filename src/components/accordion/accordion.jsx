import { useState } from 'react';
import styled from 'styled-components';
import List from '../list/list';

const StyledAccordion = styled.div``;

const StyledAccordionHeader = styled.div`
  width: 100%;
  display: flex;
`;

const StyledAccordionButton = styled.button`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.9rem;
  cursor: pointer;
  border: 0;
  background-color: var(--footer-color);
`;

const StyledAccordionCollapse = styled.div``;

const StyledAccordionBody = styled.div``;

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
