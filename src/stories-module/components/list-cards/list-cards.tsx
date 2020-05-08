import React from "react";
import styled from "../../../styled-components";
import Card from "./card";
import { red } from "@ant-design/colors";
const ListCards = () => {
  return (
    <List>
      <Card value="$510" percentage={50} type="revenue" />
      <Card value="12.2M" percentage={12} type="impressions" />
      <Card
        value="37.5%"
        percentage={12}
        percentageColor={red[6]}
        type="fill-rate"
      />
      <Card value="$2.4" percentage={32} type="ecpm" />
    </List>
  );
};

export default ListCards;

const List = styled.ul`
  display: flex;
  padding: 0px;
  width: 100%;
  @media ${(props) => props.theme.media.md} {
    flex-direction: column;
  }
`;
