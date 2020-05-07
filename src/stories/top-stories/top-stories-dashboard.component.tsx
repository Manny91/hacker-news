import React, { useEffect, useState } from "react";
import { TopStoriesDashboardContainerProps } from "./top-stories-dashboard.container.component";
import { Table, Pagination } from "antd";

import { Story } from "../services/stories.service";
import moment from "moment";
import styled from "../../styled-components";

const TopStoriesDashboardComponent = ({
  storiesId,
  getNews,
  loadingStories,
  selectedStories,
  selectStories,
}: TopStoriesDashboardContainerProps) => {
  const stepSize = 10;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);
  const [data, setData] = useState([] as Story[]);

  const paginationChange = (page: number) => {
    setCurrentPageIndex(Math.max(0, page - 1));
  };

  const handleClickRow = (story: Story) => {
    console.log("click", story);
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
    console.log("selectedStories", selectedStories);
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
    <>
      <div>Top Stories Dashboard Component</div>
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
      <Pagination
        current={currentPageIndex + 1}
        total={storiesId.length}
        showSizeChanger={false}
        onChange={paginationChange}
      ></Pagination>
    </>
  );
};

const TimeDisplay = styled.div`
  width: 100px;
`;
export default TopStoriesDashboardComponent;
