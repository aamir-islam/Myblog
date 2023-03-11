import React from "react";
import { HeaderContainer, HeaderStyle, NavStyle } from "./Header.styled";

export const Header = () => {
  return (
    <HeaderStyle>
      <NavStyle>
        <HeaderContainer>
          <a>Logo</a>
          <div>space</div>
          <button>icon</button>
        </HeaderContainer>
      </NavStyle>
    </HeaderStyle>
  );
};
