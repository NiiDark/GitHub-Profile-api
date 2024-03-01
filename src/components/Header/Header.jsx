import { HeaderContainer, HeaderLogo, HeaderBtn } from "./Header.styles";

function Header({ isDarkMode, setIsDarkMode }) {
  return (
    <HeaderContainer>
      <HeaderLogo isDarkMode={isDarkMode}>GitUser</HeaderLogo>
      {isDarkMode ? (
        <HeaderBtn isDarkMode onClick={() => setIsDarkMode(!isDarkMode)}>
          Light <img src="/sun.svg" alt="switch to light mode" />
        </HeaderBtn>
      ) : (
        <HeaderBtn
          isDarkMode={isDarkMode}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          Dark <img src="/moon.svg" alt="switch to dark mode" />
        </HeaderBtn>
      )}
    </HeaderContainer>
  );
}

export default Header;
