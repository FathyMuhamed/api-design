import express from "express";
import router from "./router";
import morgan from "morgan";
const app = express();
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  console.log("test app");
  res.status(200);
  res.json({
    message: "hello",
  });
});

//api/product ... or something like that.
app.use("/api", router);
export default app;
