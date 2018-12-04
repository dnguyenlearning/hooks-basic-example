import React from "react";
import { render } from "react-dom";
import App from "./app";
import WrapperProvider from "./contexts"
render(<WrapperProvider>
    <App/>
</WrapperProvider>, document.getElementById("root"))