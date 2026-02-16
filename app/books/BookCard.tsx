"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
  Chip,
  Grid,
} from "@mui/material";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// ✅ 1. เพิ่มฟังก์ชันแปลงชื่อหนังสือเป็น Slug
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

// Copy Type มาไว้ที่นี่ (หรือแยกไฟล์ types.ts ก็ได้)
interface Book {
  number: number;
  title: string;
  releaseDate: string;
  description: string;
  pages: number;
  cover: string;
}

export default function BookCard({ book }: { book: Book }) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 4 }}>
      <Card
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          transition: "0.3s",
          "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
        }}
      >
        {/* ✅ ใส่ Link ตรงนี้ เพื่อให้กดไปหน้า Slug ได้ */}
        <CardActionArea
          component={Link}
          //   href={`/books/${book.number}`} // ลิงก์ไป /books/1, /books/2
          //   href={`/books/${convertToSlug(book.title)}`}
          href={`/books/${book.number}-${convertToSlug(book.title)}`}
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <Box
            sx={{
              position: "relative",
              height: 300,
              width: "100%",
              bgcolor: "#f0f0f0",
            }}
          >
            <Image
              src={book.cover}
              //   alt={`ปกหนังสือ ${book.title}`}
              alt={`หน้าปกหนังสือแฮร์รี่ พอตเตอร์ ภาค ${book.title}`}
              fill
              style={{ objectFit: "contain", padding: "10px" }}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </Box>

          <CardContent sx={{ flexGrow: 1 }}>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="start"
              mb={1}
            >
              <Chip
                label={`เล่มที่ ${book.number}`}
                color="primary"
                size="small"
              />
              <Box
                display="flex"
                alignItems="center"
                gap={0.5}
                color="text.secondary"
              >
                <AutoStoriesIcon fontSize="small" />
                <Typography variant="caption">{book.pages} หน้า</Typography>
              </Box>
            </Box>

            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              lineHeight={1.2}
            >
              {book.title}
            </Typography>

            <Box
              display="flex"
              alignItems="center"
              gap={1}
              mb={2}
              color="text.secondary"
            >
              <CalendarTodayIcon fontSize="small" />
              <Typography variant="caption">
                จำหน่าย: {book.releaseDate}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
