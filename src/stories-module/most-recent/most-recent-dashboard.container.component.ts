import {
  getMostRecentStoriesId,
  getMostRecentStoriesLoading,
  getSelectedMostRecentStoriesFromDictionary,
  getLoadingStoriesDetail,
} from "../store/stories.reducer";
import { getStoriesError } from "../store/stories.reducer";
import {
  performGetStoriesDetailAction,
  performGetMostRecentStoriesAction,
  performSelectMostRecentStoriesAction,
} from "../store/stories.actions";
import { AppDispatch, AppState } from "../../store";
import { connect } from "react-redux";
import { Story } from "../services/stories.service";
import TopStoriesDashboardComponent from "../top-stories/top-stories-dashboard.component";

interface DispatchProps {
  getNews(): void;
  selectStories(stories: number[]): void;
}

interface MapStateToProps {
  storiesId: number[];
  error: string;
  loadingStories: boolean;
  selectedStories: Story[];
  loadingStoriesDetail: boolean;
}

export type TopStoriesDashboardContainerProps = DispatchProps & MapStateToProps;

function mapStateToProps(state: AppState): MapStateToProps {
  return {
    storiesId: getMostRecentStoriesId(state),
    error: getStoriesError(state),
    loadingStories: getMostRecentStoriesLoading(state),
    loadingStoriesDetail: getLoadingStoriesDetail(state),
    selectedStories: getSelectedMostRecentStoriesFromDictionary(state),
  };
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getNews: () => dispatch(performGetMostRecentStoriesAction()),
  selectStories: (stories: number[]) => {
    dispatch(performGetStoriesDetailAction(stories));
    dispatch(performSelectMostRecentStoriesAction(stories));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopStoriesDashboardComponent);
