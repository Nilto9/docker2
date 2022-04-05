import { Router } from "express";

import * as Controller from "./controller";

const productosRouter = Router();

productosRouter.route("/").get(Controller.getProductos);

export default productosRouter;
