import { RequestHandler } from "express";
import _ from "lodash";
import * as Programmes from "../models/programme";

export const filter: RequestHandler = async (req, res, next) => {
    const query = req.query.q as string;

    try {
        const essays = await Programmes.filter(req.neo4j_session, query);
        res.json(essays);
    } catch (error) {
        next(error);
    }
};
