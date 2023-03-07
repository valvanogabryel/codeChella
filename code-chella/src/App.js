import { useEffect } from 'react';
import AppRoutes from './routes.js';

const App = () => {
  useEffect(() => {
    function preventHorizontalScroll(event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    }

    document.body.addEventListener('touchmove', preventHorizontalScroll, { passive: false });

    return () => {
      document.body.removeEventListener('touchmove', preventHorizontalScroll);
    }
  })

  return (
    <AppRoutes />
  );
}

export default App;
