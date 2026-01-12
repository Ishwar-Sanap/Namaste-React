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
-   React’s state hooks are tied to the component that calls the custom hook. When the state in the hook changes, React re-renders the parent component 
    updating the UI with the new data.
-   useRef() : 
    -   It is a hook that provides a way to access and interact with DOM elements or persist values across renders without causing re-renders.
    -   It returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
    -   The ref object remains the same between renders.
    -   Common use cases include accessing DOM elements directly, storing mutable values that do not trigger re-renders, and managing focus or text selection.
-  Custom Hooks: 
    -   Custom hooks can call other hooks (built-in or custom).
    -   It must follow the same rules as regular hooks (e.g., only call hooks at the top level of a function component or another hook).
    -   It should start with the word "use" to follow React's conventions and enable linting rules.
    -   IT can return anything (e.g., state variables, functions) just like regular components.
    -   IT help in reusing stateful logic across multiple components without duplicating code.
    -   IT do not have a render method and do not return JSX. They are purely for logic and state management.
    -   NOTE --> Those components that use the custom hook will re-render automatically when the state inside the custom hook changes.
-   Hooks must be called at the top level of a React function component or another custom hook. 
    They should not be called inside loops, conditions, or nested functions.
    # VVIMP NOTE 👉👉: Make sure that Hooks must always be called in same order in every render. This is why they should be at the top level of your component. 
    # If  you call them conditionally, or you have added some checks that return early, the order may change between renders and breaking the rules of hooks, and it will lead to bugs.


# UI Layer & Data Layer
-   When you build a React frontend app, it’s helpful to think in layers. Two of the most important ones are the UI layer and the Data layer. 
-   UI Layer : Focuses on rendering and user interaction. It receives data via props and renders JSX. (Props in → JSX out)  
-   Data Layer : Manages states, API calls, and business logic, custom hooks. It supplies data to the UI and reacts to user actions.

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

# Lazy loading / Dynamic import
-   All JS code goes as a single file to browser after bundling by bundler and if there are 1000+ componets in 
    our app them that single js file will be too large in size to process by browser and render the componets 

-   So to optimized performace we have to split some functionaliy of components into different bundles. is called as 
    code splitting, Chuncking ,lazy loading, dynamic loading, on demand loading , dynamic import
    `const About = lazy(() => import("./components/About")); `
    `<Suspense fallback={<h1>Loading...</h1>}> <About />{" "} </Suspense> `

# Higher Order Components 
-   Higher order component is a function that takes a component and returns a component. 
-   It takes a component as an input, enhances that component, adds some features into it and returns the component. 
-   Higher order components are pure functions because they do not change the existing behavior of the input component.

# Uncontrolled Components 
-   If a component is managing its own state and controlling the behavior on its own then the component will be known as Uncontrolled component. 

# Controlled Component 
-   If the state and behavior of a component is being managed by its parent component, then it is referred to as the controlled component 

# Context API
-   The Context API is a built-in React feature designed to share "global" data across a component tree without 
    having to pass props down manually at every level—a problem commonly known as prop drilling.
-   Prop drilling : Imagine you have a User object at the top of your app (App.js) and a Profile component deep inside the navigation bar. 
    To get the user data to the profile, you’d have to pass it through every intermediate component, even if they don't need it.
-   Steps: 
        `1)React.createContext():  Will create the context.`
        `2)Provider: This component wraps the part of your app that needs the data. It "provides" the value.`
        `3)useContext(): This is the hook used by any child component to "plug in" and pull the data out.`

-   When the value of a Provider changes, every component that uses useContext for that specific context will re-render.

# Redux Toolkit (State management library)
-  There are 2 libraries that Redux team offers: 
    1.  react-redux: This is like a bridge between React and Redux. 
    2.  Redux toolkit: This is a newer way of writing redux. This package is intended to be the standard way of writing Redux logic. 
-Redux Core Concepts
    1. Store: A single source of truth that holds the entire application state.
    2. Actions: Plain JavaScript objects that describe what happened (e.g., { type: "INCREMENT" })
    3. Reducers: Pure functions that take the current state and an action, then return a new state.
    4. Dispatch: A method to send actions to the store.
    5. Selectors: Functions that extract specific parts of the state from store.
-   useSelector & useDispatch – React hooks for accessing state and dispatching actions.
-   Components subscribed to the Redux store (via useSelector) will automatically re-render with the new state.
-   Great for large apps with complex state logic

# Types of Testing (Developer)
-   Unit Testing : (Testing individual components in isolation)
-   Integration Testing : (Testing the interaction between multiple components)
-   End to End Testing (e2e) : (Testing the entire application flow from start to finish)

# Setting up testing in our APP
-   Install React Testing Library
-   Install jest
-   Install Babel dependancies
-   Configure Babel (Add--> babel.config.js)
-   Configure Parcel config file to disable default transpilation (Add --> .parcelrc)
-   Jest configuration (npm init jest@latest)
-   Install JSDOM (npm i jest-environment-jsdom)
-   Install (npm i -D @babel/preset-react) to make JSX work in test cases
-   Include @babel/preset-react inside my babel config
-   Install (npm i -D @testing-library/jest-dom )  and use import "@testing-library/jest-dom" in tests files for Assertation
-   Add jest.setup.js file for resolving `ReferenceError: TextEncoder is not defined and update jest.config.js with setupFilesAfterEnv : ["./jest.setup.js"]`

# Writing Test Cases
-   Test cases are written inside __tests__ folder
-   Test file name should be ComponentName.test.js or ComponentName.spec.js
-   describe() : It is used to group related tests together
-   test() or it() : It is used to define an individual test case
-   render() : It is used to render a React component in a test environment
-   screen : It is a utility provided by React Testing Library to query elements rendered in the virtual DOM
-   query methods : 
    -   getByText, getByRole, getByTestId, queryByRole , etc. are used to select elements from the rendered component 
    -   getBy* methods throw an error if the element is not found, while queryBy* methods return null
-   expect() : It is used to create assertions about the expected outcome of a test
-   fireEvent : It is used to simulate user interactions like clicks, typing, etc.
-   render() from React Testing Library creates a new virtual DOM for each test.
    How it works:
    -   Each call to render() mounts your component into a fresh, isolated DOM container (using JSDOM, which simulates a browser environment in Node.js).
    -   This means the DOM state is reset for every test, so changes in one test do not affect another.
    -   However, if you share stateful objects (like a Redux store instance) across tests, that state can persist unless you create a new instance for each test.

# Async Testing
-   When testing asynchronous code, you often need to wait for certain conditions to be met before making assertions.
-   When your component uses fetch() or any async data fetching, you should mock the fetch call in your tests.
-   Use async/await with act() to ensure all updates are processed before assertions.
-   act() is a helper function from React Testing Library that ensures all updates related to your component (like state changes, effects, etc.) are processed before you make assertions.
