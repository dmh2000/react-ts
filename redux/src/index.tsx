import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import RepoList from "./components/repoList";

const App = () => {
  return (
    <Provider store={store}>
      <RepoList></RepoList>
    </Provider>
  );
};

const domNode = document.getElementById("root");
const root = createRoot(domNode as HTMLElement);
root.render(<App />);
