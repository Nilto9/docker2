import { Router } from "express";

import * as Controller from "./controller";

const clientesRouter = Router();

clientesRouter.route("/").get(Controller.getClientes);

export default clientesRouter;
