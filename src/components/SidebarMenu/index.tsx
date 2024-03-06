import './styles.css';

import { Link } from 'react-router-dom';

const SidebarMenu = () => {
  return (
    <aside className="Menu">
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
    </aside>
  );
};

export { SidebarMenu };
