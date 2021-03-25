import "./utils/module-alias";
import { categoriesRoutes } from "@src/routes/categoriesRoutes";
import express from "express";

const app = express();

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(3335, () => console.log("server running"));
