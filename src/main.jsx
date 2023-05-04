import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider} from 'react-redux'
import {store} from './store'
import { ConfigProvider  } from 'antd'
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PersistGate persistor={persistor}>
      <Provider store={ store }>
        {/* AQUÍ SE CONFIGURA EL COLOR PRIMARIO DE LOS COMPONENTES DE ANT DESING */}
        <ConfigProvider theme={{
          token: {
            colorPrimary: '#D5007F',
            colorLink:'#D5007F',
            colorLinkHover: '#d457a1',
            colorLinkActive: '#b0026a'
          },
        }}>
          <App />
        </ConfigProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>,
)
