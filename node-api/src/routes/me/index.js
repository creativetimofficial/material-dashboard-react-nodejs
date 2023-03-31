import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';

const router = express.Router();
import { getProfileRouteHandler, patchProfileRouteHandler } from "../../services/me";

// get user's profile
router.get("/", passport.authenticate('jwt',{session: false}), (req, res) => {
  getProfileRouteHandler(req, res);
});

// update user's profile
router.patch("/", passport.authenticate('jwt',{session: false}), async (req, res) => {
  patchProfileRouteHandler(req, res);
});

export default router;
