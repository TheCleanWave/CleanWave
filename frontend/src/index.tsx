import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const element: Element = document.getElementById("app") as Element;
const root = createRoot(element);
root.render(<App/>);