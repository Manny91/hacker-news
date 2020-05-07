import { getSelectedStoriesFromDictionary } from "./../store/stories.reducer";
import {
  getStoriesId,
  getStoriesError,
  getStoriesLoading,
} from "../store/stories.reducer";
import {
  performGetStoriesAction,
  performSelectStoriesAction,
  performGetStoriesDetailAction,
} from "../store/stories.actions";
import TopStoriesDashboardComponent from "./top-stories-dashboard.component";
import { AppDispatch, AppState } from "../../store";
import { connect } from "react-redux";
import { Story } from "../services/stories.service";

interface DispatchProps {
  getNews(): void;
  selectStories(stories: number[]): void;
}

interface MapStateToProps {
  storiesId: number[];
  error: string;
  loadingStories: boolean;
  selectedStories: Story[];
}

export type TopStoriesDashboardContainerProps = DispatchProps & MapStateToProps;

function mapStateToProps(state: AppState): MapStateToProps {
  return {
    storiesId: getStoriesId(state),
    error: getStoriesError(state),
    loadingStories: getStoriesLoading(state),
    selectedStories: getSelectedStoriesFromDictionary(state),
  };
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getNews: () => dispatch(performGetStoriesAction()),
  selectStories: (stories: number[]) => {
    dispatch(performGetStoriesDetailAction(stories));
    dispatch(performSelectStoriesAction(stories));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopStoriesDashboardComponent);
