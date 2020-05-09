import React from "react";
import styled from "../../../styled-components";
import { Link } from "react-router-dom";
interface MenuIconProps {
  icon: JSX.Element;
  text?: string;
  active?: boolean;
  to?: string;
}

const MenuItem = ({ icon, text, active, to = "/" }: MenuIconProps) => {
  const classStyle = active ? "active" : "";
  return (
    <Item className={classStyle}>
      <Link to={to}>
        {icon}
        <Text>{text}</Text>
      </Link>
    </Item>
  );
};

const Item = styled.li`
  list-style-type: none;
  text-align: center;
  margin: ${(props) => props.theme.spacing.md} 0px 0px;
  cursor: pointer;
  @media ${(props) => props.theme.media.lg} {
    margin: 0px ${(props) => props.theme.spacing.md} 0px;
  }
  &.active {
    font-weight: bold;
    svg {
      color: ${(props) => props.theme.colors.bolderBlue};
    }
  }
`;
const Text = styled.p`
  font-size: 10px;
  margin-top: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.nearlyBlack};
`;
export default MenuItem;
