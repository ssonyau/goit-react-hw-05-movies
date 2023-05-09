import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
display:flex;
padding:10px;
margin-bottom:10px;
box-shadow: 0 5px 10px rgba(0, 0, 0, 0.3);
`
export const StyledLink = styled(NavLink)`
padding: 10px;
font-size: 20px;
font-weight:500;
text-decoration:none;
&.active {
    color: grey;
    
  }
`