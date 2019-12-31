import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import {MuiThemeProvider} from "@material-ui/core";
import {camtuTheme} from "./styles/camtuTheme";
import App from "./App";
import {createBrowserHistory} from "history";

const history = createBrowserHistory();

const renderApp = (Component: any) => (
    <MuiThemeProvider theme={camtuTheme}>
        <Component history={history}/>
    </MuiThemeProvider>
);


const startApp = () => ReactDOM.render(renderApp(App), document.getElementById('root'));

startApp();

