// ✅ ต้องมีคำว่า /client ต่อท้ายใน v7
import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
// ❌ ลบ import { Pool } from "pg"; ทิ้งไปเลย

const connectionString = process.env.DATABASE_URL!;

// ✅ โยน connectionString เข้าไปตรงๆ ได้เลย ไม่ต้องผ่าน Pool
const adapter = new PrismaPg({ connectionString });

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

// ตอนนี้ TypeScript จะเจอ Client ตัวจริงแล้วครับ จะไม่แดงอีกต่อไป
export const prisma = globalForPrisma.prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
