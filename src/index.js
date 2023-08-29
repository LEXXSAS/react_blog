import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider, useQuery} from 'react-query'
// import { Provider } from 'react-redux';


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
// import './mentorseven/index.css'
// import './style.css'
// import App from './App';

// import './tutorial-4-gen-phrases/App.css'
// import App from './tutorial-1/App'
// import App from './tutorial-2/App'
// import App from './tutorial-5/App'
// import App from './mentor/App'
// import App from './useref/App'
// import App from './tutorial-3/App'
// import App from './mentortwo/App'
// import App from './mentorthree/App'
import App from './mentorseven/App'
// import App from './mentorfour/App'
// import App from './mentor-scss/App'
// import App from './mentrofive-usecontext/App'
// import App from './tutorial-4-gen-phrases/App'

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
        <HashRouter>
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>
        </HashRouter>
    // </React.StrictMode>
);
