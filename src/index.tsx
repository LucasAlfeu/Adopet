import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'normalize.css'
import { RecoilRoot } from 'recoil'
import AppRoute from 'routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppRoute />
    </RecoilRoot>      
  </React.StrictMode>
);
