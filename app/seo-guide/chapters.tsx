import React from "react";
import {
  Typography,
  Box,
  Paper,
  Alert,
  AlertTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Divider,
  List,
  ListItem,
  ListItemText,
  Stack,
  Grid, // เพิ่ม Grid เข้ามา
} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CodeIcon from "@mui/icons-material/Code";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import MapIcon from "@mui/icons-material/Map";
import SecurityIcon from "@mui/icons-material/Security";
import SpeedIcon from "@mui/icons-material/Speed";
import DataObjectIcon from "@mui/icons-material/DataObject";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import SchoolIcon from "@mui/icons-material/School";
import StorefrontIcon from "@mui/icons-material/Storefront";
import AssessmentIcon from "@mui/icons-material/Assessment";
import WarningIcon from "@mui/icons-material/Warning";
import ScienceIcon from "@mui/icons-material/Science";

// ----------------------------------------------------------------------
// Reusable Component: CodeBlock
// ----------------------------------------------------------------------
export const CodeBlock = ({ title, code }: { title: string; code: string }) => (
  <Paper
    elevation={0}
    sx={{
      bgcolor: "#1e1e1e",
      color: "#d4d4d4",
      p: 2,
      borderRadius: 2,
      my: 3,
      fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
      overflowX: "auto",
      border: "1px solid #333",
    }}
  >
    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
      <Typography
        variant="caption"
        sx={{ color: "#4ec9b0", fontWeight: "bold" }}
      >
        {title}
      </Typography>
      <Chip
        label="TypeScript"
        size="small"
        sx={{ bgcolor: "#007aca", color: "white", height: 20, fontSize: 10 }}
      />
    </Box>
    <pre style={{ margin: 0 }}>
      <code>{code}</code>
    </pre>
  </Paper>
);

// ----------------------------------------------------------------------
// Type Definition
// ----------------------------------------------------------------------
export interface SeoChapter {
  slug: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  content: React.ReactNode;
}

// ----------------------------------------------------------------------
// Chapter Content Data (รวมเนื้อหาทั้งหมด)
// ----------------------------------------------------------------------
export const seoChapters: SeoChapter[] = [
  // -----------------------------
  // Chapter 1: Metadata Basics
  // -----------------------------
  {
    slug: "metadata-basics",
    title: "1. Metadata พื้นฐาน (Root Layout)",
    description: "หน้าปกของเว็บไซต์ที่ Google จะอ่านเป็นสิ่งแรก",
    icon: <CodeIcon fontSize="large" color="primary" />,
    content: (
      <>
        <Typography paragraph>
          ไฟล์ <code>layout.tsx</code> เปรียบเสมือน{" "}
          <strong>"หน้าปกหนังสือ"</strong> ของเว็บไซต์คุณ
          ถ้าหน้าไหนไม่ได้เขียนชื่อกำกับไว้ Google
          จะมาเอาข้อมูลจากหน้านี้ไปแสดงผล
        </Typography>
        <CodeBlock
          title="app/layout.tsx"
          code={`// app/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.your-domain.com"),
  title: {
    default: "ชื่อเว็บหลัก - ศูนย์รวมความรู้ SEO",
    template: "%s | ชื่อเว็บหลัก", 
  },
  description: "เว็บไซต์สอนทำ Google SEO อันดับ 1 ในไทย",
  verification: {
    google: "วางรหัส_Verification_Code_ที่นี่", 
  },
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "ชื่อเว็บหลัก",
    description: "เว็บไซต์สอนทำ Google SEO อันดับ 1",
    url: "https://www.your-domain.com",
    siteName: "ชื่อแบรนด์ของคุณ",
    locale: "th_TH",
    type: "website",
  },
};`}
        />
      </>
    ),
  },

  // -----------------------------
  // Chapter 2: Dynamic Metadata
  // -----------------------------
  {
    slug: "dynamic-metadata",
    title: "2. Dynamic Metadata (หน้าลูก)",
    description: "การสร้าง Title และ Description ให้เปลี่ยนไปตามบทความ",
    icon: <AutoFixHighIcon fontSize="large" color="secondary" />,
    content: (
      <>
        <Typography paragraph>
          สำหรับหน้าบทความ เราต้องดึงชื่อเรื่องจาก Database มาใส่ใน Title Tag
          เพื่อให้ Google รู้ว่าหน้านี้เกี่ยวกับอะไร
        </Typography>
        <CodeBlock
          title="app/blog/[slug]/page.tsx"
          code={`// app/blog/[slug]/page.tsx
import { Metadata } from "next";

export async function generateMetadata({ params }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  return {
    title: post.title, 
    description: post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      images: [post.coverImage],
    }
  }
}`}
        />
      </>
    ),
  },

  // -----------------------------
  // Chapter 3: Sitemap
  // -----------------------------
  {
    slug: "sitemap-guide",
    title: "3. Sitemap.ts (แผนที่นำทาง)",
    description: "สร้างแผนที่ให้ Google Bot เดินเก็บข้อมูลได้ครบทุกหน้า",
    icon: <MapIcon fontSize="large" color="success" />,
    content: (
      <>
        <Alert severity="info" sx={{ mb: 3 }}>
          <AlertTitle>Sitemap คืออะไร?</AlertTitle>
          เปรียบเสมือน <strong>"สารบัญ"</strong> หรือ <strong>"GPS"</strong>{" "}
          ที่บอก Google Bot ว่าเว็บเรามีหน้าไหนบ้าง โดยเฉพาะหน้าใหม่ๆ
          ที่ยังไม่มีลิงก์เชื่อมโยงไปหา
        </Alert>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          องค์ประกอบสำคัญใน Sitemap
        </Typography>
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 3 }}>
          <Table size="small">
            <TableHead sx={{ bgcolor: "#eee" }}>
              <TableRow>
                <TableCell width="20%">
                  <strong>Property</strong>
                </TableCell>
                <TableCell>
                  <strong>ความหมาย</strong>
                </TableCell>
                <TableCell width="20%">
                  <strong>ตัวอย่างค่า</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <code>url</code>
                </TableCell>
                <TableCell>
                  ที่อยู่เต็มของหน้าเว็บ (ต้องเป็น Absolute URL เสมอ)
                </TableCell>
                <TableCell>https://.../about</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>lastModified</code>
                </TableCell>
                <TableCell>
                  บอกว่าหน้านี้แก้ไขล่าสุดเมื่อไหร่ (Google ชอบสิ่งนี้มาก)
                </TableCell>
                <TableCell>new Date()</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>changeFrequency</code>
                </TableCell>
                <TableCell>
                  บอกใบ้ว่าหน้านี้เปลี่ยนบ่อยแค่ไหน (รายวัน, รายเดือน, รายปี)
                </TableCell>
                <TableCell>'daily', 'weekly'</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <code>priority</code>
                </TableCell>
                <TableCell>
                  คะแนนความสำคัญ (0.0 - 1.0) หน้าแรกควรเป็น 1.0 เสมอ
                </TableCell>
                <TableCell>1.0, 0.8, 0.5</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Typography paragraph>
          <strong>วิธีทดสอบ:</strong> หลังจาก Deploy หรือรัน Localhost ให้พิมพ์
          URL: <code>http://localhost:3000/sitemap.xml</code> คุณต้องเห็นโค้ด
          XML แสดงขึ้นมา
        </Typography>

        <CodeBlock
          title="app/sitemap.ts"
          code={`// app/sitemap.ts
import { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.your-domain.com';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = [
    { slug: 'seo-basic', updatedAt: new Date() },
    { slug: 'nextjs-guide', updatedAt: new Date() }
  ];

  const postUrls = posts.map((post) => ({
    url: \`\${BASE_URL}/blog/\${post.slug}\`,
    lastModified: post.updatedAt,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    ...postUrls, 
  ]
}`}
        />
      </>
    ),
  },

  // -----------------------------
  // Chapter 4: Robots.txt
  // -----------------------------
  {
    slug: "robots-txt",
    title: "4. Robots.ts (รปภ. ประจำเว็บ)",
    description: "กฎเหล็กที่บอก Bot ว่าห้องไหนเข้าได้ ห้องไหนห้ามเข้า",
    icon: <SecurityIcon fontSize="large" color="error" />,
    content: (
      <>
        <Alert severity="warning" sx={{ mb: 3 }}>
          <AlertTitle>Robots.txt คืออะไร?</AlertTitle>
          เปรียบเสมือน <strong>"ป้ายห้ามเข้า"</strong> หรือ{" "}
          <strong>"รปภ."</strong> ที่คอยบอก Bot ว่า "ห้องนี้เข้าได้นะ" (Allow)
          หรือ "ห้องนี้ห้ามเข้านะ" (Disallow) เช่น หน้า Admin หรือข้อมูลส่วนตัว
        </Alert>

        <Box sx={{ mt: 3 }}>
          <Typography paragraph>
            <strong>วิธีทดสอบ:</strong> พิมพ์ URL:{" "}
            <code>http://localhost:3000/robots.txt</code>{" "}
            เพื่อดูว่าไฟล์ถูกสร้างขึ้นถูกต้องหรือไม่
          </Typography>
          <CodeBlock
            title="app/robots.ts"
            code={`// app/robots.ts
import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.your-domain.com';

  return {
    rules: {
      userAgent: '*',      // กฎนี้ใช้กับ Bot ทุกตัว
      allow: '/',          // อนุญาตให้เข้าทุกหน้า
      disallow: [          // ยกเว้นหน้าเหล่านี้ ห้ามเข้า!
        '/private/', 
        '/admin/', 
        '/api/',
        '/dashboard/'
      ], 
    },
    sitemap: \`\${BASE_URL}/sitemap.xml\`,
  }
}`}
          />
        </Box>
      </>
    ),
  },

  // -----------------------------
  // Chapter 5: Testing
  // -----------------------------
  {
    slug: "testing-seo",
    title: "5. วิธีทดสอบและวัดผล",
    description: "Checklist เพื่อตรวจสอบว่า SEO ทำงานถูกต้องหรือไม่",
    icon: <SpeedIcon fontSize="large" color="info" />,
    content: (
      <>
        <Typography paragraph>
          เมื่อทำทุกอย่างเสร็จแล้ว จะรู้ได้ไงว่ามันทำงาน? ให้ใช้ Checklist
          นี้ครับ:
        </Typography>
        <List>
          <ListItem>
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <ListItemText
              primary="1. เช็คหน้าเว็บ (View Source)"
              secondary="คลิกขวาที่หน้าเว็บ -> View Page Source -> ค้นหาคำว่า 'title' หรือ 'description' ต้องเจอข้อความที่เราตั้งไว้"
            />
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <ListItemText
              primary="2. เช็ค Sitemap"
              secondary="เข้า /sitemap.xml ต้องเจอไฟล์ XML ที่มีรายการลิงก์ครบถ้วน"
            />
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <ListItemText
              primary="3. เช็ค Robots"
              secondary="เข้า /robots.txt ต้องเจอกฎที่เราตั้งไว้ และบรรทัดสุดท้ายต้องมี Link ไป Sitemap"
            />
          </ListItem>
          <ListItem>
            <CheckCircleIcon color="success" sx={{ mr: 2 }} />
            <ListItemText
              primary="4. Google Search Console"
              secondary="นำ Sitemap ไป Submit และรอ Google เข้ามาเก็บข้อมูล (อาจใช้เวลา 1-3 วัน)"
            />
          </ListItem>
        </List>
      </>
    ),
  },

  // -----------------------------
  // Chapter 6: JSON-LD
  // -----------------------------
  {
    slug: "structured-data",
    title: "6. Structured Data (JSON-LD)",
    description: "วิธีเขียน Schema ให้ Google แสดงดาวรีวิวและรูปภาพ",
    icon: <DataObjectIcon fontSize="large" color="secondary" />,
    content: (
      <>
        <Alert severity="success" sx={{ mb: 3 }}>
          <AlertTitle>ท่าไม้ตาย SEO</AlertTitle>
          นี่คือสิ่งที่ทำให้เว็บของคุณมี <strong>"ดาวรีวิว"</strong>,{" "}
          <strong>"รูปภาพ"</strong>, หรือ <strong>"ราคา"</strong>{" "}
          โผล่ขึ้นมาบนหน้า Google (Rich Snippets)
        </Alert>

        <Typography paragraph>
          <strong>วิธีเขียนใน Next.js (App Router):</strong> <br />
          เราจะประกาศตัวแปร object และใช้ <code>
            dangerouslySetInnerHTML
          </code>{" "}
          ฝังลงไปในหน้าเว็บครับ
        </Typography>

        <CodeBlock
          title="app/blog/[slug]/page.tsx"
          code={`// app/blog/[slug]/page.tsx
export default function BlogPost({ params }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: 'สอนทำ Next.js SEO',
    image: 'https://mysite.com/img/cover.jpg',
    author: 'Admin',
    datePublished: '2024-02-12'
  }

  return (
    <section>
      {/* สั่ง Render Script นี้ลงไปในหน้าเว็บ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h1>เนื้อหาบทความ...</h1>
    </section>
  )
}`}
        />
        <Typography variant="caption" color="text.secondary">
          *Tip: สามารถเช็คความถูกต้องได้ที่เว็บ{" "}
          <a
            href="https://search.google.com/test/rich-results"
            target="_blank"
            rel="noreferrer"
          >
            Rich Results Test
          </a>
        </Typography>
      </>
    ),
  },

  // -----------------------------
  // Chapter 7: Google Analytics
  // -----------------------------
  {
    slug: "google-analytics",
    title: "7. Google Analytics (ดวงตาของเว็บไซต์)",
    description: "ติดตั้ง GA4 เพื่อดูพฤติกรรมผู้ใช้งานแบบ Real-time",
    icon: <AnalyticsIcon fontSize="large" color="primary" />,
    content: (
      <>
        <Typography paragraph>
          ถ้า <strong>SEO</strong> คือการเรียกลูกค้าเข้าร้าน...
          <strong>Google Analytics</strong>{" "}
          คือกล้องวงจรปิดที่คอยดูว่าลูกค้าเข้ามาแล้วทำอะไรบ้าง?
        </Typography>

        {/* ส่วนที่ 1: มีไว้ทำไม? */}
        <Box sx={{ mb: 4 }}>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            color="text.primary"
          >
            ทำไมต้องมี? ช่วยอะไรเราได้บ้าง?
          </Typography>
          <Grid container spacing={2}>
            {[
              {
                title: "รู้ที่มา (Traffic Source)",
                desc: "รู้ว่าคนเข้าเว็บมาจากไหน? มาจาก Google (SEO), Facebook (Social), หรือพิมพ์ชื่อเว็บเข้ามาเอง (Direct)",
              },
              {
                title: "รู้พฤติกรรม (Behavior)",
                desc: "เขาอ่านบทความเราจบรึเปล่า? อยู่หน้าเว็บนานแค่ไหน? หรือกดปิดทันที (Bounce Rate)",
              },
              {
                title: "รู้กลุ่มเป้าหมาย (Audience)",
                desc: "คนเข้าเว็บเป็นผู้ชาย/ผู้หญิง อายุเท่าไหร่ ใช้มือถือรุ่นอะไร เข้าจากจังหวัดไหน",
              },
              {
                title: "รู้วัดผล (Conversion)",
                desc: "สำคัญที่สุด! รู้ว่ามีคนกดปุ่ม 'สั่งซื้อ' หรือ 'ติดต่อเรา' กี่คน",
              },
            ].map((item, index) => (
              <Grid item xs={12} sm={6} key={index}>
                <Paper
                  variant="outlined"
                  sx={{ p: 2, height: "100%", bgcolor: "#f8f9fa" }}
                >
                  <Typography
                    variant="subtitle1"
                    fontWeight="bold"
                    gutterBottom
                  >
                    {index + 1}. {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.desc}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom fontWeight="bold" color="error">
            ถ้าไม่มี Google Analytics จะเป็นอย่างไร?
          </Typography>
          <Alert
            severity="error"
            icon={<VisibilityOffIcon fontSize="inherit" />}
            sx={{ mb: 2 }}
          >
            <AlertTitle>เหมือนขับรถปิดตา (Flying Blind)</AlertTitle>
            คุณจะไม่รู้เลยว่าสิ่งที่คุณทำไป (เขียนบทความ, ยิงแอด, ปรับเว็บ)
            มันได้ผลหรือไม่
          </Alert>
        </Box>

        <Box>
          <Typography
            variant="h5"
            gutterBottom
            fontWeight="bold"
            color="primary"
          >
            วิธีติดตั้งใน Next.js (แบบมือโปร)
          </Typography>
          <Alert severity="success" sx={{ mb: 2 }}>
            <AlertTitle>Best Practice</AlertTitle>
            Next.js มี Library พิเศษชื่อ <code>@next/third-parties</code>{" "}
            ที่ช่วยโหลด Google Analytics แบบอัจฉริยะ
          </Alert>
          <CodeBlock
            title="app/layout.tsx"
            code={`// 1. ติดตั้ง Library: npm install @next/third-parties

// 2. ใส่ในไฟล์ app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
      {/* ใส่ Component นี้ไว้ท้ายสุด */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  )
}`}
          />
        </Box>
      </>
    ),
  },

  // -----------------------------
  // Chapter 8: Performance & UX
  // -----------------------------
  {
    slug: "performance-ux",
    title: "8. Performance & UX (เก็บตก 5% สุดท้าย)",
    description: "Image Optimization, Custom 404 และ Redirects",
    icon: <SpeedIcon fontSize="large" color="secondary" />,
    content: (
      <>
        <Typography paragraph>
          Google ไม่ได้ดูแค่ Code แต่ดูด้วยว่า{" "}
          <strong>"เว็บโหลดเร็วไหม?"</strong> และ{" "}
          <strong>"ใช้งานง่ายไหม?"</strong> นี่คือ 3
          เทคนิคสุดท้ายที่จะทำให้เว็บคุณได้คะแนนเต็ม 100
        </Typography>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            8.1 Image Optimization (แก้ปัญหาเว็บอืด)
          </Typography>
          <Alert severity="info" sx={{ mb: 2 }}>
            <AlertTitle>Core Web Vitals</AlertTitle>
            รูปภาพคือสาเหตุอันดับ 1 ที่ทำให้เว็บโหลดช้า (LCP) Next.js มี
            Component พิเศษมาช่วยเรื่องนี้
          </Alert>
          <CodeBlock
            title="การใช้ next/image"
            code={`import Image from 'next/image'
import heroImg from './hero.jpg'

export default function Hero() {
  return (
    <Image
      src={heroImg}
      alt="Hero Image"
      priority // ใส่ priority ถ้าเป็นรูปบนสุดของหน้า
      placeholder="blur"
    />
  )
}`}
          />
        </Box>

        <Box sx={{ mb: 4 }}>
          <Typography variant="h6" gutterBottom fontWeight="bold">
            8.2 Custom 404 Page (หน้าหาไม่เจอ)
          </Typography>
          <CodeBlock
            title="app/not-found.tsx"
            code={`// app/not-found.tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div style={{ textAlign: 'center', padding: 50 }}>
      <h2>404 - ไม่พบหน้าที่คุณค้นหา</h2>
      <Link href="/">กลับหน้าหลัก</Link>
    </div>
  )
}`}
          />
        </Box>
      </>
    ),
  },

  // -----------------------------
  // Chapter 9: Comparison
  // -----------------------------
  {
    slug: "metadata-comparison",
    title: "9. สรุปความต่าง: Metadata vs JSON-LD",
    description: "ตารางเปรียบเทียบชัดเจนว่าเมื่อไหร่ควรใช้อะไร",
    icon: <CompareArrowsIcon fontSize="large" color="warning" />,
    content: (
      <>
        <Typography paragraph>
          หลายคนสับสนว่า 3 ตัวนี้คืออะไร? ต้องทำอันไหนบ้าง?
          บทนี้จะสรุปให้เข้าใจง่ายที่สุด
        </Typography>

        <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#333" }}>
              <TableRow>
                <TableCell sx={{ color: "white" }}>
                  <strong>หัวข้อ</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>1. Metadata (Static)</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>2. generateMetadata (Dynamic)</strong>
                </TableCell>
                <TableCell sx={{ color: "white" }}>
                  <strong>3. JSON-LD (Schema)</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>เปรียบเหมือน</strong>
                </TableCell>
                <TableCell>"ปกหนังสือ"</TableCell>
                <TableCell>"ป้ายชื่อดิจิทัล"</TableCell>
                <TableCell>"บาร์โค้ด"</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>ความจำเป็น</strong>
                </TableCell>
                <TableCell>
                  <strong>ขาดไม่ได้</strong>
                </TableCell>
                <TableCell>
                  <strong>ขาดไม่ได้</strong>
                </TableCell>
                <TableCell>
                  <strong>ควรมี</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Divider sx={{ my: 4 }}>
          <Chip label="เลือกใช้สูตรไหนดี?" color="primary" />
        </Divider>

        <Box sx={{ mb: 4 }}>
          <Box display="flex" alignItems="center" gap={1} mb={1}>
            <ScienceIcon color="success" />
            <Typography variant="h6" fontWeight="bold" color="success.main">
              สูตรที่ 1: สำหรับหน้าทั่วไป (Static Pages)
            </Typography>
          </Box>
          <CodeBlock
            title="สูตร Static Page"
            code={`// app/page.tsx
export const metadata = { title: 'หน้าแรก' };

export default function Page() {
  const jsonLd = { ... };
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <h1>สวัสดีครับ</h1>
    </>
  )
}`}
          />
        </Box>

        <Paper
          elevation={0}
          sx={{ p: 3, bgcolor: "#ffebee", border: "1px dashed red" }}
        >
          <Box display="flex" gap={2}>
            <WarningIcon color="error" fontSize="large" />
            <Box>
              <Typography
                variant="h6"
                color="error"
                fontWeight="bold"
                gutterBottom
              >
                กฎเหล็กห้ามลืม!
              </Typography>
              <Typography variant="body2">
                ในไฟล์เดียวกัน <strong>ห้ามใช้</strong>{" "}
                <code>export const metadata</code> และ{" "}
                <code>generateMetadata</code> <strong>พร้อมกันเด็ดขาด!</strong>
              </Typography>
            </Box>
          </Box>
        </Paper>
      </>
    ),
  },

  // -----------------------------
  // Chapter 10: GSC vs GA4
  // -----------------------------
  {
    slug: "gsc-vs-ga4",
    title: "10. GSC vs GA4: ต่างกันยังไง?",
    description: "ความแตกต่างระหว่างเครื่องมือ SEO และ Marketing",
    icon: <AssessmentIcon fontSize="large" color="primary" />,
    content: (
      <>
        <Alert
          severity="info"
          sx={{ mb: 4 }}
          icon={<StorefrontIcon fontSize="inherit" />}
        >
          <AlertTitle>เปรียบเทียบง่ายๆ เหมือน "ร้านค้า"</AlertTitle>
          <Box component="ul" sx={{ m: 0, pl: 2 }}>
            <Box component="li" sx={{ mb: 1 }}>
              <strong>Search Console (GSC)</strong> ={" "}
              <strong>"กล้องวงจรปิดหน้าร้าน"</strong> (ดูคนเดินผ่าน, คนเข้าร้าน)
            </Box>
            <Box component="li">
              <strong>Analytics (GA4)</strong> ={" "}
              <strong>"กล้องวงจรปิดในร้าน"</strong> (ดูพฤติกรรมลูกค้า,
              การซื้อของ)
            </Box>
          </Box>
        </Alert>

        <Typography variant="h6" gutterBottom fontWeight="bold">
          ตารางเปรียบเทียบหมัดต่อหมัด
        </Typography>
        <TableContainer component={Paper} variant="outlined" sx={{ mb: 4 }}>
          <Table>
            <TableHead sx={{ bgcolor: "#e3f2fd" }}>
              <TableRow>
                <TableCell>
                  <strong>หัวข้อ</strong>
                </TableCell>
                <TableCell>
                  <strong>Google Search Console (GSC)</strong>
                </TableCell>
                <TableCell>
                  <strong>Google Analytics (GA4)</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <strong>หน้าที่หลัก</strong>
                </TableCell>
                <TableCell>ดูแลสุขภาพเว็บ & SEO (Technical)</TableCell>
                <TableCell>วิเคราะห์พฤติกรรมคน & การตลาด (Marketing)</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <strong>ข้อมูลมาจาก</strong>
                </TableCell>
                <TableCell>Google Search ล้วนๆ</TableCell>
                <TableCell>ทุกช่องทาง (FB, Google, Direct)</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography paragraph color="text.secondary">
            <strong>สรุป:</strong> ขาดอันใดอันหนึ่งไม่ได้! <br />
            {`GSC ช่วยดึงคนเข้าร้าน (SEO) --> GA4 ช่วยให้เราบริการลูกค้าได้ดีขึ้น (UX)`}
          </Typography>
        </Box>
      </>
    ),
  },
];
