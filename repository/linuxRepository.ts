import * as mongoose from "mongoose";
import LinuxSchema from "../models/linuxSchema";

export default mongoose.model("linux-distros", LinuxSchema);
