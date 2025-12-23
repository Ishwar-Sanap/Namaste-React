/*

creating nested html structure using react

<div id="parent">
  <div id ="child"> 
    <h1> I'm h1 tag </h1>
    <h2> I'm h2 tag </h1>
  </div>
</div>

*/

const heading = React.createElement(
  "h1",
  { id: "heading", className: "highlight", abc: "dxy" },
  "Hello world using react.."
);

const nestedStr = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm h1 tag"),
    React.createElement("h2", {}, "I'm h2 tag"),
  ])
);

console.log(heading); // object
console.log(nestedStr); // object

const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(heading); // render method converting React element object into h1 tag that browser can understand..
root.render(nestedStr); // replace all the root div content with new html structure
