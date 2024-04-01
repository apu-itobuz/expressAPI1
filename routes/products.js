import { getAllProduct , getAllProductTesting } from "../controllers/products.js";
import { Router } from "express";
const prodRouter = Router()

prodRouter.route("/").get(getAllProduct)
prodRouter.route("/testing").get(getAllProductTesting)

export default prodRouter
