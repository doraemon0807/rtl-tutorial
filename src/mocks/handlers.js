import { HttpResponse, http } from "msw";

export const handlers = [
  http.get("https://jsonplaceholder.typicode.com/todos", () => {
    return HttpResponse.json([
      {
        id: 1,
        title: "청소",
        completed: true,
      },
      {
        id: 2,
        title: "설거지",
        completed: true,
      },
      {
        id: 3,
        title: "숙제",
        completed: true,
      },
    ]);

    //   return res(
    //       ctx.status(200),
    //       ctx.json([
    //         {
    //           id: 1,
    //           title: "청소",
    //           completed: true,
    //         },
    //         {
    //           id: 2,
    //           title: "설거지",
    //           completed: true,
    //         },
    //         {
    //           id: 3,
    //           title: "숙제",
    //           completed: true,
    //         },
    //       ])
    //     );
  }),
];
