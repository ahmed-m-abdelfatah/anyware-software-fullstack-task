import '../../get_env.js';
import userModel from '../../DB/model/user.model.js';
import { default as jwt } from 'jsonwebtoken';
import { default as bcryptjs } from 'bcryptjs';
import internalServerError from '../../utils/internal_server_error.js';

const jwtExpiration = {
  string: '8h',
  seconds: () => {
    return Math.floor(Date.now() / 1000) + 8 * 60 * 60 * 1000;
  },
};

export const signup = async (req, res) => {
  try {
    const { name, userName, password } = req.body;

    const users = await userModel.find().select('userName');

    const usersWithSameUserName = users.filter(user => user.userName === userName);

    if (usersWithSameUserName.length > 0) {
      return res.status(409).json({ message: 'username is not available' }); // 409: Conflict
    }

    // hash password
    const hashedPassword = await bcryptjs.hash(password, parseInt(process.env.BCRYPT_JS_SALT_ROUNDS));

    await userModel.create({ name, userName, password: hashedPassword });

    return res.status(201).json({ message: 'successfully created an new account' }); // 201: Created
  } catch (error) {
    internalServerError(res, error);
  }
};

export const login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    const foundUser = await userModel.findOne({ userName });

    if (!foundUser) {
      return res.status(404).json({ message: 'Invalid userName or password' }); // 404: Not Found
    }

    // compare password
    const match = await bcryptjs.compare(password, foundUser.password);

    if (!match) {
      return res.status(404).json({ message: 'Invalid userName or password' }); // 404: Not Found
    }

    foundUser.isLoggedIn = true;
    foundUser.LoggedInAt = Date.now();
    await foundUser.save();

    const token = jwt.sign(
      { id: foundUser._id, isSignedIn: true, jwtExpiration: jwtExpiration.seconds() },
      process.env.JWT_SECRET_KEY,
      { expiresIn: jwtExpiration.string },
    );

    return res.status(201).json({ message: 'Logged in successful', token }); // 201: Created
  } catch (error) {
    internalServerError(res, error);
  }
};

export const logout = async (req, res) => {
  try {
    await userModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        LoggedOutAt: Date.now(),
        LoggedInAt: null,
        isLoggedIn: false,
      },
    );

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    internalServerError(res, error);
  }
};
