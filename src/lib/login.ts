// login.ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function login(credentials: {
  username: string;
  password: string;
}) {
  const { username, password } = credentials;

  const user = await prisma.user.findUnique({
    where: { username },
  });

  if (user && user.password === password) {
    return { id: user.id, username: user.username }; // Return user object if authentication succeeds
  } else {
    return null; // Return null if authentication fails
  }
}
