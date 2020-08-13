import styled from "styled-components";

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Item = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 2px;
  border: solid 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const AccordianContainer = styled.div`
  padding: 0px 20px;
  width: 100%;
  margin-bottom: 10px;
`;

export const Clone = styled(Item)`
  ~ div {
    transform: none !important;
  }
`;
