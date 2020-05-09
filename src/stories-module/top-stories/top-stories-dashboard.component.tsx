import React, { useEffect, useState } from "react";
import { TopStoriesDashboardContainerProps } from "./top-stories-dashboard.container.component";
import { Table, Pagination, Divider, notification } from "antd";

import { Story } from "../services/stories.service";
import moment from "moment";
import styled from "../../styled-components";
import PageBanner from "../components/page-banner/page-banner";
import ListCards from "../components/list-cards/list-cards";
const TopStoriesDashboardComponent = ({
  storiesId,
  getNews,
  loadingStories,
  selectedStories,
  selectStories,
  loadingStoriesDetail,
  error,
}: TopStoriesDashboardContainerProps) => {
  const stepSize = 5;
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  const paginationChange = (page: number) => {
    setCurrentPageIndex(Math.max(0, page - 1));
  };

  const handleClickRow = ({ url }: Story) => {
    if (url) {
      window.open(url, "_blank");
    }
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
      render: (title: string) => (
        <TableStringLimiter> {title}</TableStringLimiter>
      ),
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
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
      render: (url: string) => <TableStringLimiter>{url}</TableStringLimiter>,
    },
  ];

  useEffect(() => {
    getNews();
  }, [getNews]);

  useEffect(() => {
    if (error && !selectedStories[0]) {
      notification["error"]({
        message: "Error!",
        description: error,
      });
    }
  }, [error, selectedStories]);
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
          <OverviewWrapper>
            <h2>Overview</h2>
            <div>
              <TimeFilterButton className="active">Today</TimeFilterButton>
              <TimeFilterButton>Yesterday</TimeFilterButton>
              <TimeFilterButton>Week</TimeFilterButton>
              <TimeFilterButton>Month</TimeFilterButton>
            </div>
          </OverviewWrapper>

          <ListCards />
        </PageOverview>
        <Divider></Divider>
      </PageTopContent>
      <TableNews
        loading={loadingStoriesDetail}
        pagination={false}
        columns={columnsData}
        dataSource={selectedStories.map((item, index) => {
          return { ...item, key: index };
        })}
        rowClassName="story-table-row"
        onRow={(record) => {
          return {
            onClick: () => {
              handleClickRow(record as Story);
            },
          };
        }}
      ></TableNews>

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
  @media ${(props) => props.theme.media.lg} {
    margin: 0px;
    padding: 15px;
  }
`;
const TableStringLimiter = styled.div`
  @media ${(props) => props.theme.media.md} {
    max-width: 260px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;
const PageTopContent = styled.div`
  margin: 0px 12%;
  @media ${(props) => props.theme.media.lg} {
    margin: 0px;
  }
`;
const PageOverview = styled.div`
  margin: 0px;
`;
const OverviewWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  @media ${(props) => props.theme.media.lg} {
    flex-direction: column;
  }
`;

const TimeFilterButton = styled.button`
  border: 0px;
  border-radius: ${(props) => props.theme.borders.normal};
  margin-right: ${(props) => props.theme.spacing.md};

  padding: 4px 15px;
  font-size: 12px;
  background-color: ${(props) => props.theme.colors.almostWhite};
  transform: perspective(1px) translateZ(0);
  transition-duration: 0.3s;
  transition-property: box-shadow;
  cursor: pointer;
  color: ${(props) => props.theme.colors.nearlyBlack};

  @media ${(props) => props.theme.media.lg} {
    margin-bottom: ${(props) => props.theme.spacing.sm};
  }
  &:last-child {
    margin-right: 0px;
  }
  &:hover,
  &.active {
    background-color: white;
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 10px 10px -12px rgba(0, 0, 0, 0.5);
  }
`;
const TimeDisplay = styled.div`
  width: 100px;
`;
const PaginationWrapper = styled.div`
  margin: ${(props) => props.theme.spacing.md};
  align-items: right;
  display: flex;
  justify-content: flex-end;
`;
const TableNews = styled(Table)`
  .ant-table {
    min-height: 330px;
  }
  tr > td,
  tr > th,
  tfoot > tr > td,
  tfoot > tr > th {
    padding: 15px;
  }
  @media ${(props) => props.theme.media.lg} {
    /* Force table to not be like tables anymore */
    table,
    thead,
    tbody,
    th,
    td,
    tr {
      display: block;
    }

    /* Hide table headers (but not display: none;, for accessibility) */
    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }

    tr {
      border: 1px solid #ccc;
    }

    td {
      /* Behave  like a "row" */
      border: none;
      border-bottom: 1px solid #eee;
      position: relative;
      padding-left: 50%;
    }

    td:before {
      /* Now like a table header */
      position: relativer;
      /* Top/left values mimic padding */
      top: 0px;
      left: 6px;
      width: 45%;
      padding-right: 10px;
      white-space: nowrap;
    }

    /*
	Label the data
	*/
    td:nth-of-type(1):before {
      content: "Author:";
    }
    td:nth-of-type(2):before {
      content: "Title:";
    }
    td:nth-of-type(3):before {
      content: "Score:";
    }
    td:nth-of-type(4):before {
      content: "Comments_count:";
    }
    td:nth-of-type(5):before {
      content: "Time:";
    }
    td:nth-of-type(6):before {
      content: "Url:";
    }
  }
`;
export default TopStoriesDashboardComponent;
