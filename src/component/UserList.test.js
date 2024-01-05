import { render, screen } from "@testing-library/react";
import UserList from "./UserList";

describe("UserList test", () => {
  const users = ["Tom", "Jane", "Mike"];
  test("ul이 있다", () => {
    render(<UserList users={users} />);
    //getBy throws error when element is not found
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("li는 3개가 나옵니까?", () => {
    render(<UserList users={[]} />);
    //queryBy returns empty array or null when element is not found
    const liElements = screen.queryAllByRole("listitem");
    expect(liElements).toHaveLength(0);
  });

  test("잠시 후 제목이 나타납니다", async () => {
    render(<UserList users={users} />);
    //findBy works with async, returns promise
    const titleEl = await screen.findByRole(
      "heading",
      {
        name: "사용자 목록",
      },
      {
        timeout: 2000, //default to 1000
      }
    );
    expect(titleEl).toBeInTheDocument();
  });
});
