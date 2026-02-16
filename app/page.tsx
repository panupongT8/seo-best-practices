// app/page.tsx
import { Metadata } from "next";
import HomePage from "./HomePage"; // 👈 Import เข้ามา

// ส่วนนี้ทำงานบน Server (SEO ยังอยู่ครบ)
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "หน้าหลัก | My SEO Website",
    description: "ยินดีต้อนรับสู่เว็บไซต์สอนทำ SEO ที่ดีที่สุด",
    openGraph: {
      title: "หน้าหลัก | My SEO Website",
      description: "ยินดีต้อนรับสู่เว็บไซต์สอนทำ SEO ที่ดีที่สุด",
    },
  };
}

// Component หลักเหลือแค่นี้ (สะอาดมาก)
export default function Page() {
  // 2. JSON-LD สำหรับหน้าแรก (คนละแบบกับหน้าคู่มือ)
  // ใช้เพื่อบอกว่า "ฉันคือใคร" (Organization)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "My SEO Website",
    url: "https://seo-best-practices.vercel.app",
    potentialAction: {
      "@type": "SearchAction",
      target:
        "https://seo-best-practices.vercel.app/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      {/* ฝัง Script ลงไป */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomePage />
    </>
  );
}
