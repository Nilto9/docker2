import express from "express";
import { productos,clientes } from "./components";

export const app = express();
// * middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/productos", productos);
app.use("/clientes", clientes);

