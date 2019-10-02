import LinuxRepository from "../repository/linuxRepository";

class LinuxService {
  get() {
    return LinuxRepository.find({});
  }

  getById(_id) {
    return LinuxRepository.findById(_id);
  }

  create(linuxDistro) {
    return LinuxRepository.create(linuxDistro);
  }

  update(_id, linuxDistro) {
    return LinuxRepository.findByIdAndUpdate(_id, linuxDistro);
  }

  delete(_id) {
    return LinuxRepository.findByIdAndRemove(_id);
  }
}

export default new LinuxService();
