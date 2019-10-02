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

  getById(req, res) {
    const _id = req.params.id;

    LinuxService.getById(_id)
      .then(linuxDistro => this.sendResponse(res, HttpStatus.OK, linuxDistro))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    LinuxService.create(vm)
      .then(linuxDistro =>
        this.sendResponse(
          res,
          HttpStatus.OK,
          "Linux Distro registered with success"
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  update(req, res) {
    const _id = req.params.id;
    let linuxDistro = req.body();

    LinuxService.update(_id, linuxDistro)
      .then(linuxDistro =>
        this.sendResponse(
          res,
          HttpStatus.OK,
          `${linuxDistro.title} updated with success`
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    LinuxService.delete(_id)
      .then(
        () => sendResponse(HttpStatus.OK),
        `Linux Distro removed with success`
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new LinuxController();
