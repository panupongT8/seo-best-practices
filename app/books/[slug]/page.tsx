import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Container,
  Typography,
  Box,
  Paper,
  Chip,
  Button,
  Grid,
} from "@mui/material";
import Link from "next/link";
import BackButton from "./BackButton";

// 1. Fetch function
async function getBook(id: string) {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const books = await res.json();
  return books.find((b: any) => b.number === parseInt(id));
}

// 2. ปรับฟังก์ชันดึงข้อมูลให้หาด้วย Slug
// async function getBookBySlug(slug: string) {
//   const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
//   const books = await res.json();

//   // ลองหาดูว่ามีเล่มไหนตรงกันไหม
//   const found = books.find((b: any) => convertToSlug(b.title) === slug);

//   // Debug: ถ้ายัง 404 ลอง console.log ดูใน Terminal ว่า slug ที่รับมาคืออะไร
//   // console.log("Searching for slug:", slug);

//   return found;
// }

// ฟังก์ชันดึงข้อมูลแบบฉลาด (ดึง ID จาก Slug)
async function getBookBySlug(slug: string) {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const books = await res.json();

  // 1. แยกเลข ID ออกมา (จาก "1-harry-potter" จะได้ "1")
  const idFromSlug = slug.split("-")[0];

  // 2. ค้นหาด้วย ID (แม่นยำ 100% ไม่ต้องกลัวชื่อสะกดผิด)
  return books.find((b: any) => b.number === parseInt(idFromSlug));
}

// 3. ใน generateStaticParams (เพื่อให้ Next.js รู้ว่ามี URL อะไรบ้าง)
// export async function generateStaticParams() {
//   const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
//   const books = await res.json();
//   return books.map((book: any) => ({
//     slug: convertToSlug(book.title), // คืนค่าเป็น slug เช่น 'harry-potter-and-the-philosophers-stone'
//   }));
// }
// ต้องปรับตัวนี้ให้พ่นค่าออกมาเป็น ID นำหน้าด้วย
// 📂 ไฟล์: app/books/[slug]/page.tsx

export async function generateStaticParams() {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books");
  const books = await res.json();

  return books.map((book: any) => ({
    // ✅ ใช้ convertToSlug เหมือนกับหน้า BookCard เป๊ะๆ
    slug: `${book.number}-${convertToSlug(book.title)}`,
  }));
}

// ฟังก์ชันแปลงชื่อหนังสือเป็น Slug (เช่น "Harry Potter 2" -> "harry-potter-2")
const convertToSlug = (text: string) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-") // เปลี่ยนช่องว่างเป็น -
    .replace(/[^\w-]+/g, "") // ลบอักขระที่ไม่ใช่ตัวอักษรและ - (ช่วยลบ ' ออกได้)
    .replace(/--+/g, "-") // ถ้ามี - ติดกันหลายตัวให้เหลือตัวเดียว
    .replace(/^-+/, "") // ลบ - หน้าข้อความ
    .replace(/-+$/, ""); // ลบ - หลังข้อความ
};

// 4. ใน generateMetadata (แก้ Error: slug)
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // 👈 รับ params เป็น Promise
}) {
  const { slug } = await params; // 👈 ต้อง await เพื่อดึง slug ออกมา
  const book = await getBookBySlug(slug); // 👈 เรียกฟังก์ชันดึงข้อมูล

  if (!book) return { title: "ไม่พบหนังสือ" };

  return {
    title: `${book.title} | Harry Potter Books`,
    description: book.description,
  };
}

// 4. Page Component
export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  // const { id } = await params;
  //   const book = await getBook(id);
  const { slug } = await params; // 👈 แก้ Error: slug ด้วยการ Destructuring ตรงนี้
  const book = await getBookBySlug(slug); // 👈 แก้ Error: books โดยเรียกฟังก์ชันดึงข้อมูล

  if (!book) notFound();

  const bookJsonLd = {
    "@context": "https://schema.org",
    "@type": "Book",
    name: book.title,
    image: book.cover,
    description: book.description,
    author: {
      "@type": "Person",
      name: "J.K. Rowling",
    },
    numberOfPages: book.pages,
    datePublished: book.releaseDate,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookJsonLd) }}
      />
      <Container maxWidth="md" sx={{ py: 8 }}>
        {/* 👈 2. ใช้ Component นี้แทน <Button component={Link}...> */}
        <BackButton />

        <Paper elevation={3} sx={{ p: 4, borderRadius: 4 }}>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 4 }}>
              <Box
                sx={{
                  position: "relative",
                  height: 400,
                  width: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  style={{ objectFit: "cover" }}
                  priority
                />
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 8 }}>
              <Chip
                label={`เล่มที่ ${book.number}`}
                color="primary"
                sx={{ mb: 2 }}
              />
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                {book.title}
              </Typography>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                Original: {book.originalTitle}
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ mt: 2, lineHeight: 1.8 }}
              >
                {book.description}
              </Typography>
              <Box mt={4}>
                <Chip
                  label={`${book.pages} หน้า`}
                  variant="outlined"
                  sx={{ mr: 1 }}
                />
                <Chip
                  label={`จำหน่าย: ${book.releaseDate}`}
                  variant="outlined"
                />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
