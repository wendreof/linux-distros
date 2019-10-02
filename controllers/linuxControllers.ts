import LinuxService from "../services/linuxServices";
import * as HttpStatus from "http-status";
import Helper from "../infra/helper";

class LinuxController {
  get(req, res) {
    LinuxService.get()
      .then(linuxDistro => Helper.sendResponse(res, HttpStatus.OK, linuxDistro))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  getById(req, res) {
    const _id = req.params.id;

    LinuxService.getById(_id)
      .then(linuxDistro => Helper.sendResponse(res, HttpStatus.OK, linuxDistro))
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  create(req, res) {
    let vm = req.body;

    LinuxService.create(vm)
      .then(linuxDistro =>
        Helper.sendResponse(
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
        Helper.sendResponse(
          res,
          HttpStatus.OK,
          `Linux Distro updated with success`
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }

  delete(req, res) {
    const _id = req.params.id;

    LinuxService.delete(_id)
      .then(() =>
        Helper.sendResponse(
          "",
          HttpStatus.OK,
          `Linux Distro removed with success`
        )
      )
      .catch(error => console.error.bind(console, `Error ${error}`));
  }
}

export default new LinuxController();
