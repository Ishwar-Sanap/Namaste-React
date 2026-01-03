import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../components/Body";
import { BrowserRouter } from "react-router";
import "@testing-library/jest-dom";
import MOCK_RESTAURANTS from "../mocks/restauranntsMock.json";
import { act } from "react";

/*
jest provides function that run before, after each test case or once before all test cases or once after all test cases
We have to group them inside describe block if we want to use them for specific test suite only.

describe("Body Component Test Suite", () => {

beforeEach(() => {
//runs before each test case
}); 

afterEach(() => {
    jest.clearAllMocks();
});

beforeAll(() => {
    jest.clearAllMocks();
});

afterAll(() => {
    //runs once after all test cases
});

});

*/

//When your component uses fetch() or any async data fetching, you should mock the fetch call in your tests.
global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANTS);
    },
  });
});

/*
    When testing, code that causes React state updates should be wrapped into act(...):

    act(() => {
    //fire events that update state 
    });
*/
test("should serach resturant list for Pizza text input", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //   const seachInputBox = screen.getByPlaceholderText("Search restaurants");
  // expect(seachInputBox).toBeInTheDocument();
  //or
  const serachBox = screen.getByTestId("serachInput"); // as we have added data-testid attribute to input element it can be used to select the element in test
  const serchBtn = screen.getByRole("button", { name: "Search" });
  expect(serachBox).toBeInTheDocument();
  expect(serchBtn).toBeInTheDocument();

  const cardsBeforeSerach = screen.getAllByTestId("restoCard");
  expect(cardsBeforeSerach.length).toBe(8);

  //Simulating the search like browser in jest-dom
  fireEvent.change(serachBox, { target: { value: "Pizza" } }); //  {target : {value : "Pizza"}} this is like event (e) object
  fireEvent.click(serchBtn);

  const cardsAfterSerach = screen.getAllByTestId("restoCard");
  expect(cardsAfterSerach.length).toBe(1);
});

test("should filter top rated restaurants list on click", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  const cardsBeforeFilter = screen.getAllByTestId("restoCard");
  expect(cardsBeforeFilter.length).toBe(8);

  const topRestBtn = screen.getByRole("button", {
    name: "Top rated resturants",
  });

  fireEvent.click(topRestBtn);

  const cardsAfterFilter = screen.getAllByTestId("restoCard");
  expect(cardsAfterFilter.length).toBe(6);
});