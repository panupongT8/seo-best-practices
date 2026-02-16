import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// 👇 1. Import ของจำเป็นสำหรับ MUI
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box, Link } from "@mui/material"; // 👈 เพิ่ม Box และ Link
import theme from "./theme";

import { GoogleAnalytics } from "@next/third-parties/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  description: "เว็บไซต์สอนทำ google seo อันดับ 1",
  verification: {
    google: "RmCx7xoRdxfTWzP-exLwTXyXaC7SU-51tNpGjiRfmtk",
  },
  metadataBase: new URL("https://josxgopufsxu6xwmwwtyfdpdka.srv.us"),
  title: {
    default: "ชื่อเว็บหลัก",
    template: "%s | ชื่อเว็บหลัก",
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "ชื่อเว็บหลัก",
    description: "เว็บไซต์สอนทำ google seo อันดับ 1",
    url: "https://josxgopufsxu6xwmwwtyfdpdka.srv.us",
    siteName: "ชื่อเว็บหลัก",
    locale: "th_TH",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#1976d2",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />

            {/* ✅ 1. เพิ่มปุ่ม Skip to Content (WCAG 2.4.1) */}
            {/* ปุ่มนี้จะซ่อนอยู่ แต่จะเลื่อนลงมาเมื่อกด Tab ครั้งแรก */}
            <Link
              href="#main-content"
              sx={{
                position: "absolute",
                top: -9999, // ซ่อนไว้ข้างบน
                left: "50%",
                transform: "translateX(-50%)",
                bgcolor: "primary.main",
                color: "white",
                p: 2,
                zIndex: 9999,
                textDecoration: "none",
                fontWeight: "bold",
                borderRadius: "0 0 8px 8px",
                transition: "top 0.3s",
                "&:focus": {
                  top: 0, // โผล่ลงมาเมื่อ Focus
                  outline: "3px solid #ffeb3b", // เห็นชัดๆ
                },
              }}
            >
              ข้ามไปเนื้อหาหลัก (Skip to Content)
            </Link>

            {/* ✅ 2. ครอบเนื้อหาด้วย Main ID เพื่อให้ Skip Link วิ่งมาหาเจอ */}
            <Box
              component="main"
              id="main-content"
              sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                position: "relative", // สำคัญ
              }}
            >
              {children}
            </Box>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>

      <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || ""} />
    </html>
  );
}
