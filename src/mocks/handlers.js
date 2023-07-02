import { rest } from "msw";

export const handlers = [
  rest.get("/api/data", (req, res, ctx) => {
    const data = JSON.parse(localStorage.getItem("netix"));

    if (data) {
      return res(ctx.json(data));
    } else {
      return res(
        ctx.json([
          { type: "bank-draft", title: "Bank Draft", position: 0 },
          { type: "bill-of-lading", title: "Bill of Lading", position: 1 },
          { type: "invoice", title: "Invoice", position: 2 },
          { type: "bank-draft-2", title: "Bank Draft 2", position: 3 },
          { type: "bill-of-lading-2", title: "Bill of Lading 2", position: 4 },
        ])
      );
    }
  }),

  rest.post("/api/data", (req, res, ctx) => {
    const newData = req.body;
    localStorage.setItem("netix", JSON.stringify(newData));
    return res(ctx.json(newData));
  }),
];
