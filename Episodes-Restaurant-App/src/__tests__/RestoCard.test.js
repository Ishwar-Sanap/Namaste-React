import { render, screen } from "@testing-library/react";
import RestoCard, { restoCardWithDiscount } from "../components/RestoCard";
import restaurantData from "../mocks/restoCardMock.json";
import "@testing-library/jest-dom";

test("should render RestoCard component with props data", () => {
  render(<RestoCard restData={restaurantData} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});

test("should render RestoCard Discount component with props data", () => {
  const RestoCardDiscounted = restoCardWithDiscount(RestoCard);
  render(<RestoCardDiscounted restData={restaurantData} />);

  const discount = screen.getByText("ITEMS AT ₹49");

  expect(discount).toBeInTheDocument();
});
