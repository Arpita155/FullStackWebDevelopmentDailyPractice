import React from "react"
import ReactDOM from "react-dom/client"

const heading = React.createElement("h1",{},"Hello from react")
const input = React.createElement("input",{placeholder : "Enter name "})

const main = React.createElement("div",{},[heading,input])

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(main)