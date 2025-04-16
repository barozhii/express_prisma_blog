import { Request, Response } from "express";
import { PrismaClient } from "../../prisma/generated/client";

const prisma = new PrismaClient();

export const createUser = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
      },
    });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await prisma.user.findMany();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};
