import { Story } from "../services/stories.service";
import {
  getStoriesId,
  getStoriesError,
  getStoriesLoading,
} from "../store/stories.reducer";
import { performGetStoriesAction } from "../store/stories.actions";
import TopStoriesDashboardComponent from "./top-stories-dashboard.component";
import { AppDispatch, AppState } from "../../store";
import { connect } from "react-redux";

interface DispatchProps {
  getNews(): void;
}

interface MapStateToProps {
  storiesId: number[];
  error: string;
  loading: boolean;
}

export type TopStoriesDashboardContainerProps = DispatchProps & MapStateToProps;

function mapStateToProps(state: AppState): MapStateToProps {
  return {
    storiesId: getStoriesId(state),
    error: getStoriesError(state),
    loading: getStoriesLoading(state),
  };
}

const mapDispatchToProps = (dispatch: AppDispatch): DispatchProps => ({
  getNews: () => dispatch(performGetStoriesAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopStoriesDashboardComponent);
