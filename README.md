# << Namaste React 🔥🚀 >>

# Parcel 
#creating the dev build
npx parcel index.html 

#creating production ready build
npx parcel build index.html

// Parcel is bundler that helps to bundle the all required files and makes them produciton ready
-   Dev Build
-   Local server
-   HMR - (Hot module replacement) auto refresh the browser when file changes
-   File watching algorithm - written in C++
-   Caching - Faster builds
-   Image optimization
-   Minification
-   Bundling
-   Compressing
-   Error handling & diagnostic
-   Tree shaking (Removes the unused code)
-   Different dev and prod build

# babel
-   Babel is a JavaScript compiler (transpiler).
-   It converts modern JavaScript code or syntax into older JavaScript code that browser can understand
-   It converts JSX code into React.createElement() that can be understood by REACT

# default export/import
-   Only one default export per file
-   export default Component;
-   import Component from "path"

# named export/import
-   can be multiples in file
-   export const Component
-   import {Component} from "path"

# What is JSX & How Code is render on UI ?
-   JSX (JavaScript XML) ==> HTML-like syntax for creating elements
-   JSX --> Babel transpile it to React.createElement() --> ReactElement is object --> render() method converts object into HTML Element
-   ex: `const heading = <h1>Hello, world!</h1>;`  JSX code gets transpiled into standard JavaScript that the browser can understand: 
-   `const heading = React.createElement('h1', null, 'Hello, world!');`
-   `const root = ReactDOM.createRoot(document.getElementById("root"));`
-   `root.render(heading);`

# Types of React Component
-   Functional (Modern way most recommended) : It is javascript function that returns the piece of JSX code 
-   Class Based (older way ) : It is javascript class that extends React.Component 
        there should be render() method define in your class that returns JSX.

# React Hooks
-   Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
-   Ex: useState() , useEffect(), useContext()
-   Hooks should always be called at top of the React functional component.
-   State lives in React’s internal memory, NOT inside the function
-   useState() --> It is normal js function with react superpowers to sync of data layer and UI layer, componet will be re-render when state variable changes
-   useEffect(() => { ... }, [dependencies]); runs side effects after rendering the component.
    -   Without dependency array : Runs after every render.
    -   With dependency array : runs uns when dependencies changes
    -   [] empty dependency array : runs only once after the initial render.
-   The useEffect hook in React can return an optional cleanup function
    
# How React efficiently updates the Real DOM 
-   React uses a Fiber-based virtual DOM.
    - When state changes, `React schedules an update and re-renders the component to produce a new Fiber tree (new virtual DOM )`.
    - During reconciliation, React compares the new Fiber tree /virtual DOM with the previous one using a heuristic diffing algorithm.
    - React builds an effect list describing the minimal set of changes.
    - In the commit phase, React applies only those changes to the real DOM using native DOM APIs.

# State updates in React 
-   states are ASYNCHRONOUS and `State updates are SCHEDULED, not applied immediately `

# Shimmer UI: A Better Way to Show Loading States
-   A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.
-   when you need to show loading states in your app, consider using a shimmer UI instead of a spinner or a progress bar.

# CORS stands for Cross-Origin Resource Sharing.
-   A CORS issue happens when your browser blocks an API response because the request is made from a different origin than the server allows.
-   CORS is a browser security feature to prevent malicious websites from reading sensitive data from other websites.
-   CORS is enforced by browsers, not by fetch, not by server, not by Node.js
-   Fix by Using Proxy.

# Reat-Router
-   we have to use external libray for routing in react i.e react-router-dom
-   Never link route using anchor tag with href attribute in react, `<a href="/about">About</a>` 
    because when we click on href link new page is loaded but it refresh the page automatically
-   So it is recommended to use Link componet from react-router  `<Link to="/about">About</Link>` it load the page without refreshing

# Types of routing
-   Client side rounting : All the pages are compoents so based on routes that Component is render on UI this make the single page app in react. 
-   Server side rounting : Browser makes the https request to get the web page from server when user clicks on different routes 