// import React from "react";
// import { Metadata } from "next";
// import Link from "next/link"; // 👈 เพิ่ม Import Link
// import {
//   Link as MuiLink,
//   Typography,
//   Container,
//   Breadcrumbs,
// } from "@mui/material"; // 👈 เพิ่ม Import MUI
// import NavigateNextIcon from "@mui/icons-material/NavigateNext"; // 👈 เพิ่ม Icon
// import SeoGuideContent from "./SeoGuideContent";
// import SeoBreadcrumbs from "./SeoBreadcrumbs";

// export const metadata: Metadata = {
//   title: "คู่มือการทำ SEO ฉบับสมบูรณ์ (2024) | Next.js & Best Practices",
//   description: "เรียนรู้วิธีทำ SEO ตั้งแต่พื้นฐานจนถึงระดับ Advance...",
//   openGraph: {
//     title: "คู่มือการทำ SEO ฉบับสมบูรณ์ สำหรับ Developer",
//     description: "เจาะลึก Technical SEO และ Best Practices ที่คนทำเว็บต้องรู้",
//     type: "article",
//   },
// };

// export default function SeoGuidePage() {
//   // -------------------------------------------------------
//   // 1. (ของใหม่) Schema สำหรับ Breadcrumb
//   // -------------------------------------------------------
//   const breadcrumbLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "หน้าหลัก",
//         item: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "คู่มือ SEO",
//         item: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/seo-guide",
//       },
//     ],
//   };

//   // -------------------------------------------------------
//   // 2. (ของเดิมของคุณ) Schema สำหรับบทความ
//   // -------------------------------------------------------
//   const articleLd = {
//     "@context": "https://schema.org",
//     "@type": "TechArticle",
//     headline: "คู่มือการทำ SEO ฉบับสมบูรณ์ (2024) สำหรับ Next.js",
//     description: "เจาะลึก Technical SEO, Sitemap, Robots.txt และ JSON-LD",
//     image: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/og-image.jpg",
//     author: {
//       "@type": "Person",
//       name: "Admin",
//       url: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/about",
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "My SEO Website",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/logo.png",
//       },
//     },
//     datePublished: "2024-02-11",
//     dateModified: new Date().toISOString(),
//     mainEntityOfPage: {
//       "@type": "WebPage",
//       "@id": "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/seo-guide",
//     },
//   };

//   return (
//     <>
//       {/* ฝัง Schema ทั้ง 2 ตัวลงไป (ใส่หลายอันได้) */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }}
//       />
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
//       />

//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         {/* -------------------------------------------------------
//             3. (ของใหม่) ส่วนแสดงผล Breadcrumbs บนหน้าจอ
//         ------------------------------------------------------- */}
//         <SeoBreadcrumbs />

//         {/* เนื้อหาเดิม */}
//         <SeoGuideContent />
//       </Container>
//     </>
//   );
// }

// app/seo-guide/page.tsx

import React from "react";
import { Metadata } from "next";
import { Container, Typography, Grid, Box } from "@mui/material";
import SeoBreadcrumbs from "./SeoBreadcrumbs";
import { seoChapters } from "./chapters";
import ChapterCard from "./ChapterCard"; // 👈 1. Import มาใหม่

export const metadata: Metadata = {
  title: "สารบัญคู่มือ SEO | Next.js SEO Guide",
  description: "รวมบทความสอนทำ SEO ตั้งแต่พื้นฐานจนถึงระดับ Advance",
};

export default function SeoGuidePage() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <SeoBreadcrumbs />

      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h3" component="h1" fontWeight="bold" gutterBottom>
          คู่มือ SEO ฉบับจับมือทำ
        </Typography>
        <Typography variant="h6" color="text.secondary">
          เรียนรู้เทคนิคการทำ SEO ด้วย Next.js ตั้งแต่เริ่มจนโปร
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {seoChapters.map((chapter) => (
          <Grid size={{ xs: 12, md: 6 }} key={chapter.slug}>
            {/* 👈 2. ใช้ Component ใหม่แทน Card เดิม */}
            <ChapterCard
              slug={chapter.slug}
              title={chapter.title}
              description={chapter.description}
              icon={chapter.icon}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
