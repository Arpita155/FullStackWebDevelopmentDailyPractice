import React from "react"
import ReactDOM from "react-dom/client"

// const heading = React.createElement("h1",{},"Hello from react")
// const input = React.createElement("input",{placeholder : "Enter name "})

// const main = React.createElement("div",{},[heading,input])

const main = <div className="">
    <h1>Hello from React</h1>
    <h3>This is arpita</h3>
    <img src=""></img>
</div>

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(main)


