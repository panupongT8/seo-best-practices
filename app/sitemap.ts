import { MetadataRoute } from "next";

// 1. แนะนำให้ใช้ Environment Variable แทนการ Hardcode (เผื่อเปลี่ยนโดเมนในอนาคต)
// ถ้าไม่มี .env ให้ใช้ค่า Default ด้านหลังแทน
const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://seo-best-practices.vercel.app";

// จำลองการดึงข้อมูลจาก Database (ในงานจริงให้เรียก API หรือ Query DB ตรงนี้)
async function getBlogPosts() {
  // Mock Data: สมมติว่านี่คือข้อมูลที่ได้จาก CMS
  return [
    { slug: "seo-guide-for-beginners", updatedAt: new Date("2024-02-10") },
    { slug: "nextjs-metadata-tutorial", updatedAt: new Date("2024-02-11") },
    { slug: "google-search-console-tips", updatedAt: new Date("2024-01-20") },
  ];
}

const convertToSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // 1. ดึงข้อมูลบทความ (Dynamic)
  const posts = await getBlogPosts();

  // 2. สร้าง URL สำหรับบทความ
  const blogUrls = posts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "weekly" as const, // บทความมักอัปเดตรายสัปดาห์
    priority: 0.8, // ความสำคัญรองจากหน้าแรก
  }));

  // 3. สร้าง URL สำหรับหน้าทั่วไป (Static)
  const staticRoutes = [
    {
      url: BASE_URL, // หน้า Home
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1, // สำคัญที่สุด
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/seo-guide`, // หน้า Guide ที่เราเพิ่งทำ
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.9, // สำคัญมาก เพราะเป็น Landing Page หลัก
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly" as const,
      priority: 0.3,
    },
  ];

  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const books = await res.json();

  const bookUrls = books.map((book: any) => ({
    url: `${BASE_URL}/books/${book.number}-${convertToSlug(book.title)}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // --- 2. หน้าหลักของหนังสือ ---
  const booksIndex = {
    url: `${BASE_URL}/books`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  };

  // 4. รวมข้อมูลทั้งหมดเข้าด้วยกัน
  return [...staticRoutes, booksIndex, ...bookUrls, ...blogUrls];
}
