"use client"; // 👈 ประกาศเป็น Client Component

import React from "react";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function BackButton() {
  return (
    <Button
      component={Link} // ✅ ใช้ Link ในไฟล์ Client ได้อย่างอิสระ
      href="/books"
      startIcon={<ArrowBackIcon />}
      sx={{ mb: 4 }}
    >
      ย้อนกลับ
    </Button>
  );
}
