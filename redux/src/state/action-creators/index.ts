import axios from "axios";
import { Dispatch } from "redux";
import { SearchActionType } from "../reducers/types";
import { RepoAction } from "../types/types";

export const searchRepos = (searchTerm: string) => {
  return async (dispatch: Dispatch<RepoAction>) => {
    dispatch({
      type: SearchActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(
        `https://registry.npmjs.org/-/v1/search?text=${searchTerm}`
      );
      const names = data.objects.map((result: any) => {
        return result.package.name;
      });

      dispatch({
        type: SearchActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: names,
      });
    } catch (err: any) {
      dispatch({
        type: SearchActionType.SEARCH_REPOSITORIES_ERROR,
        payload: err.message,
      });
    }
  };
};
