import { BrowserRouter } from 'react-router-dom';

import { Content, SidebarMenu } from 'components';

import 'App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SidebarMenu />
        <Content />
      </BrowserRouter>
    </div>
  );
}

export default App;
