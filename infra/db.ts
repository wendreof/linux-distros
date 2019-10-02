import * as mongoose from "mongoose";
import SecretPass from "./password";

class Db {
  private DB_URL = `mongodb+srv://wendreof:${SecretPass.masterKey}@wendreof-omnob.azure.mongodb.net/test?retryWrites=true&w=majority`;

  createConnection() {
    mongoose.connect(this.DB_URL);
  }
}

export default Db;
