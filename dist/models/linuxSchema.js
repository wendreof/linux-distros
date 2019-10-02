"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const LinuxSchema = new mongoose.Schema({
    OSType: { type: String },
    basedOn: { type: String },
    origin: { type: String },
    desktop: { type: String },
    category: { type: String },
    status: { type: String },
    homePage: { type: String }
});
exports.default = LinuxSchema;
