import { Main, List, LeftList, RightList } from "./Navbar.style.js";
import { Link, Route } from "react-router-dom";

import data from "../../Utils/Data.json";

const Navbar = () => {
  return (
    <Main>
      <LeftList>
        <li>TrueChan</li>
      </LeftList>
      <Route>
        <List>
          [
          {data.boards.map(({ name, id, description }) => (
            <li>
              <Link to={id}>/{id}</Link>
            </li>
          ))}
          <li>
            <Link to="/">/</Link>
          </li>
          ]
        </List>
      </Route>
      <RightList>
        <li>Conf</li>
        <li>Exit</li>
      </RightList>
    </Main>
  );
};

export default Navbar;
