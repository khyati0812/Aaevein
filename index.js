const heading = React.createElement(
  "h1",
  { id: "heading" },
  "This is the power of the react"
);
// console.log("hello");
// createRoot function create a root element for rendering a React application in the DOM.
const division = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Hi,Khyati!"),
    React.createElement("h2", {}, "Hello,Khyati!"),
  ])
);
console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render method converts the heading object(returned by the React.createElement) into the elements and renders into the root.
root.render(division);
