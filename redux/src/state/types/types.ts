enum SearchActionType {
  SEARCH_REPOSITORIES = "search_repositories",
  SEARCH_REPOSITORIES_SUCCESS = "search_repositories_success",
  SEARCH_REPOSITORIES_ERROR = "search_repositories_error",
}

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

export type RepoAction = SearchRepoAction | SearchRepoSuccess | SearchRepoError;

export interface RepoState {
  loading: boolean;
  error: string | null;
  data: string[];
}
