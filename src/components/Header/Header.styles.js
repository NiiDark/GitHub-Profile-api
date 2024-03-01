import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 95%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLogo = styled.h1`
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  font-weight: 600;
  font-size: 1.75rem;
`;

export const HeaderBtn = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  font-size: 1.1rem;
  font-family: "Red Hat Mono";
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 25px;
    height: 25px;
    margin-left: 0.5rem;
  }
`;
