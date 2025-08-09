// import { PrismaClient } from "@prisma/client";
// import { PrismaClient } from "../prisma/generated/clientPg";
// import { PrismaClient } from "../generated/prisma/";

import { PrismaClient } from "@/generated/prisma";

const prismaClientSingleton = () => {
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;