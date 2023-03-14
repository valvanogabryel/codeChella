import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes.js';
import ScrollToTop from 'components/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter >
      <ScrollToTop />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
