import React, { useEffect } from "react";
import { TopStoriesDashboardContainerProps } from "./top-stories-dashboard.container.component";

const TopStoriesDashboardComponent = ({
  storiesId,
  getNews,
}: TopStoriesDashboardContainerProps) => {
  useEffect(() => {
    getNews();
  }, []);
  return (
    <>
      <div>Top Stories Dashboard Component</div>
      <div>
        {storiesId.map((storyId) => (
          <div key={storyId}>{storyId}</div>
        ))}
      </div>
    </>
  );
};

export default TopStoriesDashboardComponent;
