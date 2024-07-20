import { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const models = await prisma.model.findMany();
    res.json(models);
  } else if (req.method === 'POST') {
    const { name, bio, photo, userId } = req.body;
    const model = await prisma.model.create({
      data: { name, bio, photo, userId },
    });
    res.json(model);
  }
}
