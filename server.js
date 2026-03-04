import express from "express";
import cors from "cors";
import compareRoutes from "./routes/compare.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/compare", compareRoutes);

app.listen(4000, () =>
  console.log("Server running on port 4000")
);