import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes.js';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
