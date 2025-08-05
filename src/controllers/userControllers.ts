import { Request, Response } from 'express';

interface BackendDetails {
  id: number;
  name: string;
  email: string;
}

let users: BackendDetails[] = [
  { "id":1, 
    "name":"vigneshs",
    "email":"vignesh@gmail.com" },
  { "id":2, 
    "name":"thavasurya",
    "email":"thavasurya@gmail.com" },
];

export const getAllDetails = (req: Request, res: Response) => {
  res.json(users);
};

export const createUser = (req: Request, res: Response) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser: BackendDetails = {
    id: users.length + 1,
    name,
    email,
  };

  users.push(newUser);
  res.status(201).json(newUser);
};
