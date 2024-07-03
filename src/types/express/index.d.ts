import { Pool } from "mysql2/promise";

declare module "express-serve-static-core" {
  interface Request {
    pool?: Pool;
  }
}
