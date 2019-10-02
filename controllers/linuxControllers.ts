import LinuxService from "../services/linuxServices";
import * as HttpStatus from "http-status";

class LinuxController {
  sendResponse = function(res, statusCode, data) {
    res.status(statusCode).json({ result: data });
  };

  get(req, res) {
    LinuxService.get()
      .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, linuxDistro))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {}

  create(req, res) {}

  update(req, res) {}

  delete(req, res) {}
}

export default new LinuxController();
