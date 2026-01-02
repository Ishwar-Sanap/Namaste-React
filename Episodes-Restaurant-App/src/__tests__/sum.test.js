import sum from "../utils/sum";

test("Sum function should calculate sum of 2 numbers", () => {
  //calling function
  const result = sum(10, 20);

  //validating results

  //Writing Assertions...
  expect(result).toBe(30);
});
