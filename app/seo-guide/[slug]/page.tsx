import React from "react";
import { Metadata } from "next";
import { notFound } from "next/navigation";
// import Link from "next/link"; ❌ ไม่ต้องใช้แล้ว
import {
  Container,
  Typography,
  // Breadcrumbs, ❌ ย้ายไปไฟล์ใหม่แล้ว
  // Link as MuiLink, ❌ ย้ายไปไฟล์ใหม่แล้ว
  Paper,
  Box,
  // Button, ❌ ย้ายไปไฟล์ใหม่แล้ว
  Divider,
} from "@mui/material";
// import NavigateNextIcon ... ❌ ย้ายไปไฟล์ใหม่แล้ว
// import ArrowBackIcon ... ❌ ย้ายไปไฟล์ใหม่แล้ว
import { seoChapters } from "../chapters";
import { ChapterBreadcrumbs, ChapterNavigation } from "./ClientComponents"; // ✅ Import มาใช้

// 1. Generate Static Params
export async function generateStaticParams() {
  return seoChapters.map((c: any) => ({
    slug: c.slug,
  }));
}

// 2. Dynamic Metadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const chapter = seoChapters.find((c: any) => c.slug === slug);
  if (!chapter) return { title: "บทความไม่พบ" };

  return {
    title: `${chapter.title} | SEO Guide`,
    description: chapter.description,
  };
}

// 3. Page Component
export default async function ChapterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const chapter = seoChapters.find((c: any) => c.slug === slug);

  if (!chapter) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      {/* ✅ ใช้ Component ใหม่แทนโค้ดเดิม */}
      <ChapterBreadcrumbs title={chapter.title} />

      <Paper
        elevation={0}
        sx={{ p: { xs: 3, md: 5 }, borderRadius: 4, border: "1px solid #eee" }}
      >
        <Box display="flex" alignItems="center" gap={2} mb={3}>
          {chapter.icon}
          <Typography variant="h4" component="h1" fontWeight="bold">
            {chapter.title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 4 }} />

        {/* แสดงเนื้อหา */}
        <Box className="chapter-content">{chapter.content}</Box>

        {/* ✅ ใช้ Component ใหม่แทนโค้ดเดิม */}
        <ChapterNavigation />
      </Paper>
    </Container>
  );
}
