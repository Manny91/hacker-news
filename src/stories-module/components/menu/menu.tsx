import React from "react";
import styled, { css } from "../../../styled-components";
import { ReactComponent as LogoIcon } from "../../../assets/logo.svg";
import {
  LogoutOutlined,
  AlignLeftOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import MenuItem from "./menu-item";
const MenuPanel = () => {
  return (
    <Nav>
      <List>
        <Top>
          <MenuItem icon={<HomeIcon />} />
          <MenuItem icon={<TopStoriesIcon />} text="Top Stories" />
          <MenuItem icon={<MostRecentStoriesIcon />} text="Most Recent" />
        </Top>
        <MenuItem icon={<LogoutIcon />} text="Logout" />
      </List>
    </Nav>
  );
};
const Nav = styled.nav`
  height: 100%;
  border-right: 1px solid ${(props) => props.theme.colors.lightGrey};
`;
const List = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0px;
  justify-content: space-between;
  padding: ${(props) => props.theme.spacing.md} 0px;
  height: 100%;
  margin: 0px;
`;
const cssIcon = css`
  color: ${(props) => props.theme.colors.coldBlue};
  font-size: 26px;
`;
const LogoutIcon = styled(LogoutOutlined)`
  ${cssIcon}
`;
const LogoIconWrapper = styled.div`
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacing.md};
  cursor: pointer;
  svg {
    height: 30px;
    width: 30px;
  }
`;
function HomeIcon() {
  return (
    <LogoIconWrapper>
      <LogoIcon />
    </LogoIconWrapper>
  );
}
const TopStoriesIcon = styled(AlignLeftOutlined)`
  ${cssIcon}
`;

const MostRecentStoriesIcon = styled(AreaChartOutlined)`
  ${cssIcon}
`;
const Top = styled.div``;

export default MenuPanel;
