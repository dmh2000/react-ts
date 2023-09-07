import { SearchActionType } from "../reducers/types";

interface SearchRepoAction {
  type: SearchActionType.SEARCH_REPOSITORIES;
}

interface SearchRepoSuccess {
  type: SearchActionType.SEARCH_REPOSITORIES_SUCCESS;
  payload: string[];
}

interface SearchRepoError {
  type: SearchActionType.SEARCH_REPOSITORIES_ERROR;
  payload: string;
}

export type SearchAction =
  | SearchRepoAction
  | SearchRepoSuccess
  | SearchRepoError;
