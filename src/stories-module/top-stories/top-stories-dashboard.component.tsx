import React, { useEffect, useState } from "react";
import { TopStoriesDashboardContainerProps } from "./top-stories-dashboard.container.component";
import { Table, Pagination, Button } from "antd";

import { Story } from "../services/stories.service";
import moment from "moment";
import styled, { css } from "../../styled-components";

const TopStoriesDashboardComponent = ({
  storiesId,
  getNews,
  loadingStories,
  selectedStories,
  selectStories,
}: TopStoriesDashboardContainerProps) => {
  const stepSize = 5;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [data, setData] = useState([] as Story[]);

  const paginationChange = (page: number) => {
    setCurrentPageIndex(Math.max(0, page - 1));
  };

  const handleClickRow = (story: Story) => {
    window.open(story.url, "_blank");
  };
  const columnsData = [
    {
      title: "Author",
      dataIndex: "by",
      key: "by",
    },
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Score",
      dataIndex: "score",
      key: "score",
    },
    {
      title: "Comments_count",
      dataIndex: "kids",
      key: "kids",
      render: (kids: number[]) => kids && kids.length,
    },
    {
      title: "Time",
      dataIndex: "time",
      key: "time",
      render: (timestamp: number) => (
        <TimeDisplay>
          {moment(timestamp * 1000).format("MMM Do YYYY")}
        </TimeDisplay>
      ),
    },
    { title: "Url", dataIndex: "url", key: "url" },
  ];

  useEffect(() => {
    getNews();
  }, []);

  useEffect(() => {
    setData(
      selectedStories.map((item) => {
        return { ...item, key: item.id };
      })
    );
  }, [selectedStories]);

  useEffect(() => {
    const step = Math.max(0, currentPageIndex * stepSize);
    const storiesIdToLoad = storiesId.slice(step, step + stepSize);
    selectStories(storiesIdToLoad);
  }, [currentPageIndex, loadingStories]);

  return (
    <PageContainer>
      <PageBanner>
        <BannerText>
          <Title>Welcome Back Gregory</Title>
          <Subtitle>
            Nodolor sit amet, consectetur adipisicing elit. Aperiam odio
            expedita nostrum eius, sapiente commodi in tenetur facilis
          </Subtitle>
        </BannerText>
        <ButtonWrapper>
          <ButtonBanner>Hide Alert</ButtonBanner>
        </ButtonWrapper>
      </PageBanner>

      <Table
        pagination={false}
        columns={columnsData}
        dataSource={data}
        rowClassName="story-table-row"
        onRow={(record) => {
          return {
            onClick: () => {
              handleClickRow(record);
            },
          };
        }}
      ></Table>
      <PaginationWrapper>
        <Pagination
          pageSize={stepSize}
          current={currentPageIndex + 1}
          total={storiesId.length}
          showSizeChanger={false}
          onChange={paginationChange}
        ></Pagination>
      </PaginationWrapper>
    </PageContainer>
  );
};

const PageContainer = styled.section`
  padding: 0px ${(props) => props.theme.spacing.md};
  backgorund-color: ${(props) => props.theme.colors.almostWhite};
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const PageBanner = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.boldBlue};
  flex-direction: colum;
  height: 140px;
  border-radius: 7px;
  margin: ${(props) => props.theme.spacing.xl};
  padding: ${(props) => props.theme.spacing.md};
`;
const BannerText = styled.p`
  display: flex;
  flex: 2;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: 20px;
  color: ${(props) => props.theme.colors.almostWhite};
`;

const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const styleButton = css`
  background-color: ${(props) => props.theme.colors.bolderBlue};
  border-color: ${(props) => props.theme.colors.bolderBlue};
  color: ${(props) => props.theme.colors.almostWhite};
  font-weight: bold;
`;
const ButtonBanner = styled(Button)`
  ${styleButton}
  &:hover {
    ${styleButton}
  }
`;
const Subtitle = styled.h3`
  font-size: 16px;
  color: ${(props) => props.theme.colors.almostWhite};
`;
const TimeDisplay = styled.div`
  width: 100px;
`;
const PaginationWrapper = styled.div`
  margin: ${(props) => props.theme.spacing.sm};
  align-items: right;
  display: flex;
  justify-content: flex-end;
`;
export default TopStoriesDashboardComponent;
