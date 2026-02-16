"use client"; // 👈 สำคัญมาก! ต้องมีบรรทัดนี้

import React from "react";
import Link from "next/link";
import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function SeoBreadcrumbs() {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 4 }}
    >
      <MuiLink
        component={Link}
        underline="hover"
        color="inherit"
        href="/"
        sx={{ display: "flex", alignItems: "center" }}
      >
        หน้าหลัก
      </MuiLink>
      <Typography color="text.primary" fontWeight="bold">
        คู่มือ SEO
      </Typography>
    </Breadcrumbs>
  );
}
