import React from "react";
import styled from "../../../styled-components";

interface MenuIconProps {
  icon: JSX.Element;
  text?: string;
}

const MenuItem = ({ icon, text }: MenuIconProps) => {
  return (
    <Item>
      {icon}
      <Text>{text}</Text>
    </Item>
  );
};

const Item = styled.li`
  list-style-type: none;
  text-align: center;
  margin: ${(props) => props.theme.spacing.md} 0px 0px;
  cursor: pointer;
`;
const Text = styled.p`
  font-size: 10px;
  margin-top: ${(props) => props.theme.spacing.xs};
  color: ${(props) => props.theme.colors.nearlyBlack};
`;
export default MenuItem;
