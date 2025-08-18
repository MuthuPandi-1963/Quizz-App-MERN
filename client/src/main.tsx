import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import 'antd/dist/reset.css'; 
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/redux/store.tsx';
createRoot(document.getElementById('root')!).render(
  
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  </Provider>
)
