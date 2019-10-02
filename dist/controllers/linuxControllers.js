"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linuxServices_1 = require("../services/linuxServices");
const HttpStatus = require("http-status");
class LinuxController {
    constructor() {
        this.sendResponse = function (res, statusCode, data) {
            res.status(statusCode).json({ result: data });
        };
    }
    get(req, res) {
        linuxServices_1.default.get()
            .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, linuxDistro))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    getById(req, res) { }
    create(req, res) { }
    update(req, res) { }
    delete(req, res) { }
}
exports.default = new LinuxController();
