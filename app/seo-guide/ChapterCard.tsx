"use client"; // 👈 ประกาศเป็น Client Component

import React from "react";
import Link from "next/link";
import {
  Card,
  CardActionArea,
  CardContent,
  Box,
  Typography,
} from "@mui/material";

interface ChapterCardProps {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export default function ChapterCard({
  slug,
  title,
  description,
  icon,
}: ChapterCardProps) {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 3,
        transition: "0.3s",
        "&:hover": { transform: "translateY(-5px)", boxShadow: 6 },
      }}
    >
      {/* ✅ ใช้ Link ตรงนี้ได้ ไม่ Error แล้ว */}
      <CardActionArea
        component={Link}
        href={`/seo-guide/${slug}`}
        sx={{ height: "100%", p: 2 }}
      >
        <CardContent sx={{ display: "flex", alignItems: "flex-start", gap: 3 }}>
          <Box
            sx={{
              p: 2,
              borderRadius: "50%",
              bgcolor: "action.hover",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </Box>
          <Box>
            <Typography
              variant="h6"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ lineHeight: 1.6 }}
            >
              {description}
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
