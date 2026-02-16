// ❌ ลบ "use client" ออก เพื่อให้เป็น Server Component (SEO 100%)
import { Metadata } from "next";
import Image from "next/image";
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Chip,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import BookBreadcrumbs from "./BookBreadcrumbs"; // 👈 Import ตัวที่เราแยกไว้
import BookCard from "./BookCard";

// 1. Define Type
interface Book {
  number: number;
  title: string;
  originalTitle: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
  index: number;
}

// 2. Fetch Data (Server Side Fetching)
async function getBooks(): Promise<Book[]> {
  const res = await fetch("https://potterapi-fedeperin.vercel.app/en/books", {
    cache: "force-cache",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch books");
  }

  return res.json();
}

// 3. SEO Metadata (ทำงานสมบูรณ์ 100% เพราะเป็น Server Component)
export const metadata: Metadata = {
  title: "รวมหนังสือ Harry Potter ครบทุกภาค | My SEO Website",
  description:
    "ค้นพบโลกเวทมนตร์กับคอลเลกชันหนังสือ Harry Potter ครบทั้ง 7 เล่ม พร้อมเรื่องย่อและข้อมูลการตีพิมพ์",
  openGraph: {
    title: "Harry Potter Book Collection",
    description: "ดูข้อมูลหนังสือ Harry Potter ครบทุกภาคที่นี่",
    images: [
      "https://raw.githubusercontent.com/fedeperin/potterapi/main/public/images/covers/1.png",
    ],
  },
};

export default async function BooksPage() {
  const books = await getBooks();

  // 4. JSON-LD Schemas
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าหลัก",
        item: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us",
      },
      {
        "@type": "ListItem",
        position: 2, // ขยับมาเป็นเบอร์ 2
        name: "คู่มือ SEO",
        item: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/seo-guide",
      },
      {
        "@type": "ListItem",
        position: 3, // ขยับมาเป็นเบอร์ 3
        name: "หนังสือ Harry Potter",
        item: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us/books",
      },
    ],
  };

  const listJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: books.map((book, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Book",
        name: book.title,
        author: { "@type": "Person", name: "J.K. Rowling" },
        datePublished: book.releaseDate,
        numberOfPages: book.pages,
        image: book.cover,
        description: book.description,
      },
    })),
  };

  return (
    <Container component="main" maxWidth="lg" sx={{ py: 8 }}>
      {/* ฝัง Scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(listJsonLd) }}
      />

      {/* เรียกใช้ Client Component ตรงนี้ */}
      <BookBreadcrumbs />

      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
          หนังสือ Harry Potter ทั้งหมด
        </Typography>
        <Typography variant="h6" component="p" color="text.secondary">
          ข้อมูลครบถ้วนทั้ง {books.length} เล่ม จาก API โดยตรง
        </Typography>
      </Box>

      {/* Grid */}
      <Grid container spacing={4}>
        {books.map((book) => (
          /* ใช้ item xs... ตามมาตรฐาน MUI v5/v6 */
          <BookCard key={book.number} book={book} />
        ))}
      </Grid>
    </Container>
  );
}
