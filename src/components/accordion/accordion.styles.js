import styled from 'styled-components';

export const StyledAccordion = styled.div`
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
`;

export const StyledAccordionHeader = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  cursor: pointer;
`;

export const StyledAccordionButton = styled.button`
  width: 100%;
  padding: 1rem 3rem;
  display: flex;
  justify-content: space-between;
  font-size: 1.9rem;
  border: 0;
  background-color: var(--bg-darker);
`;

export const StyledAccordionCollapse = styled.div`
  overflow: hidden;
  transition: max-height 0.2s ease-out;
`;

export const StyledAccordionBody = styled.div`
  padding: 10px;
  background-color: #fff;
`;