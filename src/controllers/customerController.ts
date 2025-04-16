import { Request, Response } from "express";
import { PrismaClient  } from "@prisma/client";
import { customerType } from "../types/modelTypes/customer";


const prisma = new PrismaClient();


export const createCustomer = async (req: Request, res: Response) => {
  const { name } = req.body;

  try {
    const newCustomer: customerType = await prisma.customer.create({
      data: {
        name,
      },
    });
    res.status(201).json(newCustomer);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getCustomers = async (req: Request, res: Response) => {
  try {
    const customers: customerType[] = await prisma.customer.findMany();
    res.status(200).json(customers);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
}
