const { render, screen, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import Header from "../components/Header";
import appStore from "../store/appStore";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";

/*
As all tests are running inside the isolation we have to pass 
BrowserRouter, Redux Store etc.. if render component is accessing that
*/

test("should render Header component with a login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginBtn = screen.getByRole("button");
  const loginBtn = screen.getByRole("button", { name: "Login" });
  //   const loginBtn = screen.getByText("Login"); // another way to find element

  //Assertation
  expect(loginBtn).toBeInTheDocument();
});

test("should change Login button to Logout when click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  //   const loginBtn = screen.getByRole("button");
  const loginBtn = screen.getByRole("button", { name: "Login" });
  //   const loginBtn = screen.getByText("Login"); // another way to find element
  
  fireEvent.click(loginBtn); // by clicking login should change to logout
  
  const logOut = screen.getByRole("button", { name: "Logout" });

  //Assertation
  expect(logOut).toBeInTheDocument();
});

test("should render Header component with a cart", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText(/🛒/);

  //Assertation
  expect(cartItems).toBeInTheDocument();
});

test("should render Header component with a cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("🛒 0");

  //Assertation
  expect(cartItems).toBeInTheDocument();
});
