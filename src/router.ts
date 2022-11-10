import { Router } from "express";

const router = Router();
//product
router.get("/product", (req, res) => {
  res.status(200);
  res.json({
    message: "hello",
  });
});
router.get("/product/:id", () => {});
router.put("/product/:id", () => {});
router.post("/product/", () => {});
router.post("/product/:id", () => {});
router.delete("/product/:id", () => {});
//Update
router.get("/update", () => {});
router.get("/update/:id", () => {});
router.put("/update/:id", () => {});
router.post("/update/", () => {});
router.post("/update/:id", () => {});
router.delete("/update/:id", () => {});

export default router;
