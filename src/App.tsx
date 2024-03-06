import { BrowserRouter } from 'react-router-dom';

import { Content, SidebarMenu } from 'components';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <SidebarMenu />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
