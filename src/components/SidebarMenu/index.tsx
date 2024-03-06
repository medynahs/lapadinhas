import { MenuAside } from './styles';

import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <MenuAside>
      <nav>
        <ul>
          <li>
            <Link to="/">Painel</Link>
          </li>
          <li>
            <Link to="/">Caixa</Link>
          </li>
          <li>
            <Link to="/">Inventário</Link>
          </li>
        </ul>
      </nav>
    </MenuAside>
  );
};

export { SidebarMenu };
