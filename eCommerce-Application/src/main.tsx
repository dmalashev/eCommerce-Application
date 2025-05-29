import './assets/styles/modern-normalize.css';
import { createRoot } from 'react-dom/client';
import App from './app/App';
import { AuthProvider } from './app/AuthProvider';
import * as all from "../src/api/product/set-type-of-product"
all


createRoot(document.querySelector('body')!).render(
  <AuthProvider>
    <App />
  </AuthProvider>,
);
