import { Request, Response, NextFunction } from "express";
import { pool1, pool2 } from "../config/db";

export function databaseSelector(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const dbName = req.headers["x-database-name"] as string;

  if (!dbName) {
    return res.status(400).json({ error: "Database name header is missing" });
  }

  switch (dbName) {
    case "test_database1":
      //@ts-ignore
      req.pool = pool1;
      break;
    case "test_database2":
      //@ts-ignore
      req.pool = pool2;
      break;
    default:
      return res.status(400).json({ error: "Invalid database name" });
  }

  next();
}
