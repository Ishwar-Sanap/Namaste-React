import React from "react";
import ReactDOM from "react-dom/client";

//React element
const heading = React.createElement(
  "h1",
  { className: "highlight" },
  "Namaste React.."
);
console.log(heading);

// JSX (JavaScript XML) ==> HTML-like syntax
// JSX --> Babel transpile it to React.createElement() --> ReactElement object --> HTMLElement Render()
const jsxHeading = <h1 className="highlight">React using JSX 🔥</h1>;
console.log(jsxHeading);

/*
//React Components: 
Class Based : Old way
Functional component : Modern way (most dev uses) 
*/

//Functional components is JavaScripts function that return the piece of JSX code..
function HeadingComponent() {
  return (
    <div className="container">
      <h1 >React functional component.. </h1>
    </div>
  );
}

const HeroSection = () => {
  return (
    <div>
        {jsxHeading}  {/*Inside curly braces we can write any javascript syntax..*/}

        <HeadingComponent /> {/*Component Composition --> composing one or more other component in single component..*/}
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}

        {/* All above are the different ways to use fuctional components */}
        
      <p>Hero section</p>

    </div>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading)
//root.render(jsxHeading); // rendering React Element
root.render(<HeroSection />); // rendering React component
