import { useState } from "react";
import { useDispatch } from "react-redux";
import { useActions } from "../hooks/useActions";
import { searchRepos } from "../state/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepoList: React.FC = () => {
  const [repo, setRepo] = useState("");
  // const state: any = useSelector((state) => state);
  const state = useTypedSelector((state) => state);
  console.log(state);

  const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepo(e.target.value);
  };

  const dispatch = useDispatch();
  const OnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(searchRepos(repo) as any);
  };

  const { data, error, loading } = state.repositories;

  return (
    <form onSubmit={OnSubmit}>
      <input value={repo} onChange={onchange} />
      <button type="submit">Search</button>
      <div>
        {error && <h3>{error}</h3>}
        {loading && <h3>Loading...</h3>}
        {!error && !loading && data.map((name: string) => <div>{name}</div>)}
      </div>
    </form>
  );
};

export default RepoList;
