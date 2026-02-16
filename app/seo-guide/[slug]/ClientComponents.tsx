"use client"; // 👈 ประกาศว่าเป็น Client Component

import React from "react";
import Link from "next/link";
import {
  Breadcrumbs,
  Link as MuiLink,
  Typography,
  Button,
  Box,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// ส่วนที่ 1: Breadcrumbs
export function ChapterBreadcrumbs({ title }: { title: string }) {
  // ตัดชื่อให้สั้นถ้ามันยาวเกินไป
  const shortTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;

  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      sx={{ mb: 4 }}
    >
      <MuiLink component={Link} underline="hover" color="inherit" href="/">
        หน้าหลัก
      </MuiLink>
      <MuiLink
        component={Link}
        underline="hover"
        color="inherit"
        href="/seo-guide"
      >
        คู่มือ SEO
      </MuiLink>
      <Typography color="text.primary">{shortTitle}</Typography>
    </Breadcrumbs>
  );
}

// ส่วนที่ 2: ปุ่มย้อนกลับ
export function ChapterNavigation() {
  return (
    <Box mt={8} pt={4} borderTop="1px solid #eee">
      <Button
        component={Link}
        href="/seo-guide"
        startIcon={<ArrowBackIcon />}
        variant="outlined"
      >
        กลับไปสารบัญ
      </Button>
    </Box>
  );
}
