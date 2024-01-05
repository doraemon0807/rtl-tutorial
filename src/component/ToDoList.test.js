import { render, screen } from "@testing-library/react";
import TodoList from "./ToDoList";

describe("Todo List", () => {
  test("Todo라는 제목이 있다", () => {
    render(<TodoList />);
    const titleEl = screen.getByText("Todo");
    expect(titleEl).toBeInTheDocument();
  });

  test("리스트가 잘 나온다. (3개)", async () => {
    render(<TodoList />);
    const list = await screen.findAllByRole("listitem");
    expect(list).toHaveLength(3);
  });
});
