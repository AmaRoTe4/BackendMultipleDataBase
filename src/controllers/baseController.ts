import { Pool } from "mysql2/promise";

class BaseController {
  protected pool: Pool;

  constructor(pool: Pool) {
    this.pool = pool;
  }

  async executeQuery(sql: string, params?: any[]) {
    const [results] = await this.pool.execute(sql, params);
    return results;
  }

  async getAllDataCondition(table_name: string, condition?: string) {
    const sql = `SELECT * FROM ${table_name} ${
      condition ? `WHERE ${condition};` : ";"
    }`;
    return this.executeQuery(sql);
  }
}

export default BaseController;
