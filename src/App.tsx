import React from 'react';
import './App.scss';
import {CssBaseline} from "@material-ui/core";
import AppBar from "./components/AppBar/AppBar";
import {Router} from "react-router";
import Footer from "./components/Footer/Footer";

interface AppProps {
    history: any
}

const App: React.FC<AppProps> = (props: AppProps) => {
    return (
        <Router history={props.history}>
            <CssBaseline/>
            <div className="app-container">

                {/*AppBar goes here*/}

                <AppBar/>

                {/*Content goes here*/}

                <main>
                    Content goes here ...
                </main>
                {/*Footer goes here*/}
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
