import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log("test app");
  res.status(200);
  res.json({
    message: "hello",
  });
});

export default app;
