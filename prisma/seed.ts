import { PrismaClient } from "@prisma/client";

const db = new PrismaClient();

async function seed() {
    // Admin is the default user with password 'twixrox'
    await db.user.create({
        data: {
          username: "Admin",
          // this is a hashed version of "twixrox"
          passwordHash:
            "$2b$10$K7L1OJ45/4Y2nIvhRVpCe.FSmhDdWoXehVzJptJ/op0lSsvqNu/1u",
        },
      });
}
seed();