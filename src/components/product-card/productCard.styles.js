import styled from "styled-components";

export const StyledProductCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 300px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`

export const StyledImageContainer = styled.div`
  text-align: center;
  margin-bottom: 16px;
`

export const StyledCharacteristic = styled.div`
  margin: 2px;
  background-color: lightgray;
  padding: 3px 5px;
  border-radius: 5px;
`

export const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 8px;
`

export const StyledPrice = styled.div`
  margin-bottom: 8px;
`

export const StyledDiscountedPrice = styled.span`
  color: red;
  margin-left: 8px;
`

export const StyledRating = styled.div`
  display: flex;
  margin-bottom: 16px;
`

export const StyledButtons = styled.div`
  display: flex;
  justify-content: space-between;
`