import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.scss';

import {MuiThemeProvider} from "@material-ui/core";
import {camtuTheme} from "./styles/camtuTheme";
import App from "./App";


const renderApp = (Component: any) => (
    <MuiThemeProvider theme={camtuTheme}>
        <Component />
    </MuiThemeProvider>
);


const startApp = () => ReactDOM.render(renderApp(App), document.getElementById('root'));

startApp();

