import { SearchAction } from "../actions";
import { SearchActionType } from "./types";
import { RepoState } from "../types/types";

const initialState: RepoState = { error: null, loading: false, data: [] };

const reducer = (
  state: RepoState = initialState,
  action: SearchAction
): RepoState => {
  switch (action.type) {
    case SearchActionType.SEARCH_REPOSITORIES:
      return { loading: true, error: null, data: [] };
    case SearchActionType.SEARCH_REPOSITORIES_SUCCESS:
      return { loading: false, error: null, data: action.payload };
    case SearchActionType.SEARCH_REPOSITORIES_ERROR:
      return { loading: false, error: action.payload, data: [] };
    default:
      return state;
  }
};

export default reducer;
