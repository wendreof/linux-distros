"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const linuxSchema_1 = require("../models/linuxSchema");
exports.default = mongoose.model("linux-distros", linuxSchema_1.default);
