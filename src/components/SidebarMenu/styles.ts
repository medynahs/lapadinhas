import styled from 'styled-components';

export const MenuAside = styled.aside`
  display: flex;

  flex-basis: 250px;
  /* min-width: 250px; */

  background-color: #1e90ff;

  nav {
    flex: 1;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    display: flex;
  }

  li a {
    display: flex;
    justify-content: center;

    flex: 1;

    padding: 10px;
    margin-bottom: 10px;

    text-decoration: none;
    color: #fff;
    font-size: 1.5rem;

    li a:hover {
      background-color: #00000030;
    }
  }
`;
