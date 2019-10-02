"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const linuxRepository_1 = require("../repository/linuxRepository");
class LinuxService {
    get() {
        return linuxRepository_1.default.find({});
    }
    getById(_id) {
        return linuxRepository_1.default.findById(_id);
    }
    create(linuxDistro) {
        return linuxRepository_1.default.create(linuxDistro);
    }
    update(_id, linuxDistro) {
        return linuxRepository_1.default.findByIdAndUpdate(_id, linuxDistro);
    }
}
exports.default = new LinuxService();
