import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const BASE_URL =
    process.env.NEXT_PUBLIC_BASE_URL ||
    "https://josxgopufsxu6xwmwwtyfdpdka.srv.us";

  return {
    rules: {
      userAgent: "*", // กฎนี้บังคับใช้กับ Bot ทุกค่าย
      allow: "/", // อนุญาตให้เข้าถึงหน้าทั่วไป
      disallow: [
        "/private/", // หน้าส่วนตัว
        "/admin/", // หน้า Admin
        "/dashboard/", // แดชบอร์ดผู้ใช้
        "/api/", // API Routes (ไม่จำเป็นต้องทำ Index)
        "/_next/", // ไฟล์ภายในของ Next.js
      ],
    },
    sitemap: `${BASE_URL}/sitemap.xml`, // ชี้เป้าแผนที่เว็บไซต์
  };
}
