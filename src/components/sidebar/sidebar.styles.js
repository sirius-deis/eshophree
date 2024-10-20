import styled from "styled-components";

export const StyledSideNav = styled.div`
  height: 100%;
  width: 16em;
  display: flex;
  background-color: #111;
  overflow-x: hidden;
  padding-top: 20px;
`

export const StyledLink = styled.a`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 1.5rem;
  color: #818181;
  &:hover {
  color: #f1f1f1;
  }
`