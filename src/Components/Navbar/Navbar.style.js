import styled from "styled-components";

export const Main = styled.div`
  display: flex;
  flex-direction: row;
  flex-flow: no-wrap;
  justify-content: space-between;

  background: #282c34;
  color: white;
  text-align: center;
`;

export const List = styled.ul`
  li {
    padding: 1rem;
    display: inline;
  }

  a {
    text-decoration: none;
    color: #efe6bd;

    :hover {
      color: #c8c09e;
    }
  }
`;

export const LeftList = styled.ul`
  li {
    padding: 1rem;
    display: inline;
  }

  a {
    text-decoration: none;
    color: #efe6bd;

    :hover {
      color: #c8c09e;
    }
  }
`;

export const RightList = styled.ul`
  li {
    padding: 1rem;
    display: inline;
  }

  a {
    text-decoration: none;
    color: #efe6bd;

    :hover {
      color: #c8c09e;
    }
  }
`;
