import * as React from "jsx-dom"
import { Banner } from "../components/banner";

console.log('Example JSX based Extension loaded');

document.body.appendChild(
    <Banner 
        message="The extension loaded successfully"
        subtext="Star the project if you like it"
    ></Banner>
)