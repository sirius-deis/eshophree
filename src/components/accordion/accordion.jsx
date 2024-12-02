import { useState } from 'react';
import PropTypes from 'prop-types';
import { StyledAccordion, StyledAccordionBody, StyledAccordionButton, StyledAccordionCollapse, StyledAccordionHeader } from './accordion.styles'



const Accordion = ({ title, content }) => {
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
              content
            }
          </StyledAccordionBody>
        </StyledAccordionCollapse>
      )}
    </StyledAccordion>
  );
};

Accordion.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
};

export default Accordion;
