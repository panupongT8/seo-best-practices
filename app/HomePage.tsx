"use client";

import Link from "next/link";
import {
  Button,
  Typography,
  Box,
  Container,
  Grid,
  Paper,
  Stack,
  Chip,
} from "@mui/material";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import CodeIcon from "@mui/icons-material/Code";
import GoogleIcon from "@mui/icons-material/Google";
import AutoGraphIcon from "@mui/icons-material/AutoGraph";

export default function HomePage() {
  return (
    <Box
      component="main"
      sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
    >
      {/* 1. HERO SECTION */}
      <Box
        component="section"
        sx={{
          bgcolor: "primary.main",
          color: "white",
          py: { xs: 8, md: 12 },
          textAlign: "center",
          backgroundImage: "linear-gradient(45deg, #1565c0 30%, #42a5f5 90%)",
        }}
      >
        <Container maxWidth="md">
          <Chip
            label="Updated for Next.js 14+"
            color="secondary"
            size="small"
            sx={{ mb: 3, fontWeight: "bold" }}
          />

          {/* H1 หลักของหน้า (ถูกต้องแล้ว) */}
          <Typography
            variant="h2"
            component="h1"
            fontWeight="800"
            gutterBottom
            sx={{ fontSize: { xs: "2.5rem", md: "4rem" } }}
          >
            ดันเว็บไซต์ให้ติดหน้าแรก Google <br />
            ด้วยพลังของ Next.js
          </Typography>

          {/* 👇 จุดที่แก้ 1: เปลี่ยนจาก h5 เป็น p (เพราะเป็นแค่คำโปรย ไม่ใช่หัวข้อ) */}
          <Typography
            variant="h5"
            component="p"
            sx={{ mb: 4, opacity: 0.9, lineHeight: 1.6 }}
          >
            คัมภีร์ SEO ฉบับนักพัฒนา: เจาะลึก Technical SEO, Sitemap, Robots.txt
            และ Dynamic Metadata แบบ Step-by-Step
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={2}
            justifyContent="center"
          >
            {/* <Button
              component={Link}
              href="/seo-guide"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: "50px",
                bgcolor: "white", // แก้ Contrast ปุ่ม
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
              startIcon={<RocketLaunchIcon />}
              aria-label="เริ่มเรียนรู้ SEO ฟรี"
            >
              เริ่มเรียนรู้ฟรี
            </Button> */}
            <Button
              component={Link}
              href="/seo-guide"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: "50px",
                bgcolor: "white", // แก้ Contrast ปุ่ม
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
              startIcon={<RocketLaunchIcon />}
              aria-label="เริ่มเรียนรู้ SEO"
            >
              Seo Guide
            </Button>
            <Button
              component={Link}
              href="/wcag-guide"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: "50px",
                bgcolor: "white", // แก้ Contrast ปุ่ม
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
              startIcon={<RocketLaunchIcon />}
              aria-label="เริ่มเรียนรู้ WCAG"
            >
              Wcag Guide
            </Button>
            <Button
              component={Link}
              href="/books"
              variant="contained"
              size="large"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: "50px",
                bgcolor: "white", // แก้ Contrast ปุ่ม
                color: "primary.main",
                fontWeight: "bold",
                "&:hover": { bgcolor: "#f0f0f0" },
              }}
              startIcon={<RocketLaunchIcon />}
              aria-label="เริ่มเรียนรู้ API"
            >
              Generate Metadata
            </Button>

            <Button
              component="a"
              href="https://nextjs.org"
              target="_blank"
              variant="outlined"
              size="large"
              aria-label="ไปที่เว็บไซต์ Next.js"
              sx={{
                py: 1.5,
                px: 4,
                fontSize: "1.1rem",
                borderRadius: "50px",
                color: "white",
                borderColor: "white",
                "&:hover": {
                  borderColor: "white",
                  bgcolor: "rgba(255,255,255,0.1)",
                },
              }}
            >
              รู้จัก Next.js
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* 2. FEATURES SECTION */}
      <Container component="section" sx={{ py: 8 }} maxWidth="lg">
        {/* H2 หัวข้อรอง (ถูกต้องแล้ว) */}
        <Typography
          variant="h4"
          component="h2"
          textAlign="center"
          fontWeight="bold"
          gutterBottom
        >
          สิ่งที่คุณจะได้เรียนรู้ในคู่มือนี้
        </Typography>

        <Typography
          variant="body1"
          component="p"
          textAlign="center"
          color="text.secondary"
          sx={{ mb: 6 }}
        >
          เนื้อหาเน้นปฏิบัติจริง ไม่ใช่น้ำท่วมทุ่ง เหมาะสำหรับ Developer
          โดยเฉพาะ
        </Typography>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <Paper
                component="article"
                elevation={0}
                sx={{
                  p: 4,
                  height: "100%",
                  border: "1px solid #eee",
                  borderRadius: 4,
                  transition: "0.3s",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box sx={{ color: "primary.main", mb: 2 }}>{feature.icon}</Box>

                {/* H3 หัวข้อย่อย (ถูกต้องแล้ว) */}
                <Typography
                  variant="h6"
                  component="h3"
                  fontWeight="bold"
                  gutterBottom
                >
                  {feature.title}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  {feature.description}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* 3. FOOTER CTA */}
      <Box
        component="footer"
        sx={{ bgcolor: "#f5f5f5", py: 8, mt: "auto", textAlign: "center" }}
      >
        <Container maxWidth="sm">
          {/* 👇 จุดที่แก้ 2: เปลี่ยนจาก h5 เป็น h2 (เพราะเป็นหัวข้อหลักของส่วน Footer) */}
          <Typography
            variant="h5"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            พร้อมจะอัปเกรดเว็บไซต์ของคุณหรือยัง?
          </Typography>

          <Typography variant="body1" color="text.primary" sx={{ mb: 3 }}>
            อย่ารอให้คู่แข่งแซงหน้า เริ่มปรับแต่ง Technical SEO ของคุณวันนี้
          </Typography>

          <Button
            component={Link}
            href="/seo-guide"
            variant="contained"
            color="primary"
            size="large"
            aria-label="อ่านคู่มือ SEO ฉบับเต็ม"
          >
            อ่านคู่มือฉบับเต็ม
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

const features = [
  {
    icon: <CodeIcon fontSize="large" />,
    title: "Technical SEO for Next.js",
    description:
      "เรียนรู้วิธีสร้าง sitemap.xml, robots.txt และการตั้งค่า Server-Side Rendering ให้ Google Bot รักเว็บไซต์คุณ",
  },
  {
    icon: <GoogleIcon fontSize="large" />,
    title: "Dynamic Metadata",
    description:
      "หยุดใช้ Title ซ้ำกันทั้งเว็บ! สอนเขียนฟังก์ชัน generateMetadata เพื่อดึงข้อมูลจริงมาทำ SEO ให้แต่ละหน้าแบบอัตโนมัติ",
  },
  {
    icon: <AutoGraphIcon fontSize="large" />,
    title: "Measurement & Analytics",
    description:
      "สอนติดตั้งและอ่านค่า Google Search Console และ GA4 เพื่อวัดผลลัพธ์และปรับปรุงอันดับให้ดียิ่งขึ้น",
  },
];
