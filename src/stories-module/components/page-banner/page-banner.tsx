import React from "react";
import styled, { css } from "../../../styled-components";
const PageBanner = () => {
  return (
    <PageBannerWrapper>
      <BannerImage>Img Placeholder</BannerImage>
      <BannerText>
        <Title>
          Welcome back <b>Gregory</b>
        </Title>
        <Subtitle>
          Nodolor sit amet, consectetur adipisicing elit. Aperiam odio expedita
          nostrum eius, sapiente commodi in tenetur facilis
        </Subtitle>
      </BannerText>
      <ButtonWrapper>
        <ButtonBanner>Hide Alert</ButtonBanner>
      </ButtonWrapper>
    </PageBannerWrapper>
  );
};

export default PageBanner;

const PageBannerWrapper = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.boldBlue};

  height: 140px;
  border-radius: ${(props) => props.theme.borders.normal};
  margin: ${(props) => props.theme.spacing.xl} 0px 25px;
  padding: ${(props) => props.theme.spacing.md};
`;
const BannerImage = styled.div`
  width: 25%;
  @media ${(props) => props.theme.media.lg} {
    display: none;
  }
`;
const BannerText = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 50%;
  @media ${(props) => props.theme.media.sm} {
    width: 100%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 0px;
  color: ${(props) => props.theme.colors.almostWhite};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25%;
`;
const styleButton = css`
  background-color: ${(props) => props.theme.colors.bolderBlue};
  border-color: ${(props) => props.theme.colors.bolderBlue};
  color: ${(props) => props.theme.colors.almostWhite};
  font-weight: bold;
  cursor: pointer;
`;
const ButtonBanner = styled.button`
  ${styleButton}
  width: 160px;
  height: 40px;
  border-radius: ${(props) => props.theme.borders.normal};
  &:hover {
    ${styleButton}
  }
`;
const Subtitle = styled.p`
  font-size: 15px;

  width: 100%;
  color: ${(props) => props.theme.colors.lightGrey};
`;
