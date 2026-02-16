"use client";

import React from "react";
import Link from "next/link";
import { Breadcrumbs, Link as MuiLink, Typography } from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

export default function WcagBreadcrumbs() {
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

      {/* <MuiLink
        component={Link}
        underline="hover"
        color="inherit"
        href="/seo-guide"
        sx={{ display: "flex", alignItems: "center" }}
      >
        คู่มือ SEO
      </MuiLink> */}

      <Typography color="text.primary" fontWeight="bold">
        คู่มือ WCAG (Accessibility)
      </Typography>
    </Breadcrumbs>
  );
}
