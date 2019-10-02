"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const db_1 = require("./infra/db");
const bodyParser = require("body-parser");
const linuxControllers_1 = require("./controllers/linuxControllers");
class StartUp {
    constructor() {
        this.app = express();
        this._db = new db_1.default();
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
        this.app.route("/api/v1/distros").get(linuxControllers_1.default.get);
        // ..::getById::..
        this.app.route("/api/v1/distros/:id").get(linuxControllers_1.default.getById);
        // ..::create::..
        this.app.route("api/v1/distros").post(linuxControllers_1.default.create);
        // ..::update::..
        this.app.route("api/v1/distros/:id").put(linuxControllers_1.default.update);
        // ..::delete::..
        this.app.route("api/v1/distros/:id").delete(linuxControllers_1.default.delete);
    }
}
exports.default = new StartUp();
