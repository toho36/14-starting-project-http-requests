import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';
import Search from './components/Search';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Search />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
