import React from 'react';
import { createRoot } from 'react-dom/client';
// eslint-disable-next-line
import 'swiper/swiper-bundle.css';
import App from './App.tsx';

// eslint-disable-next-line
const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(React.createElement(App));
