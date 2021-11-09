import React from 'react';
import { HeaderContainer, HeaderLogo, HeaderBtn } from './Header.styles';

function Header() {
   return (
      <HeaderContainer>
         <HeaderLogo>GitUser</HeaderLogo>
         <HeaderBtn>
            Light <img src="/sun.svg" alt="light mood" />
         </HeaderBtn>
      </HeaderContainer>
   );
}

export default Header;
