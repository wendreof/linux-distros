import LinuxRepository from "../repository/linuxRepository";

class LinuxService {
  get() {
    return LinuxRepository.find({});
  }

  getById(_id) {
    return LinuxRepository.findById(_id);
  }
}

export default new LinuxService();
