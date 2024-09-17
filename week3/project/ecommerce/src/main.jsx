import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FavoritesProvider } from './components/FavoritesContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FavoritesProvider>
    <App />
  </FavoritesProvider>
);