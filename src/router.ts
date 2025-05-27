import { Router } from "express";

const router = Router();

//Routing
router.get("/", (req, res) => {
  res.send("Index");
});
router.get("/about", (req, res) => {
  res.send("About");
});
router.get("/blog", (req, res) => {
  res.send("Blog");
});

export default router;
