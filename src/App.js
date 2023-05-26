import { BrowserRouter } from 'react-router-dom';
import Pages from './pages/Pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
