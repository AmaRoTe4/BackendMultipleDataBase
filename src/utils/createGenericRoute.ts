import { Express, Request, Response } from "express";
import { databaseSelector } from "../middleware/databaseSelector";
import BaseController from "../controllers/baseController";

export function createGenericRoute({
  app,
  path,
  tableName,
}: {
  app: Express;
  path: string;
  tableName: string;
}) {
  app.get(path, databaseSelector, async (req: Request, res: Response) => {
    //@ts-ignore
    if (!req?.pool) {
      return res
        .status(500)
        .json({ error: "Database connection pool not found" });
    }

    //@ts-ignore
    const controller = new BaseController(req.pool);

    try {
      const results = await controller.getAllDataCondition(tableName);
      res.json(results);
    } catch (error: any) {
      res.status(500).json({ error: error.message });
    }
  });
}
