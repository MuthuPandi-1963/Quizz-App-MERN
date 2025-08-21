import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import 'antd/dist/reset.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { MessageContextProvider } from './store/context/MsgContext';

createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <MessageContextProvider>
        <App />
      </MessageContextProvider>
    </BrowserRouter>,
  </Provider>
)
