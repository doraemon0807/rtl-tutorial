import { render, screen } from "@testing-library/react";
import GetBy from "./GetBy";

test("제목이 있다", () => {
  render(<GetBy />);
  const titleEl = screen.getByRole("heading", {
    level: 1,
  });
  expect(titleEl).toBeInTheDocument();
});

test("Input 요소가 있다", () => {
  render(<GetBy />);

  //Role과 name으로 찾기
  const inputEl = screen.getByRole("textbox", {
    name: "이름",
  });

  //LabelText와 selector로 찾기
  const inputEl2 = screen.getByLabelText("자기소개", {
    selector: "textarea",
  });

  //DisplayValue로 찾기
  const inputEl3 = screen.getByDisplayValue("Tom");

  //TestId로 찾기 (testId를 직접 작성해야 하기 때문에 최후의 보루)
  const inputEl4 = screen.getByTestId("my-div");

  expect(inputEl).toBeInTheDocument();
  expect(inputEl2).toBeInTheDocument();
  expect(inputEl3).toBeInTheDocument();
  expect(inputEl4).toBeInTheDocument();
});
