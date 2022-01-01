import {
  BrowserRouter as Router,
  useParams,
  useRouteMatch,
} from "react-router-dom";

import { Main } from "./Forum.style";

export const Forum = () => {
  let { url } = useRouteMatch();
  let { name } = useParams();

  return (
    <Main>
      <h2>{name}</h2>
      <p>{url}</p>
    </Main>
  );
};
