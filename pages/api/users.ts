import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function get_all_users() {
  try {
    const users = await prisma.user.findMany();
    for (const user of users) {
      user.createdAt = JSON.parse(JSON.stringify(user.createdAt));
      user.updatedAt = JSON.parse(JSON.stringify(user.updatedAt));
    }
    return users;
  } catch (error) {
    console.log(error);
    return error;
  }
}
