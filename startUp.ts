import * as express from "express";

import Database from "./infra/db";

class StartUp {
  public app: express.Application;
  private _db: Database;

  constructor() {
    this.app = express();
    this._db = new Database();
    this._db.createConnection();
    this.routes();
  }

  routes() {
    this.app.route("/").get((req, res) => {
      res.send({
        author: "Wendreo L. Fernandes",
        updatedAt: "09/16/19",
        version: "0.0.0.1"
      });
    });
  }
}

export default new StartUp();
