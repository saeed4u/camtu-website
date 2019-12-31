import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {CssBaseline} from "@material-ui/core";
import Header from "./components/Header/Header";

const App: React.FC = () => {
  return (
    <div className="app-container">
      <CssBaseline />
        {/*Header goes here*/}

        <Header />

        {/*Content goes here*/}

        {/*Footer goes here*/}
    </div>
  );
}

export default App;
