import type { Request, Response } from "express";

export const createAccount = async (req: Request, res: Response) => {
  res.send("Cuenta creada");
};

export const login = async (req: Request, res: Response) => {
  res.send("Logged in");
};
