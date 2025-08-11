import { Router } from "express";
import { createMovie } from "../../controller/v1/Movie/createMovie";
import { updateMovie } from "../../controller/v1/Movie/updateMovie";
import { getMovieById } from "../../controller/v1/Movie/getMovieById";
import { getAllMovie } from "../../controller/v1/Movie/getAllMovie";
import { validJwt } from '../../middlewares/authenticateJWT';
import { isAdmin } from '../../middlewares/authorizeAdmin';


const router = Router();

router.get("/",getAllMovie )
router.get("/:id", getMovieById)
router.post("/create",validJwt,isAdmin, createMovie)
router.put("/:id",validJwt,isAdmin, updateMovie)

export default router