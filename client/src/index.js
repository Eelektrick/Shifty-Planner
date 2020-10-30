import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from "@auth0/auth0-react";

const domain = 'scheduling.us.auth0.com';
const clientId = 'TaNNdVgbilHR0s6eTd3aT1Gi7jhXKa5Z';

ReactDOM.render(
    <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
    >
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </Auth0Provider>, 
    document.getElementById("root")
);