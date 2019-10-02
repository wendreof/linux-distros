import * as express from "express";

import Database from "./infra/db";

import * as bodyParser from "body-parser";

class StartUp {
  public app: express.Application;
  private _db: Database;
  private bodyParser;

  constructor() {
    this.app = express();
    this._db = new Database();
    this._db.createConnection();
    this.middler();
    this.routes();
  }

  middler() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
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
