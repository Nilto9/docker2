import { Router } from "express";
import * as Controller from "./controller";

const storyRouter = Router();

storyRouter.route("/").get(Controller.index);
storyRouter.route("/").post(Controller.store);
storyRouter.route("/update/:id").put(Controller.update);
storyRouter.route("/delete/:id").delete(Controller.destroy);

export default storyRouter;