/** @format */

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import Token from '../model/token';
import User from '../model/user';

dotenv.config();

export const singupUser = async (req, res) => {
  try {
    // const salt = await bcrypt.genSalt();
    // const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const user = {
      username: req.body.username,
      name: req.body.name,
      password: hashedPassword,
    };

    const newUser = new User(user);
    await newUser.save();

    return res.status(200).json({ msg: 'Đăng nhập thành công!' });
  } catch (error) {
    return res.status(500).json({ msg: 'Đăng nhập thất bại!' });
  }
};

export const loginUser = async (req, res) => {
  let user = await User.findOne({ username: req.body.username });
  if (!user) {
    return res.status(400).json({ msg: 'Tên đăng nhập không đúng!' });
  }

  try {
    let match = await bcrypt.compare(req.body.password, user.password);
    if (match) {
      const accessToken = jwt.sign(
        user.toJSON(),
        process.env.ACCESS_SECRET_KEY,
        { expiresIn: '15m' }
      );
      const refreshToken = jwt.sign(
        user.toJSON(),
        process.env.REFRESH_SECRET_KEY
      );

      const newToken = new Token({ token: refreshToken });
      await newToken.save();

      res.status(200).json({
        accessToken: accessToken,
        refreshToken: refreshToken,
        name: user.name,
        username: user.username,
      });
    } else {
      res.status(400).json({ msg: 'Mật khẩu không đúng!' });
    }
  } catch (error) {
    res.status(500).json({ msg: 'Lỗi đăng nhập!' });
  }
};

export const logoutUser = async (req, res) => {
  const token = req.body.token;
  await Token.deleteOne({ token: token });

  res.status(204).json({ msg: 'Đăng xuất thành công!' });
};
