
// * En app.js se va a instanciar express
import express from "express";
// import user from "./user/network.js";
import { user, story, auth } from "./components";
import { checkToken } from "./auth";

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/user", checkToken, user);
app.use("/story", checkToken, story);
app.use("/auth", auth);