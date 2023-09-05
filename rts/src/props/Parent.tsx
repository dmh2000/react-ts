import { on } from "events";
import Child from "./Child";

const Parent = () => {
  const onclick = () => {
    console.log("clicked");
  };

  return (
    <Child color="blue" onclick={onclick}>
      click me xxx
    </Child>
  );
};

export default Parent;
