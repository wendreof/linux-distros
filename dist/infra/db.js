"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const password_1 = require("./password");
class Database {
    constructor() {
        this.DB_URL = `mongodb+srv://wendreof:${password_1.default.masterKey}@wendreof-omnob.azure.mongodb.net/test?retryWrites=true&w=majority`;
    }
    createConnection() {
        mongoose.connect(this.DB_URL);
    }
}
exports.default = Database;
