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

# React Hooks
-   Hooks are functions that let you "hook into" React state and lifecycle features from functional components.
-   Ex: useState() , useEffect(), useContext()
-   State lives in React’s internal memory, NOT inside the function
-   useState() --> It is normal js function with react superpowers to sync of data layer and UI layer
-   useEffect(() => { ... }, [dependencies]); runs side effects after rendering the component.


# Shimmer UI: A Better Way to Show Loading States
-   A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear.
-   when you need to show loading states in your app, consider using a shimmer UI instead of a spinner or a progress bar.

# CORS stands for Cross-Origin Resource Sharing.
-   A CORS issue happens when your browser blocks an API response because the request is made from a different origin than the server allows.
-   CORS is a browser security feature to prevent malicious websites from reading sensitive data from other websites.
-   CORS is enforced by browsers, not by fetch, not by server, not by Node.js
-   Fix by Using Proxy.