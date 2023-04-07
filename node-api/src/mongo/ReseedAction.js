import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { userModel } from "../schemas/user.schema.js";
import { dbConnect } from "./index.js";

const ReseedAction = () => {
  async function clear() {
    dbConnect();
    await userModel.deleteMany({});
    console.log("DB cleared");
  }

  async function seedDB() {
    await clear();
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash("secret", salt);

    const user = {
      _id: mongoose.Types.ObjectId(1),
      name: "Admin",
      email: "admin@jsonapi.com",
      password: hashPassword,
      created_at: new Date(),
      profile_image: "../../images/admin.jpg",
    };

    const admin = new userModel(user);
    await admin.save();

    console.log("DB seeded");
  }

  seedDB();
};

export default ReseedAction;
