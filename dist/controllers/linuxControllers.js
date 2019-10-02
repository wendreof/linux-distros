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
    getById(req, res) {
        const _id = req.params.id;
        linuxServices_1.default.getById(_id)
            .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, linuxDistro))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    create(req, res) {
        let vm = req.body;
        linuxServices_1.default.create(vm)
            .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, "Linux Distro registered with success"))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    update(req, res) {
        const _id = req.params.id;
        let linuxDistro = req.body();
        linuxServices_1.default.update(_id, linuxDistro)
            .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, `${linuxDistro.title} updated with success`))
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
    delete(req, res) {
        const _id = req.params.id;
        linuxServices_1.default.delete(_id)
            .then(() => sendResponse(HttpStatus.OK), `Linux Distro removed with success`)
            .catch(error => console.error.bind(console, `Error ${error}`));
    }
}
exports.default = new LinuxController();
