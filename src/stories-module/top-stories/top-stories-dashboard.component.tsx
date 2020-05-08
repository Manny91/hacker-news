import React, { useEffect, useState } from "react";
import { TopStoriesDashboardContainerProps } from "./top-stories-dashboard.container.component";
import { Table, Pagination, Divider } from "antd";

import { Story } from "../services/stories.service";
import moment from "moment";
import styled, { css } from "../../styled-components";
import PageBanner from "../components/page-banner/page-banner";
import ListCards from "../components/list-cards/list-cards";

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
      <PageTopContent>
        <PageBanner />
        <PageOverview>
          <h2>Overview</h2>
          <ListCards />
        </PageOverview>
        <Divider></Divider>
      </PageTopContent>

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
  background-color: ${(props) => props.theme.colors.almostWhite};
  display: flex;
  height: 100%;
  flex-direction: column;
  margin: 0px ${(props) => props.theme.spacing.md};
`;
const PageTopContent = styled.div`
  margin: 0px 12%;
`;
const PageOverview = styled.div`
  margin: 0px;
  ${(props) => props.theme.spacing.lg};
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
