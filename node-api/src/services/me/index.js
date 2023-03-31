import bcrypt from "bcrypt";
import dotenv from 'dotenv';
import { userModel } from "../../schemas/user.schema";
import jwt from 'jsonwebtoken';

dotenv.config();

export const getProfileRouteHandler = (req, res) => {
  const meUser = req.user;

  const stringId = req.user.id;
  const decId = stringId.substring(4, 8);
  const intId = parseInt(decId, 16);

  const sentData = {
    data: {
      type: 'users',
      id: intId === 1 ? intId : meUser.id,
      attributes: {
        name: meUser.name,
        email: meUser.email,
        profile_image: null,
        createdAt: meUser.createdAt,
        updateAt: meUser.updateAt
      },
      links: {
        self: `${process.env.APP_URL_API}/users/${meUser.id}`
      }
    }
  }
  res.send(sentData);
}

export const patchProfileRouteHandler = async (req, res) => {
  const currentDataOfUser = req.user;
  const { name, email, newPassword, confirmPassword } = req.body.data.attributes;
  const foundUser = await userModel.findOne({ email: currentDataOfUser.email});

  if (!foundUser) {
    res.status(400).json({error: 'No user matches the credentials'});
  } else {
    // check password more than 8 characters, new password matched the password confirmation
    if (newPassword && newPassword < 7 || newPassword != confirmPassword) {
      res.status(400).json({errors: { password: ["The password should have at lest 8 characters and match the password confirmation."] }});
    } else if (newPassword && newPassword > 7 && newPassword == confirmPassword) {
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(newPassword, salt);
      try{
        await userModel.updateOne( { email: foundUser.email }, { $set :{ "name": name, "email": email, "password": hashPassword } });
      } catch(err) {
        console.error(err);
      }
      const sentData = {
        data: {
          type: 'users',
          id: foundUser.id,
          attributes: {
            name: name,
            email: email,
            profile_image: null,
          }
        }
      }
      res.send(sentData);
    } else if (!newPassword) {
      try {
        await userModel.updateOne( { email: foundUser.email }, { $set :{ "name": name, "email": email } });
      } catch(err) {
        console.error(err);
      }
      const sentData = {
        data: {
          type: 'users',
          id: foundUser.id,
          attributes: {
            name: name,
            email: email,
            profile_image: null,
          }
        }
      }
      res.send(sentData);
    }
  }
}
