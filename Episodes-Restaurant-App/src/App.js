import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router";
// import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Restaurant from "./components/Restaurant";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />{" "}
      {/* Outlet will be replaced by the specific children component based on the url path..  */}
      <Footer />
    </div>
  );
};

/*
All JS code goes as a single file to browser after bundling by bundler and if there are 1000+ componets in 
our app them that single js file will be too large in size to process by browser and render the componets 

so to optimized that we have to split some functionaliy of components into different bundles. is called as 
code splitting, Chuncking ,lazy loading, dynamic loading, on demand loading , dynamic import
*/

const About = lazy(() => import("./components/About"));

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <About />{" "}
          </Suspense>
        ),
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "restaurant/:restID",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={browserRouter} />);
