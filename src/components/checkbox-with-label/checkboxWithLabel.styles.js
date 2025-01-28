import styled from "styled-components";

export const StyledCheckboxContainer = styled.label`
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 2rem;
  user-select: none;
  &:hover input ~ .marked {
    background-color: var(--bg-dark);
  }
  & input:checked ~ .marked {
    background-color: var(--primary);
  }
  & input:checked ~ .checked:after {
    display: block;
  }
  & .checked:after {
    left: 9px;
    top: 5px;
    width: 5px;
    height: 10px;
    border: solid white;
    border-width: 0 3px 3px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
  `;

export const StyledCheckbox = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledCheckMark = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: var(--bg);
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;