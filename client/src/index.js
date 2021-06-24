import React from "react";
import ReactDOM from "react-dom";

import { ContextProvider } from "./SocketContext";
import App from "./App";
import "./styles.css";

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}

ReactDOM.render(
    <ContextProvider>
        <App />
    </ContextProvider>,
    document.getElementById("root")
);
