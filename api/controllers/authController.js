import bcrypt from "bcrypt";
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

export const login = (req, res) => {
  // db operations
};

export const logout = (req, res) => {
  // db operations
};
