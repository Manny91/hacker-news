import React from "react";
import styled from "../../../styled-components";
const MenuPanel = () => {
  return (
    <Nav>
      <List>
        <Top>
          <Item>Home</Item>
          <Item>Top Stories</Item>
          <Item>Most Recent</Item>
        </Top>

        <Item>Logout</Item>
      </List>
    </Nav>
  );
};
const Nav = styled.nav`
  height: 100%;
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: space-between;
  margin: 0px;
  height: 100%;
`;
const Top = styled.div``;
const Item = styled.li`
  padding: ${(props) => props.theme.spacing.md};
  list-style-type: none;
`;
export default MenuPanel;
