import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {CssBaseline} from "@material-ui/core";
import AppBar from "./components/AppBar/AppBar";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CssBaseline />
        {/*AppBar goes here*/}

        <AppBar />

        {/*Content goes here*/}

        {/*Footer goes here*/}
    </div>
  );
}

export default App;
