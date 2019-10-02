import * as express from "express";

class StartUp {
  public app: express.Application;

  constructor() {
    this.app = express();
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
