import React from 'react';
import { HeaderContainer, HeaderLogo, HeaderBtn } from './Header.styles';

function Header({ isDarkMode, setisDarkMode }) {
   return (
      <HeaderContainer>
         <HeaderLogo isDarkMode={isDarkMode}>GitUser</HeaderLogo>
         {isDarkMode ? (
            <HeaderBtn isDarkMode onClick={() => setisDarkMode(!isDarkMode)}>
               Light <img src="/sun.svg" alt="switch to light mode" />
            </HeaderBtn>
         ) : (
            <HeaderBtn
               isDarkMode={isDarkMode}
               onClick={() => setisDarkMode(!isDarkMode)}
            >
               Dark <img src="/moon.svg" alt="switch to dark mode" />
            </HeaderBtn>
         )}
      </HeaderContainer>
   );
}

export default Header;
