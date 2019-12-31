import React from 'react';
import './App.scss';
import {CssBaseline} from "@material-ui/core";
import AppBar from "./components/AppBar/AppBar";
import {Router, Switch} from "react-router";

interface AppProps {
    history: any
}

const App: React.FC<AppProps> = (props: AppProps) => {
    return (
        <Router history={props.history}>
            <div className="app-container">
                <CssBaseline/>

                <Switch>
                    {/*AppBar goes here*/}

                    <AppBar/>

                    {/*Content goes here*/}

                    {/*Footer goes here*/}
                </Switch>
            </div>
        </Router>
    );
}

export default App;
