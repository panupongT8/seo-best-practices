"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function BookBreadcrumbs() {
  return (
    <Breadcrumbs
      separator={<NavigateNextIcon fontSize="small" />}
      aria-label="breadcrumb"
      sx={{ mb: 4 }}
    >
      {/* 1. หน้าแรก */}
      <MuiLink
        component={Link}
        underline="hover"
        color="inherit"
        href="/"
        sx={{ display: "flex", alignItems: "center" }}
      >
        หน้าหลัก
      </MuiLink>

      {/* ✅ 2. เพิ่มชั้นนี้: คู่มือ SEO */}
      {/* <MuiLink
        component={Link}
        underline="hover"
        color="inherit"
        href="/seo-guide"
        sx={{ display: "flex", alignItems: "center" }}
      >
        คู่มือ SEO
      </MuiLink> */}

      {/* 3. หน้าปัจจุบัน */}
      <Typography color="text.primary" fontWeight="bold">
        หนังสือ Harry Potter
      </Typography>
    </Breadcrumbs>
  );
}
