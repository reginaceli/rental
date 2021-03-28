import "./utils/module-alias";
import express from "express";

import { categoriesRoutes } from "./routes/categoriesRoutes";
import { specificationsRoutes } from "./routes/specificationsRoutes";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(3335, () => console.log("server running"));
