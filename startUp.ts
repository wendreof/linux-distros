import * as express from "express";

import Database from "./infra/db";

import * as bodyParser from "body-parser";

import LinuxController from "./controllers/linuxControllers";

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
        author: "@wendreof",
        updatedAt: "09/16/19",
        version: "0.0.0.1"
      });
    });

    // ..::get::..
    this.app.route("/api/v1/distros").get(LinuxController.get);
    // ..::getById::..
    this.app.route("/api/v1/distros/:id").get(LinuxController.getById);
    // ..::create::..
    this.app.route("api/v1/distros").post(LinuxController.create);
    // ..::update::..
    this.app.route("api/v1/distros/:id").put(LinuxController.update);
    // ..::delete::..
    this.app.route("api/v1/distros/:id").delete(LinuxController.delete);
  }
}

export default new StartUp();
