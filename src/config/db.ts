import { createPool, Pool } from "mysql2/promise";

export const pool1: Pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "test_database1",
});

export const pool2: Pool = createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "root",
  password: "",
  database: "test_database2",
});
