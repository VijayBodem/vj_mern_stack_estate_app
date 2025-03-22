import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import prisma from "../libs/prisma.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;

  // Hash password
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log(hashedPassword);

    // Create new user and save to DB
    const newUser = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    // 201 for successfully creation
    res.status(201).json({ message: "User Crated Successfully" });

    console.log(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" });
  }
};

export const login = async (req, res) => {
  const { username, password } = req.body;
  console.log(username, password);
  try {
    // if the user exists or not
    const user = await prisma.user.findUnique({
      where: { username },
    });

    console.log(user);

    if (!user) return res.status(401).json({ message: "Invalid Credentials" });

    // Check if the password is correct or not

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword)
      return res.status(401).json({ message: "Invalid Credentials" });

    //Generate cookie token and send to the user
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign(
      {
        id: user.id,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: age }
    );

    const { password: userPassword, ...userInfo } = user;
    res
      .cookie("token", token, {
        httpOnly: true,
        // secure : true
        maxAge: age,
      })
      .status(200)
      .json(userInfo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to login" });
  }
};

export const logout = (req, res) => {
  res.clearCookie("token").status(200).json({ message: "Logout Successfull" });
};
