import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../components/Cart";
import appStore from "../store/appStore";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router";
import { Provider } from "react-redux";
import MOCK_RESTAURANTS from "../mocks/restauranntsMock.json";
import "@testing-library/jest-dom";
import { act } from "react";
import Body from "../components/Body";
import Restaurant from "../components/Restaurant";
import Header from "../components/Header";

//  When your component uses fetch() or any async data fetching, you should mock the fetch call in your tests.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANTS);
    },
  });
});

it("should first render Your cart is empty", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Cart />
      </Provider>
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", { name: "Your cart is empty" });

  expect(heading).toBeInTheDocument();
});

it("should render restaurant menu list from given path URL ", async () => {
  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/224399"]}>
        <Provider store={appStore}>
          <Routes>
            <Route path="restaurant/:restID" element={<Restaurant />} />
          </Routes>
          <Cart />
        </Provider>
      </MemoryRouter>
    );
  });

  const restoHeading = screen.getByRole("heading", { name: "Pizza Hut" });
  expect(restoHeading).toBeInTheDocument();

  const allMenuItems = screen.getAllByTestId("MenuItem");

  expect(allMenuItems.length).toBe(8);
});

//Note :
/*
Redux store (appStore) is created once and shared across all tests. So, state changes in one test persist into the next test unless you reset the store between tests.
Why?
appStore is imported from a module and reused in every test.
Redux store is a singleton in your test file, so its state is shared.
*/

it("should Increase the Cart items when clicked add btn", async () => {
  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/224399"]}>
        <Provider store={appStore}>
          <Routes>
            <Route path="restaurant/:restID" element={<Restaurant />} />
          </Routes>
          <Header />
          <Cart />
        </Provider>
      </MemoryRouter>
    );
  });

  const addBtn = screen.getAllByRole("button", { name: "Add" });
  expect(addBtn[0]).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  const cartItems1 = screen.getByText("🛒 1");
  expect(cartItems1).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  const cartItems2 = screen.getByText("🛒 2");
  expect(cartItems2).toBeInTheDocument();
});

it("should clear the Cart items when clicked clear cart btn", async () => {
  await act(async () => {
    render(
      <MemoryRouter initialEntries={["/restaurant/224399"]}>
        <Provider store={appStore}>
          <Routes>
            <Route path="restaurant/:restID" element={<Restaurant />} />
          </Routes>
          <Header />
          <Cart />
        </Provider>
      </MemoryRouter>
    );
  });

  const addBtn = screen.getAllByRole("button", { name: "Add" });
  expect(addBtn[0]).toBeInTheDocument();

  fireEvent.click(addBtn[0]);

  const cartItems1 = screen.getByText("🛒 3");
  expect(cartItems1).toBeInTheDocument();

  fireEvent.click(addBtn[1]);

  const cartItems2 = screen.getByText("🛒 4");
  expect(cartItems2).toBeInTheDocument();

  const headingBefore = screen.queryByRole("heading", { name: "Your cart is empty" });
  expect(headingBefore).not.toBeInTheDocument();
  
  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn); // Clicking the button

  const headingAfter = screen.getByRole("heading", { name: "Your cart is empty" });
  expect(headingAfter).toBeInTheDocument();
});


/*
- `getByRole` throws an error if the element is not found. Use it when you expect the element to be present.
- `queryByRole` returns `null` if the element is not found. Use it when the element might not be in the DOM (e.g., before or after a conditional render).

Use `queryByRole` for negative assertions (e.g., expect it not to be in the document), and `getByRole` for positive assertions (e.g., expect it to be in the document).
*/