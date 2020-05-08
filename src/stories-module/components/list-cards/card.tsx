import React from "react";
import styled from "../../../styled-components";
import { ArrowUpOutlined } from "@ant-design/icons";
import { ReactComponent as Zap } from "../../../assets/zap.svg";

import { green } from "@ant-design/colors";

type CardType = "revenue" | "impressions" | "fill-rate" | "ecpm";

interface CardProps {
  type: CardType;
  value: string;
  percentage: number;
  percentageColor?: string;
}

const Card = ({ type, value, percentage, percentageColor }: CardProps) => {
  const getIconBGByType = (type: CardType) => {
    switch (type) {
      case "revenue":
        return (
          <IconTealTitanBG>
            <Graph />
          </IconTealTitanBG>
        );
      case "impressions":
        return (
          <IconColdBlueBG>
            <StyledZap />
          </IconColdBlueBG>
        );
      default:
        return <IconBG />;
    }
  };
  const renderPercentage = (percentage: number, percentageColor?: string) => {
    const styleInline = { color: percentageColor ? percentageColor : green[6] };
    return (
      <Percentage style={styleInline}>
        <ArrowUp />
        <b>{percentage}%</b>
      </Percentage>
    );
  };
  return (
    <CardItem>
      <CardContent>
        {getIconBGByType(type)}
        <CardTextContent>
          <div>
            <Text>
              <Value>{value}</Value>
              {renderPercentage(percentage, percentageColor)}
            </Text>
            <Type>{type}</Type>
          </div>
        </CardTextContent>
      </CardContent>
    </CardItem>
  );
};

export default Card;

const CardItem = styled.li`
  margin-right: ${(props) => props.theme.spacing.xl};
  flex: 1;
  list-style-type: none;
  &:last-child {
    margin-right: 0px;
  }
`;
const IconBG = styled.div`
  background-color: ${(props) => props.theme.colors.bolderBlue};
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.almostWhite};
  border-radius: ${(props) => props.theme.borders.normal};
`;
const StyledZap = styled(Zap)`
  height: 18px;
`;
const IconTealTitanBG = styled(IconBG)`
  background-color: ${(props) => props.theme.colors.tealTitan};
`;
const IconColdBlueBG = styled(IconBG)`
  background-color: ${(props) => props.theme.colors.coldBlue};
`;
const CardTextContent = styled.div`
  display: flex;
  padding: ${(props) => props.theme.spacing.sm} 15px;
`;
const Text = styled.div`
  display: flex;
`;
const Value = styled.p`
  margin: 0px;
  font-weight: bold;
  font-size: 22px;
  line-height: normal;
  color: ${(props) => props.theme.colors.nearlyBlack};
`;
const Type = styled(Value)`
  text-transform: uppercase;
  font-weight: 400;
  font-size: 11px;
  color: grey;
`;
const ArrowUp = styled(ArrowUpOutlined)`
  height: 10px;
`;
const Percentage = styled.div`
  margin-left: ${(props) => props.theme.spacing.xs};
`;
const CardContent = styled.div`
  background-color: white;
  display: flex;
  border-radius: ${(props) => props.theme.borders.normal};
  height: 70px;
  align-items: center;
  padding-left: ${(props) => props.theme.spacing.md};
`;
