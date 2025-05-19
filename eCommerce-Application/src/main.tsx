import './assets/styles/modern-normalize.css';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { AuthProvider } from './app/AuthProvider';

createRoot(document.querySelector('body')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
