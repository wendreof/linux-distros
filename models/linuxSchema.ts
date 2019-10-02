import * as mongoose from "mongoose";

const LinuxSchema = new mongoose.Schema({
  OSType: { type: String },
  basedOn: { type: String },
  origin: { type: String },
  desktop: { type: String },
  category: { type: String },
  status: { type: String },
  homePage: { type: String }
});

export default LinuxSchema;
