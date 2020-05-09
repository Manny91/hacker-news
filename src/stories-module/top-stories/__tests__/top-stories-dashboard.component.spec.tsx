import React from "react";
import TopStoriesDashboardComponent from "../top-stories-dashboard.component";
import { renderWithTheme } from "../../../utils/render-with-theme";
import { createEvent, act, wait } from "@testing-library/react";
import { Story, StoryType } from "../../services/stories.service";

describe("TopStoriesDashboardComponent", () => {
  beforeEach(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(),
        removeListener: jest.fn(),
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
  });

  it("should render properly", () => {
    const testProps = {
      storiesId: [],
      getNews: jest.fn(),
      loadingStories: false,
      selectedStories: [
        {
          by: "udgama",
          descendants: 0,
          id: 23124408,
          score: 1,
          time: 1589029751,
          title:
            "How loosely coupled independent teams can accelerate Product Development",
          type: "story" as StoryType,
          text: "",
          kids: [1, 2, 3, 4, 5, 6],
          url:
            "https://medium.com/udgama-engineering/independent-teams-for-software-product-development-e09db0762d8b",
        },
        {
          by: "udgama2",
          descendants: 0,
          id: 23124409,
          score: 1,
          time: 1589029751,
          title:
            "How loosely coupled independent teams can accelerate Product Development",
          type: "story" as StoryType,
          text: "",
          kids: [1, 2, 3, 4, 5, 6],
          url:
            "https://medium.com/udgama-engineering/independent-teams-for-software-product-development-e09db0762d8b",
        },
        {
          by: "udgama3",
          descendants: 0,
          id: 23124410,
          score: 1,
          time: 1589029751,
          title:
            "How loosely coupled independent teams can accelerate Product Development",
          type: "story" as StoryType,
          text: "",
          kids: [1, 2, 3, 4, 5, 6],
          url:
            "https://medium.com/udgama-engineering/independent-teams-for-software-product-development-e09db0762d8b",
        },
        {
          by: "udgama4",
          descendants: 0,
          id: 23124411,
          score: 1,
          time: 1589029751,
          title:
            "How loosely coupled independent teams can accelerate Product Development",
          type: "story" as StoryType,
          text: "",
          kids: [1, 2, 3, 4, 5, 6],
          url:
            "https://medium.com/udgama-engineering/independent-teams-for-software-product-development-e09db0762d8b",
        },
        {
          by: "udgama5",
          descendants: 0,
          id: 23124412,
          score: 1,
          time: 1589029751,
          title:
            "How loosely coupled independent teams can accelerate Product Development",
          type: "story" as StoryType,
          text: "",
          kids: [1, 2, 3, 4, 5, 6],
          url:
            "https://medium.com/udgama-engineering/independent-teams-for-software-product-development-e09db0762d8b",
        },
      ],
      selectStories: jest.fn(),
      loadingStoriesDetail: false,
      error: "",
    };

    const subject = renderWithTheme(
      <TopStoriesDashboardComponent {...testProps} />
    );
    const tree = subject.container;
    expect(tree).toMatchSnapshot();
  });

  it("should performGetNews on first render", () => {
    const testProps = {
      storiesId: [],
      getNews: jest.fn(),
      loadingStories: false,
      selectedStories: [],
      selectStories: jest.fn(),
      loadingStoriesDetail: false,
      error: "",
    };

    renderWithTheme(<TopStoriesDashboardComponent {...testProps} />);
    expect(testProps.getNews).toHaveBeenCalled();
  });

  it("should select next 5 stories when clicking on pagination next", async () => {
    const testProps = {
      storiesId: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],
      getNews: jest.fn(),
      loadingStories: false,
      selectedStories: [],
      selectStories: jest.fn(),
      loadingStoriesDetail: false,
      error: "",
    };
    const { getByTestId } = renderWithTheme(
      <TopStoriesDashboardComponent {...testProps} />
    );

    const pagination = getByTestId("pagination");

    const next = pagination.lastChild as Node;
    createEvent.click(next);
    wait(() => {
      expect(testProps.selectStories).toHaveBeenCalledWith([6, 7, 8, 9, 10]);
    });
    createEvent.click(next);
    wait(() => {
      expect(testProps.selectStories).toHaveBeenCalledWith([
        10,
        11,
        12,
        13,
        14,
        15,
      ]);
    });
  });
});
