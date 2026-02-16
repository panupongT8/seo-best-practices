// "use client";

// import React, { useState, useEffect } from "react"; // 👈 1. Import useState, useEffect
// import Link from "next/link";
// import {
//   Container,
//   Grid,
//   Typography,
//   Box,
//   Paper,
//   Breadcrumbs,
//   Link as MuiLink,
//   Chip,
//   Divider,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemText,
//   Alert,
//   AlertTitle,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Stack,
//   Button,
// } from "@mui/material";
// import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import MapIcon from "@mui/icons-material/Map";
// import SecurityIcon from "@mui/icons-material/Security";
// import CodeIcon from "@mui/icons-material/Code";
// import SpeedIcon from "@mui/icons-material/Speed";
// import SearchIcon from "@mui/icons-material/Search";
// import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
// import DataObjectIcon from "@mui/icons-material/DataObject";
// import AnalyticsIcon from "@mui/icons-material/Analytics";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import BrokenImageIcon from "@mui/icons-material/BrokenImage";
// import DirectionsIcon from "@mui/icons-material/Directions";
// import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
// import CheckBoxIcon from "@mui/icons-material/CheckBox";
// import CancelIcon from "@mui/icons-material/Cancel";
// import PlaylistAddCheckIcon from "@mui/icons-material/PlaylistAddCheck";
// import ScienceIcon from "@mui/icons-material/Science";
// import WarningIcon from "@mui/icons-material/Warning";
// import SchoolIcon from "@mui/icons-material/School";
// import AssessmentIcon from "@mui/icons-material/Assessment";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import AutoStoriesIcon from "@mui/icons-material/AutoStories";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew"; // ไอคอนคนกางแขน
// import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// // --- Components ---

// const CodeBlock = ({ title, code }: { title: string; code: string }) => (
//   <Paper
//     elevation={0}
//     sx={{
//       bgcolor: "#1e1e1e",
//       color: "#d4d4d4",
//       p: 2,
//       borderRadius: 2,
//       my: 3,
//       fontFamily: "Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace",
//       overflowX: "auto",
//       border: "1px solid #333",
//     }}
//   >
//     <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//       <Typography
//         variant="caption"
//         sx={{ color: "#4ec9b0", fontWeight: "bold" }}
//       >
//         {title}
//       </Typography>
//       <Chip
//         label="TypeScript"
//         size="small"
//         sx={{ bgcolor: "#007aca", color: "white", height: 20, fontSize: 10 }}
//       />
//     </Box>
//     <pre style={{ margin: 0 }}>
//       <code>{code}</code>
//     </pre>
//   </Paper>
// );

// // --- Code Templates ---

// const sitemapCode = `// app/sitemap.ts
// import { MetadataRoute } from 'next'

// // ควรใช้ Environment Variable เพื่อความยืดหยุ่น (Dev/Prod)
// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.your-domain.com';

// export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
//   // 1. ดึงข้อมูลบทความจาก Database (Simulation)
//   // const posts = await prisma.post.findMany();
//   const posts = [
//     { slug: 'seo-basic', updatedAt: new Date() },
//     { slug: 'nextjs-guide', updatedAt: new Date() }
//   ];

//   // 2. สร้าง URL สำหรับหน้าบทความ (Dynamic)
//   const postUrls = posts.map((post) => ({
//     url: \`\${BASE_URL}/blog/\${post.slug}\`,
//     lastModified: post.updatedAt,
//     changeFrequency: 'weekly' as const, // บทความเปลี่ยนรายสัปดาห์
//     priority: 0.8, // สำคัญรองลงมา
//   }));

//   // 3. รวมกับหน้าหลัก (Static)
//   return [
//     {
//       url: BASE_URL,
//       lastModified: new Date(),
//       changeFrequency: 'daily', // หน้าแรกเปลี่ยนบ่อยสุด
//       priority: 1, // สำคัญที่สุด (เต็ม 1.0)
//     },
//     {
//       url: \`\${BASE_URL}/about\`,
//       lastModified: new Date(),
//       changeFrequency: 'monthly',
//       priority: 0.5,
//     },
//     ...postUrls,
//   ]
// }`;

// const robotsCode = `// app/robots.ts
// import { MetadataRoute } from 'next'

// export default function robots(): MetadataRoute.Robots {
//   const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.your-domain.com';

//   return {
//     rules: {
//       userAgent: '*',     // กฎนี้ใช้กับ Bot ทุกตัว (Google, Bing, Yahoo)
//       allow: '/',         // อนุญาตให้เข้าทุกหน้า...
//       disallow: [         // ...ยกเว้นหน้าเหล่านี้ ห้ามเข้า!
//         '/private/',
//         '/admin/',
//         '/api/',
//         '/dashboard/'
//       ],
//     },
//     // บรรทัดนี้สำคัญที่สุด! ต้องชี้เป้าแผนที่ให้ Bot รู้
//     sitemap: \`\${BASE_URL}/sitemap.xml\`,
//   }
// }`;

// const layoutMetadataCode = `// app/layout.tsx
// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   metadataBase: new URL("https://www.your-domain.com"),
//   title: {
//     default: "ชื่อเว็บหลัก - ศูนย์รวมความรู้ SEO",
//     template: "%s | ชื่อเว็บหลัก",
//   },
//   description: "เว็บไซต์สอนทำ Google SEO อันดับ 1 ในไทย",
//   verification: {
//     google: "วางรหัส_Verification_Code_ที่นี่",
//   },
//   alternates: {
//     canonical: "./",
//   },
//   openGraph: {
//     title: "ชื่อเว็บหลัก",
//     description: "เว็บไซต์สอนทำ Google SEO อันดับ 1",
//     url: "https://www.your-domain.com",
//     siteName: "ชื่อแบรนด์ของคุณ",
//     locale: "th_TH",
//     type: "website",
//   },
// };`;

// const dynamicMetadataCode = `// app/blog/[slug]/page.tsx
// import { Metadata } from "next";

// export async function generateMetadata({ params }): Promise<Metadata> {
//   const post = await getPostBySlug(params.slug);

//   return {
//     title: post.title,
//     description: post.summary,
//     openGraph: {
//       title: post.title,
//       description: post.summary,
//       images: [post.coverImage],
//     }
//   }
// }`;

// const jsonLdCode = `// app/blog/[slug]/page.tsx
// export default function BlogPost({ params }) {
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'TechArticle',
//     headline: 'สอนทำ Next.js SEO',
//     image: 'https://mysite.com/img/cover.jpg',
//     author: 'Admin',
//     datePublished: '2024-02-12'
//   }

//   return (
//     <section>
//       {/* สั่ง Render Script นี้ลงไปในหน้าเว็บ */}
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
//       />
//       <h1>เนื้อหาบทความ...</h1>
//     </section>
//   )
// }`;

// const ga4Code = `// 1. ติดตั้ง Library ของ Next.js (Official)
// // npm install @next/third-parties

// // 2. ใส่ในไฟล์ app/layout.tsx
// import { GoogleAnalytics } from '@next/third-parties/google'

// export default function RootLayout({ children }) {
//   return (
//     <html lang="th">
//       <body>{children}</body>
//       {/* ใส่ Component นี้ไว้ท้ายสุด เพื่อไม่ให้ Block การโหลดหน้าเว็บ */}
//       <GoogleAnalytics gaId="G-XXXXXXXXXX" />
//     </html>
//   )
// }`;

// const imageCode = `import Image from 'next/image'
// import heroImg from './hero.jpg'

// export default function Hero() {
//   return (
//     <>
//       {/* ❌ แบบผิด: ใช้ img ธรรมดา (โหลดช้า, ไม่ Responsive) */}
//       <img src="/hero.jpg" alt="Hero" />

//       {/* ✅ แบบถูก: ใช้ Next/Image */}
//       <Image
//         src={heroImg}
//         alt="Hero Image"
//         priority // ใส่ priority ถ้าเป็นรูปบนสุดของหน้า (ช่วย LCP)
//         placeholder="blur" // เบลอก่อนโหลดเสร็จ
//         sizes="(max-width: 768px) 100vw, 50vw" // โหลดขนาดที่เหมาะสมตามจอ
//       />
//     </>
//   )
// }`;

// const notFoundCode = `// app/not-found.tsx (สร้างไฟล์นี้ใน root app)
// import Link from 'next/link'

// export default function NotFound() {
//   return (
//     <div style={{ textAlign: 'center', padding: 50 }}>
//       <h2>404 - ไม่พบหน้าที่คุณค้นหา</h2>
//       <p>หน้าที่คุณกำลังหาอาจถูกลบหรือย้ายไปแล้ว</p>
//       <Link href="/">กลับหน้าหลัก</Link>
//     </div>
//   )
// }`;

// const redirectCode = `// next.config.mjs
// const nextConfig = {
//   async redirects() {
//     return [
//       {
//         source: '/old-blog/:slug', // ลิงก์เก่า
//         destination: '/blog/:slug', // ลิงก์ใหม่
//         permanent: true, // 301 Redirect (บอก Google ว่าย้ายถาวร คะแนน SEO จะตามมาด้วย)
//       },
//     ]
//   },
// }
// export default nextConfig;`;

// // เพิ่ม Template Code สำหรับสูตรสำเร็จ
// const formulaStaticCode = `// 🟢 สูตรที่ 1: หน้าทั่วไป (Home, About, Contact)
// // ไฟล์: app/page.tsx

// // 1. Metadata (แบบ Static: เขียนตายตัว)
// export const metadata = {
//   title: 'หน้าแรก | My Website',
//   description: 'ยินดีต้อนรับ...',
// };

// export default function Page() {
//   // 2. JSON-LD (WebSite Schema)
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'WebSite',
//     name: 'My Website',
//     url: 'https://mysite.com'
//   };

//   return (
//     <>
//       <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//       <h1>สวัสดีครับ</h1>
//     </>
//   )
// }`;

// const formulaDynamicCode = `// 🔵 สูตรที่ 2: หน้าบทความ/สินค้า (Blog, Product)
// // ไฟล์: app/blog/[slug]/page.tsx

// // 1. Metadata (แบบ Dynamic: เปลี่ยนตาม URL)
// export async function generateMetadata({ params }) {
//   const post = await getPost(params.slug);
//   return {
//     title: post.title, // ชื่อเปลี่ยนไปตามบทความ
//   }
// }

// export default async function Page({ params }) {
//   const post = await getPost(params.slug);

//   // 2. JSON-LD (Article Schema)
//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Article',
//     headline: post.title, // ต้องตรงกับ Title ข้างบน
//     image: post.image
//   };

//   return (
//     <>
//       <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
//       <h1>{post.title}</h1>
//     </>
//   )
// }`;

// // --- รายชื่อสารบัญ (แยกออกมาเพื่อวนลูปง่ายๆ) ---
// const TOC_ITEMS = [
//   "Metadata พื้นฐาน (Layout)",
//   "Dynamic Metadata (Page)",
//   "Sitemap.ts (แผนที่นำทาง)",
//   "Robots.ts (รปภ. เว็บไซต์)",
//   "วิธีทดสอบและวัดผล",
//   "Structured Data (JSON-LD)",
//   "Google Analytics (ดวงตา)",
//   "Performance & UX",
//   "สรุปความต่าง (The Trilogy)",
//   "GSC & GA4",
// ];

// // --- Main Component ---

// export default function SeoGuideContent() {
//   // 👈 2. State สำหรับเก็บ ID ของหัวข้อที่กำลัง Active
//   const [activeSection, setActiveSection] = useState<string>("");

//   // 👈 3. Effect สำหรับตรวจจับการ Scroll
//   useEffect(() => {
//     const handleScroll = () => {
//       // ดึง Element ทุกตัวที่มี ID ขึ้นต้นด้วย "chapter-"
//       const sections = document.querySelectorAll('section[id^="chapter-"]');

//       let currentSection = "";

//       sections.forEach((section) => {
//         const sectionTop = (section as HTMLElement).offsetTop;
//         const sectionHeight = (section as HTMLElement).clientHeight;

//         // ถ้า Scroll ลงมาถึงจุดที่ Element นั้นอยู่ (ปรับ Offset -150 เพื่อให้ Active ก่อนถึงหัวข้อหน่อยๆ)
//         if (window.scrollY >= sectionTop - 150) {
//           currentSection = section.id;
//         }
//       });

//       setActiveSection(currentSection);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <Box sx={{ bgcolor: "#f9fafb", minHeight: "100vh", py: 4 }}>
//       <Container maxWidth="lg">
//         {/* Breadcrumbs */}
//         {/* <Breadcrumbs aria-label="breadcrumb" sx={{ mb: 2 }}>
//           <MuiLink component={Link} underline="hover" color="inherit" href="/">
//             หน้าหลัก
//           </MuiLink>
//           <Typography color="text.primary">SEO Guide</Typography>
//         </Breadcrumbs> */}

//         {/* Header */}
//         <Box sx={{ mb: 6, textAlign: "center" }}>
//           <Chip
//             label="Beginner Friendly"
//             color="success"
//             size="small"
//             sx={{ mb: 2, fontWeight: "bold" }}
//           />
//           <Typography
//             variant="h3"
//             component="h1"
//             gutterBottom
//             fontWeight="bold"
//             sx={{ color: "#1a237e" }}
//           >
//             เจาะลึก Technical SEO ฉบับจับมือทำ
//           </Typography>
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             sx={{ maxWidth: 800, mx: "auto" }}
//           >
//             เข้าใจกลไกเบื้องหลังของ Sitemap, Robots.txt และ Metadata
//             แบบภาษาคนเข้าใจง่าย พร้อมโค้ดตัวอย่างที่ใช้งานได้จริง
//           </Typography>
//         </Box>

//         <Grid container spacing={4} component="main">
//           {/* Sidebar Navigation */}
//           <Grid size={{ xs: 12, md: 3 }} component="nav">
//             <Box sx={{ position: "sticky", top: 80 }}>
//               {" "}
//               {/* ปรับ top 80 ให้ไม่ชิดขอบจอเกินไป */}
//               <Paper
//                 elevation={0}
//                 component="section"
//                 sx={{ p: 2, bgcolor: "white", border: "1px solid #e0e0e0" }}
//               >
//                 <Typography
//                   variant="h6"
//                   gutterBottom
//                   fontWeight="bold"
//                   sx={{ px: 2, pt: 1 }}
//                 >
//                   สารบัญ
//                 </Typography>
//                 <List dense>
//                   {TOC_ITEMS.map((text, index) => {
//                     const chapterId = `chapter-${index + 1}`;
//                     const isActive = activeSection === chapterId;

//                     return (
//                       <ListItem key={index} disablePadding>
//                         <ListItemButton
//                           component="a"
//                           href={`#${chapterId}`}
//                           selected={isActive} // 👈 4. ส่งค่า selected ให้ MUI
//                           sx={{
//                             borderRadius: 1,
//                             mb: 0.5,
//                             // ปรับแต่งสีเวลา Active
//                             "&.Mui-selected": {
//                               bgcolor: "primary.light",
//                               color: "white",
//                               borderLeft: "4px solid",
//                               borderColor: "primary.main",
//                               "&:hover": {
//                                 bgcolor: "primary.light",
//                               },
//                               "& .MuiListItemText-primary": {
//                                 fontWeight: "bold",
//                               },
//                             },
//                           }}
//                         >
//                           <ListItemText primary={`${index + 1}. ${text}`} />
//                         </ListItemButton>
//                       </ListItem>
//                     );
//                   })}
//                 </List>
//               </Paper>
//             </Box>
//           </Grid>

//           {/* Main Content Area */}
//           <Grid size={{ xs: 12, md: 9 }}>
//             {/* ----------------------------------------------------------------------------------
//                 Chapter 1: Layout Configuration
//             ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-1"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <CodeIcon color="primary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   1. Metadata พื้นฐาน (Root Layout)
//                 </Typography>
//               </Box>
//               <Typography paragraph>
//                 ไฟล์ <code>layout.tsx</code> เปรียบเสมือน{" "}
//                 <strong>"หน้าปกหนังสือ"</strong> ของเว็บไซต์คุณ
//                 ถ้าหน้าไหนไม่ได้เขียนชื่อกำกับไว้ Google
//                 จะมาเอาข้อมูลจากหน้านี้ไปแสดงผล
//               </Typography>
//               <CodeBlock title="app/layout.tsx" code={layoutMetadataCode} />
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//                 Chapter 2: Dynamic Metadata
//             ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-2"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <AutoFixHighIcon color="secondary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   2. Dynamic Metadata (หน้าลูก)
//                 </Typography>
//               </Box>
//               <Typography paragraph>
//                 สำหรับหน้าบทความ เราต้องดึงชื่อเรื่องจาก Database มาใส่ใน Title
//                 Tag เพื่อให้ Google รู้ว่าหน้านี้เกี่ยวกับอะไร
//               </Typography>
//               <CodeBlock
//                 title="app/blog/[slug]/page.tsx"
//                 code={dynamicMetadataCode}
//               />
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//                 Chapter 3: Sitemap
//             ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-3"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <MapIcon color="success" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   3. Sitemap.ts (แผนที่นำทาง)
//                 </Typography>
//               </Box>

//               <Alert severity="info" sx={{ mb: 3 }}>
//                 <AlertTitle>Sitemap คืออะไร?</AlertTitle>
//                 เปรียบเสมือน <strong>"สารบัญ"</strong> หรือ{" "}
//                 <strong>"GPS"</strong> ที่บอก Google Bot ว่า
//                 เว็บเรามีหน้าไหนบ้าง โดยเฉพาะหน้าใหม่ๆ
//                 ที่ยังไม่มีลิงก์เชื่อมโยงไปหา
//               </Alert>

//               <Typography variant="h6" gutterBottom fontWeight="bold">
//                 องค์ประกอบสำคัญใน Sitemap
//               </Typography>
//               <TableContainer
//                 component={Paper}
//                 variant="outlined"
//                 sx={{ mb: 3 }}
//               >
//                 <Table size="small">
//                   <TableHead sx={{ bgcolor: "#eee" }}>
//                     <TableRow>
//                       <TableCell width="20%">
//                         <strong>Property</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>ความหมาย</strong>
//                       </TableCell>
//                       <TableCell width="20%">
//                         <strong>ตัวอย่างค่า</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <code>url</code>
//                       </TableCell>
//                       <TableCell>
//                         ที่อยู่เต็มของหน้าเว็บ (ต้องเป็น Absolute URL เสมอ)
//                       </TableCell>
//                       <TableCell>https://.../about</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <code>lastModified</code>
//                       </TableCell>
//                       <TableCell>
//                         บอกว่าหน้านี้แก้ไขล่าสุดเมื่อไหร่ (Google ชอบสิ่งนี้มาก)
//                       </TableCell>
//                       <TableCell>new Date()</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <code>changeFrequency</code>
//                       </TableCell>
//                       <TableCell>
//                         บอกใบ้ว่าหน้านี้เปลี่ยนบ่อยแค่ไหน (รายวัน, รายเดือน,
//                         รายปี)
//                       </TableCell>
//                       <TableCell>'daily', 'weekly'</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <code>priority</code>
//                       </TableCell>
//                       <TableCell>
//                         คะแนนความสำคัญ (0.0 - 1.0) หน้าแรกควรเป็น 1.0 เสมอ
//                       </TableCell>
//                       <TableCell>1.0, 0.8, 0.5</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <Typography paragraph>
//                 <strong>วิธีทดสอบ:</strong> หลังจาก Deploy หรือรัน Localhost
//                 ให้พิมพ์ URL:
//                 <code>http://localhost:3000/sitemap.xml</code> คุณต้องเห็นโค้ด
//                 XML แสดงขึ้นมา
//               </Typography>

//               <CodeBlock title="app/sitemap.ts" code={sitemapCode} />
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//                 Chapter 4: Robots
//             ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-4"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <SecurityIcon color="error" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   4. Robots.ts (รปภ. ประจำเว็บ)
//                 </Typography>
//               </Box>

//               <Alert severity="warning" sx={{ mb: 3 }}>
//                 <AlertTitle>Robots.txt คืออะไร?</AlertTitle>
//                 เปรียบเสมือน <strong>"ป้ายห้ามเข้า"</strong> หรือ{" "}
//                 <strong>"รปภ."</strong> ที่คอยบอก Bot ว่า "ห้องนี้เข้าได้นะ"
//                 (Allow) หรือ "ห้องนี้ห้ามเข้านะ" (Disallow) เช่น หน้า Admin
//                 หรือข้อมูลส่วนตัว
//               </Alert>

//               <Accordion defaultExpanded variant="outlined">
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography fontWeight="bold">คำศัพท์ที่ต้องรู้</Typography>
//                 </AccordionSummary>
//                 <AccordionDetails>
//                   <List dense>
//                     <ListItem>
//                       <ListItemText
//                         primary="User-agent: *"
//                         secondary="หมายถึงคำสั่งนี้ใช้กับ Bot 'ทุกตัว' ในโลก (Google, Bing, Yahoo)"
//                       />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText
//                         primary="Allow: /"
//                         secondary="อนุญาตให้เข้ามาเก็บข้อมูลได้ทุกหน้า (เป็นค่า Default)"
//                       />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText
//                         primary="Disallow: /admin/"
//                         secondary="ห้ามเข้าหน้า URL ที่ขึ้นต้นด้วย /admin/ เด็ดขาด!"
//                       />
//                     </ListItem>
//                     <ListItem>
//                       <ListItemText
//                         primary="Sitemap: https://..."
//                         secondary="บอกตำแหน่งแผนที่ (Sitemap) ให้ Bot รู้ จะได้ไม่ต้องเดินหาเอง"
//                       />
//                     </ListItem>
//                   </List>
//                 </AccordionDetails>
//               </Accordion>

//               <Box sx={{ mt: 3 }}>
//                 <Typography paragraph>
//                   <strong>วิธีทดสอบ:</strong> พิมพ์ URL:{" "}
//                   <code>http://localhost:3000/robots.txt</code>
//                   เพื่อดูว่าไฟล์ถูกสร้างขึ้นถูกต้องหรือไม่
//                 </Typography>
//                 <CodeBlock title="app/robots.ts" code={robotsCode} />
//               </Box>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//                 Chapter 5: Testing
//             ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-5"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <SpeedIcon color="info" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   5. วิธีทดสอบและวัดผล
//                 </Typography>
//               </Box>
//               <Typography paragraph>
//                 เมื่อทำทุกอย่างเสร็จแล้ว จะรู้ได้ไงว่ามันทำงาน? ให้ใช้ Checklist
//                 นี้ครับ:
//               </Typography>

//               <List>
//                 <ListItem>
//                   <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                   <ListItemText
//                     primary="1. เช็คหน้าเว็บ (View Source)"
//                     secondary="คลิกขวาที่หน้าเว็บ -> View Page Source -> ค้นหาคำว่า 'title' หรือ 'description' ต้องเจอข้อความที่เราตั้งไว้"
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                   <ListItemText
//                     primary="2. เช็ค Sitemap"
//                     secondary="เข้า /sitemap.xml ต้องเจอไฟล์ XML ที่มีรายการลิงก์ครบถ้วน"
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                   <ListItemText
//                     primary="3. เช็ค Robots"
//                     secondary="เข้า /robots.txt ต้องเจอกฎที่เราตั้งไว้ และบรรทัดสุดท้ายต้องมี Link ไป Sitemap"
//                   />
//                 </ListItem>
//                 <ListItem>
//                   <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                   <ListItemText
//                     primary="4. Google Search Console"
//                     secondary="นำ Sitemap ไป Submit และรอ Google เข้ามาเก็บข้อมูล (อาจใช้เวลา 1-3 วัน)"
//                   />
//                 </ListItem>
//               </List>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//            Chapter 6: Structured Data (JSON-LD)
//        ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-6"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <DataObjectIcon color="secondary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   6. Structured Data (JSON-LD)
//                 </Typography>
//               </Box>

//               <Alert severity="success" sx={{ mb: 3 }}>
//                 <AlertTitle>ท่าไม้ตาย SEO</AlertTitle>
//                 นี่คือสิ่งที่ทำให้เว็บของคุณมี <strong>"ดาวรีวิว"</strong>,{" "}
//                 <strong>"รูปภาพ"</strong>, หรือ <strong>"ราคา"</strong>{" "}
//                 โผล่ขึ้นมาบนหน้า Google (Rich Snippets)
//               </Alert>

//               <Typography paragraph>
//                 <strong>JSON-LD คืออะไร?</strong> <br />
//                 คือการเขียนโค้ดภาษาพิเศษ (Schema.org) เพื่อบอก Google ชัดๆ
//                 ว่าหน้านี้คืออะไร (เช่น บทความ, สินค้า, คอร์สเรียน, สูตรอาหาร)
//                 โดยที่ Google ไม่ต้องเดาเอง
//               </Typography>

//               <Typography variant="h6" gutterBottom fontWeight="bold">
//                 ถ้าทำ vs ไม่ทำ ต่างกันอย่างไร?
//               </Typography>
//               <TableContainer
//                 component={Paper}
//                 variant="outlined"
//                 sx={{ mb: 3 }}
//               >
//                 <Table size="small">
//                   <TableHead sx={{ bgcolor: "#e3f2fd" }}>
//                     <TableRow>
//                       <TableCell>
//                         <strong>สถานะ</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>ผลลัพธ์บน Google</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>ผลกระทบ</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>❌ ไม่ทำ</TableCell>
//                       <TableCell>ลิงก์สีน้ำเงิน + คำบรรยายธรรมดา</TableCell>
//                       <TableCell>ดูไม่เด่น, คนคลิกน้อย (CTR ต่ำ)</TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>✅ ทำ JSON-LD</TableCell>
//                       <TableCell>
//                         มีรูปภาพ, มีดาว, มีราคา, มีคำถาม FAQ
//                       </TableCell>
//                       <TableCell>
//                         <strong>ดูน่าเชื่อถือ, คนแย่งกันคลิก (CTR สูง)</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <Typography paragraph>
//                 <strong>วิธีเขียนใน Next.js (App Router):</strong> <br />
//                 เราจะประกาศตัวแปร object และใช้{" "}
//                 <code>dangerouslySetInnerHTML</code> ฝังลงไปในหน้าเว็บครับ
//               </Typography>

//               <CodeBlock title="app/blog/[slug]/page.tsx" code={jsonLdCode} />

//               <Typography variant="caption" color="text.secondary">
//                 *Tip: สามารถเช็คความถูกต้องได้ที่เว็บ{" "}
//                 <a
//                   href="https://search.google.com/test/rich-results"
//                   target="_blank"
//                   rel="noreferrer"
//                 >
//                   Rich Results Test
//                 </a>
//               </Typography>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//     Chapter 7: Google Analytics (The Eyes of Website)
// ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-7"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <AnalyticsIcon color="primary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   7. Google Analytics (ดวงตาของเว็บไซต์)
//                 </Typography>
//               </Box>

//               <Typography paragraph>
//                 ถ้า <strong>SEO</strong> คือการเรียกลูกค้าเข้าร้าน...
//                 <strong>Google Analytics</strong> คือกล้องวงจรปิดที่คอยดูว่า
//                 ลูกค้าเข้ามาแล้วทำอะไรบ้าง? เดินไปโซนไหน? หยิบจับอะไร?
//                 หรือเดินเข้ามาแล้วเดินออกทันที?
//               </Typography>

//               <Divider sx={{ my: 3 }} />

//               {/* ส่วนที่ 1: มีไว้ทำไม? */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   fontWeight="bold"
//                   color="text.primary"
//                 >
//                   ทำไมต้องมี? ช่วยอะไรเราได้บ้าง?
//                 </Typography>
//                 <Grid container spacing={2}>
//                   {[
//                     {
//                       title: "รู้ที่มา (Traffic Source)",
//                       desc: "รู้ว่าคนเข้าเว็บมาจากไหน? มาจาก Google (SEO), Facebook (Social), หรือพิมพ์ชื่อเว็บเข้ามาเอง (Direct) จะได้โฟกัสถูกจุด",
//                     },
//                     {
//                       title: "รู้พฤติกรรม (Behavior)",
//                       desc: "เขาอ่านบทความเราจบรึเปล่า? อยู่หน้าเว็บนานแค่ไหน? หรือกดปิดทันที (Bounce Rate) เพื่อนำไปปรับปรุง Content",
//                     },
//                     {
//                       title: "รู้กลุ่มเป้าหมาย (Audience)",
//                       desc: "คนเข้าเว็บเป็นผู้ชาย/ผู้หญิง อายุเท่าไหร่ ใช้มือถือรุ่นอะไร เข้าจากจังหวัดไหน ข้อมูลนี้สำคัญมากเวลาจะยิงโฆษณา (Ads)",
//                     },
//                     {
//                       title: "รู้วัดผล (Conversion)",
//                       desc: "สำคัญที่สุด! รู้ว่ามีคนกดปุ่ม 'สั่งซื้อ' หรือ 'ติดต่อเรา' กี่คน จากบทความไหนที่ทำให้ขายของได้",
//                     },
//                   ].map((item, index) => (
//                     <Grid size={{ xs: 12, sm: 6 }} key={index}>
//                       <Paper
//                         variant="outlined"
//                         sx={{ p: 2, height: "100%", bgcolor: "#f8f9fa" }}
//                       >
//                         <Typography
//                           variant="subtitle1"
//                           fontWeight="bold"
//                           gutterBottom
//                         >
//                           {index + 1}. {item.title}
//                         </Typography>
//                         <Typography variant="body2" color="text.secondary">
//                           {item.desc}
//                         </Typography>
//                       </Paper>
//                     </Grid>
//                   ))}
//                 </Grid>
//               </Box>

//               {/* ส่วนที่ 2: ไม่มีจะเป็นอย่างไร? */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   fontWeight="bold"
//                   color="error"
//                 >
//                   ถ้าไม่มี Google Analytics จะเป็นอย่างไร?
//                 </Typography>
//                 <Alert
//                   severity="error"
//                   icon={<VisibilityOffIcon fontSize="inherit" />}
//                   sx={{ mb: 2 }}
//                 >
//                   <AlertTitle>เหมือนขับรถปิดตา (Flying Blind)</AlertTitle>
//                   คุณจะไม่รู้เลยว่าสิ่งที่คุณทำไป (เขียนบทความ, ยิงแอด,
//                   ปรับเว็บ) มันได้ผลหรือไม่
//                 </Alert>
//                 <TableContainer component={Paper} variant="outlined">
//                   <Table size="small">
//                     <TableHead sx={{ bgcolor: "#ffebee" }}>
//                       <TableRow>
//                         <TableCell>
//                           <strong>สถานการณ์</strong>
//                         </TableCell>
//                         <TableCell>
//                           <strong>ผลเสียที่เกิดขึ้น</strong>
//                         </TableCell>
//                       </TableRow>
//                     </TableHead>
//                     <TableBody>
//                       <TableRow>
//                         <TableCell>ยอดขายตก</TableCell>
//                         <TableCell>
//                           ไม่รู้สาเหตุว่าตกเพราะคนไม่เข้าเว็บ
//                           หรือเข้าแล้วแต่ปุ่มกดสั่งซื้อพัง
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>ยิงโฆษณา Facebook</TableCell>
//                         <TableCell>
//                           ไม่รู้ว่าเงินที่จ่ายไป คุ้มค่าไหม
//                           มีคนคลิกเข้ามาซื้อจริงหรือเปล่า (ตำน้ำพริกละลายแม่น้ำ)
//                         </TableCell>
//                       </TableRow>
//                       <TableRow>
//                         <TableCell>ปรับปรุงเว็บใหม่</TableCell>
//                         <TableCell>
//                           ไม่รู้ว่าคนชอบดีไซน์ใหม่ไหม
//                           หรือเปลี่ยนแล้วคนงงจนกดออกมากกว่าเดิม
//                         </TableCell>
//                       </TableRow>
//                     </TableBody>
//                   </Table>
//                 </TableContainer>
//               </Box>

//               {/* ส่วนที่ 3: วิธีทำใน Next.js */}
//               <Box>
//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   fontWeight="bold"
//                   color="primary"
//                 >
//                   วิธีติดตั้งใน Next.js (แบบมือโปร)
//                 </Typography>
//                 <Typography paragraph>
//                   อย่าไปก๊อปปี้ Script <code>&lt;script&gt;</code>{" "}
//                   มาแปะมั่วซั่วใน <code>head</code> แบบสมัยก่อน
//                   เพราะจะทำให้เว็บโหลดช้า (Google เกลียดเว็บช้า)
//                 </Typography>

//                 <Alert severity="success" sx={{ mb: 2 }}>
//                   <AlertTitle>Best Practice</AlertTitle>
//                   Next.js มี Library พิเศษชื่อ <code>
//                     @next/third-parties
//                   </code>{" "}
//                   ที่ช่วยโหลด Google Analytics แบบอัจฉริยะ (โหลดทีหลังสุด
//                   เพื่อให้หน้าเว็บเราขึ้นมาก่อนทันที)
//                 </Alert>

//                 <List dense sx={{ bgcolor: "#e8f5e9", borderRadius: 2, p: 2 }}>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="1. ไปที่ analytics.google.com" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="2. ล็อกอิน Gmail แล้วกด Start measuring (หรือถ้ามีบัญชีแล้ว ให้กดรูปเฟือง Admin มุมซ้ายล่าง > Create Property)" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="3. กรอกชื่อเว็บ (Property Name) กด Next ไปเรื่อยๆ จนถึงขั้นตอนเลือกแพลตฟอร์ม" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="4. เลือก Web" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="5. กรอก URL เว็บของคุณ (ใส่ http://localhost:3000 ไปก่อนก็ได้ถ้ายังไม่มีโดเมนจริง หรือใส่โดเมนจริงไปเลยก็ได้) และตั้งชื่อ Stream Name" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="6. กด Create stream" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="7. คุณจะเห็นหน้า Web stream details ให้มองหา Measurement ID ที่ขึ้นต้นด้วย G-XXXXXXXXXX (ก๊อปปี้รหัสนี้ไว้ครับ)" />
//                   </ListItem>
//                 </List>

//                 <CodeBlock title="app/layout.tsx" code={ga4Code} />

//                 <Typography
//                   variant="h5"
//                   gutterBottom
//                   fontWeight="bold"
//                   color="primary"
//                 >
//                   วิธีตรวจสอบว่าใช้งานได้ไหม?
//                 </Typography>
//                 <List dense sx={{ bgcolor: "#e8f5e9", borderRadius: 2, p: 2 }}>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="1. เปิดเว็บ:" />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText primary="2. เช็คใน Google Analytics:" />
//                   </ListItem>
//                   <ListItem sx={{ ml: 5 }}>
//                     <Stack>
//                       <ListItemText primary="     . กลับไปที่หน้า Dashboard ของ Google Analytics" />
//                       <ListItemText primary="     . เมนูซ้ายมือ เลือก Reports > Realtime" />
//                       <ListItemText primary="     . รอสัก 1-2 นาที ถ้าเห็นกราฟขยับ หรือมีเลข Users in last 30 minutes ขึ้นเป็น 1 แปลว่า สำเร็จครับ! 🎉" />
//                     </Stack>
//                   </ListItem>
//                 </List>
//               </Box>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//     Chapter 8: Performance & UX (The Final 5%)
// ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-8"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <SpeedIcon color="secondary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   8. Performance & UX (เก็บตก 5% สุดท้าย)
//                 </Typography>
//               </Box>

//               <Typography paragraph>
//                 Google ไม่ได้ดูแค่ Code แต่ดูด้วยว่า{" "}
//                 <strong>"เว็บโหลดเร็วไหม?"</strong> และ{" "}
//                 <strong>"ใช้งานง่ายไหม?"</strong>
//                 นี่คือ 3 เทคนิคสุดท้ายที่จะทำให้เว็บคุณได้คะแนนเต็ม 100
//               </Typography>

//               <Divider sx={{ my: 3 }} />

//               {/* 8.1 Image Optimization */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" gutterBottom fontWeight="bold">
//                   8.1 Image Optimization (แก้ปัญหาเว็บอืด)
//                 </Typography>
//                 <Alert severity="info" sx={{ mb: 2 }}>
//                   <AlertTitle>Core Web Vitals</AlertTitle>
//                   รูปภาพคือสาเหตุอันดับ 1 ที่ทำให้เว็บโหลดช้า (LCP) Next.js มี
//                   Component พิเศษมาช่วยเรื่องนี้
//                 </Alert>
//                 <CodeBlock title="การใช้ next/image" code={imageCode} />
//               </Box>

//               {/* 8.2 Custom 404 */}
//               <Box sx={{ mb: 4 }}>
//                 <Typography variant="h6" gutterBottom fontWeight="bold">
//                   8.2 Custom 404 Page (หน้าหาไม่เจอ)
//                 </Typography>
//                 <Typography paragraph>
//                   ถ้าคนเข้าเว็บมาแล้วเจอหน้าขาวๆ หรือ Error เขาจะกดปิดทันที
//                   (Bounce Rate พุ่ง) เราควรทำหน้า 404 สวยๆ
//                   และมีปุ่มให้เขากลับไปหน้าหลัก
//                 </Typography>
//                 <CodeBlock title="app/not-found.tsx" code={notFoundCode} />
//               </Box>

//               {/* 8.3 Redirects */}
//               <Box>
//                 <Typography variant="h6" gutterBottom fontWeight="bold">
//                   8.3 Redirects (ย้ายบ้านต้องบอกกล่าว)
//                 </Typography>
//                 <Typography paragraph>
//                   ถ้าคุณเปลี่ยน URL บทความจาก <code>/old-url</code> ไป{" "}
//                   <code>/new-url</code>
//                   อย่าลืมทำ <strong>301 Redirect</strong> เพื่อบอก Google
//                   ว่าย้ายบ้านแล้ว (คะแนน SEO จะได้ย้ายตามมาด้วย ไม่หายไปไหน)
//                 </Typography>
//                 <CodeBlock title="next.config.mjs" code={redirectCode} />
//               </Box>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//            Chapter 9: Comparison (สรุปจบในหน้าเดียว)
//        ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-9"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px", bgcolor: "#fffde7" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <CompareArrowsIcon color="warning" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   9. สรุปความต่าง: Metadata vs generateMetadata vs JSON-LD
//                 </Typography>
//               </Box>

//               <Typography paragraph>
//                 หลายคนสับสนว่า 3 ตัวนี้คืออะไร? ต้องทำอันไหนบ้าง?
//                 บทนี้จะสรุปให้เข้าใจง่ายที่สุดด้วยการเปรียบเทียบกับ{" "}
//                 <strong>"หนังสือ"</strong> ครับ
//               </Typography>

//               <TableContainer
//                 component={Paper}
//                 variant="outlined"
//                 sx={{ mb: 4 }}
//               >
//                 <Table>
//                   <TableHead sx={{ bgcolor: "#333" }}>
//                     <TableRow>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>หัวข้อ</strong>
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>1. Metadata (Static)</strong>
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>2. generateMetadata (Dynamic)</strong>
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>3. JSON-LD (Schema)</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <strong>เปรียบเหมือน</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>"ปกหนังสือ"</strong> (พิมพ์มาตายตัว)
//                       </TableCell>
//                       <TableCell>
//                         <strong>"ป้ายชื่อดิจิทัล"</strong>{" "}
//                         (เปลี่ยนข้อความได้ตามคนถือ)
//                       </TableCell>
//                       <TableCell>
//                         <strong>"บาร์โค้ด"</strong> (สำหรับเครื่องสแกนอ่าน)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>หน้าที่หลัก</strong>
//                       </TableCell>
//                       <TableCell>
//                         โชว์ชื่อเว็บใน Tab Browser และเวลาแชร์ลง Facebook
//                       </TableCell>
//                       <TableCell>
//                         เหมือนข้อ 1 แต่ใช้สำหรับหน้าที่มีเนื้อหาเปลี่ยนไปเรื่อยๆ
//                       </TableCell>
//                       <TableCell>
//                         บอก Google ให้แสดง "ดาวรีวิว", "ราคา", "สูตรอาหาร" (Rich
//                         Snippets)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>ตำแหน่งที่อยู่</strong>
//                       </TableCell>
//                       <TableCell>
//                         อยู่ใน <code>&lt;head&gt;</code>
//                       </TableCell>
//                       <TableCell>
//                         อยู่ใน <code>&lt;head&gt;</code> (สร้างโดย Server)
//                       </TableCell>
//                       <TableCell>
//                         อยู่ใน <code>&lt;script&gt;</code> (User มองไม่เห็น)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>ใช้กับหน้าไหน?</strong>
//                       </TableCell>
//                       <TableCell>Home, About, Contact</TableCell>
//                       <TableCell>Blog Detail, Product Detail</TableCell>
//                       <TableCell>
//                         <strong>ทุกหน้า!</strong> (แต่เปลี่ยนประเภทไปตามเนื้อหา)
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <Divider sx={{ my: 4 }} />

//               {/* เจาะลึกทีละตัว */}
//               <Grid container spacing={3}>
//                 {/* 1. Metadata */}
//                 <Grid size={{ xs: 12, md: 4 }}>
//                   <Paper
//                     variant="outlined"
//                     sx={{
//                       p: 2,
//                       height: "100%",
//                       borderColor: "primary.main",
//                       borderWidth: 2,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       color="primary"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       1. Metadata (Static)
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>คืออะไร:</strong> การเขียนโค้ดแบบฝังตายตัว
//                       (Hardcode)
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>วิธีใช้:</strong>{" "}
//                       <code>
//                         export const metadata = &#123; title: '...' &#125;
//                       </code>
//                     </Typography>
//                     <Alert severity="success" sx={{ py: 0 }}>
//                       <Typography variant="caption">
//                         เหมาะกับหน้า Home ที่เนื้อหาไม่เปลี่ยน
//                       </Typography>
//                     </Alert>
//                   </Paper>
//                 </Grid>

//                 {/* 2. generateMetadata */}
//                 <Grid size={{ xs: 12, md: 4 }}>
//                   <Paper
//                     variant="outlined"
//                     sx={{
//                       p: 2,
//                       height: "100%",
//                       borderColor: "secondary.main",
//                       borderWidth: 2,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       color="secondary"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       2. generateMetadata
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>คืออะไร:</strong> ฟังก์ชันที่ทำงานบน Server เพื่อ
//                       "ดึงข้อมูลจาก DB" มาสร้าง Title
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>วิธีใช้:</strong>{" "}
//                       <code>export async function generateMetadata()</code>
//                     </Typography>
//                     <Alert severity="warning" sx={{ py: 0 }}>
//                       <Typography variant="caption">
//                         เหมาะกับหน้า Blog/Product (URL เปลี่ยน)
//                       </Typography>
//                     </Alert>
//                   </Paper>
//                 </Grid>

//                 {/* 3. JSON-LD */}
//                 <Grid size={{ xs: 12, md: 4 }}>
//                   <Paper
//                     variant="outlined"
//                     sx={{
//                       p: 2,
//                       height: "100%",
//                       borderColor: "success.main",
//                       borderWidth: 2,
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       color="success.main"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       3. JSON-LD
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>คืออะไร:</strong> ภาษาที่คุยกับ Robot โดยเฉพาะ
//                       เพื่อขอพื้นที่พิเศษบน Google
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       <strong>วิธีใช้:</strong>{" "}
//                       <code>&lt;script type="ld+json"&gt;</code>
//                     </Typography>
//                     <Alert severity="info" sx={{ py: 0 }}>
//                       <Typography variant="caption">
//                         ต้องทำเสริมเข้าไปเสมอ (ห้ามขาด)
//                       </Typography>
//                     </Alert>
//                   </Paper>
//                 </Grid>
//               </Grid>

//               <Box sx={{ mt: 4, bgcolor: "#e3f2fd", p: 3, borderRadius: 2 }}>
//                 <Typography variant="h6" gutterBottom fontWeight="bold">
//                   🏁 สรุป: ต้องทำอันไหนบ้าง?
//                 </Typography>
//                 <List>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText
//                       primary="หน้า Home / About / Contact"
//                       secondary="ใช้ Metadata (Static) + JSON-LD (WebSite/Organization)"
//                     />
//                   </ListItem>
//                   <ListItem>
//                     <CheckCircleIcon color="success" sx={{ mr: 2 }} />
//                     <ListItemText
//                       primary="หน้า Blog Detail / Product Detail"
//                       secondary="ใช้ generateMetadata (Dynamic) + JSON-LD (Article/Product)"
//                     />
//                   </ListItem>
//                 </List>
//                 <Typography
//                   variant="body2"
//                   color="error"
//                   sx={{ mt: 1, fontWeight: "bold" }}
//                 >
//                   *หมายเหตุ: Metadata กับ generateMetadata
//                   เลือกใช้อย่างใดอย่างหนึ่งต่อ 1 หน้า (ห้ามใช้พร้อมกัน) แต่
//                   JSON-LD ต้องมีเสมอ!
//                 </Typography>
//               </Box>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//            Chapter 9: The Grand Summary (สรุปจบในหน้าเดียว)
//        ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-9"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px", bgcolor: "#fffde7" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <SchoolIcon color="warning" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   9. สรุปสูตรสำเร็จ: Metadata vs JSON-LD
//                 </Typography>
//               </Box>

//               <Typography paragraph>
//                 คำถามยอดฮิต: <strong>"ต้องทำทั้งหมดไหม?"</strong>,{" "}
//                 <strong>"มันทับซ้อนกันไหม?"</strong> <br />
//                 คำตอบคือ: <strong>ต้องทำร่วมกันครับ!</strong>{" "}
//                 เพราะมันทำหน้าที่คนละอย่างกัน เหมือนเราแต่งตัว (Metadata)
//                 และพกบัตรประชาชน (JSON-LD)
//               </Typography>

//               <TableContainer
//                 component={Paper}
//                 variant="outlined"
//                 sx={{ mb: 4 }}
//               >
//                 <Table>
//                   <TableHead sx={{ bgcolor: "#333" }}>
//                     <TableRow>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>หัวข้อ</strong>
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>Metadata / generateMetadata</strong>
//                       </TableCell>
//                       <TableCell sx={{ color: "white" }}>
//                         <strong>JSON-LD (Schema)</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <strong>เปรียบเหมือน</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>"หน้าตาและชื่อเสียง"</strong> (ให้คนเห็น)
//                       </TableCell>
//                       <TableCell>
//                         <strong>"เอกสารราชการ"</strong> (ให้หุ่นยนต์อ่าน)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>เป้าหมาย</strong>
//                       </TableCell>
//                       <TableCell>
//                         โชว์บน Tab Browser และเวลาแชร์ลง Facebook
//                       </TableCell>
//                       <TableCell>
//                         โชว์ "ดาวรีวิว", "ราคา", "รูปภาพ" บน Google Search
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>ความจำเป็น</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>ขาดไม่ได้ (Must Have)</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>ควรมี (Highly Recommended)</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <Divider sx={{ my: 4 }}>
//                 <Chip label="เลือกใช้สูตรไหนดี?" color="primary" />
//               </Divider>

//               {/* สูตรที่ 1 */}
//               <Box sx={{ mb: 4 }}>
//                 <Box display="flex" alignItems="center" gap={1} mb={1}>
//                   <ScienceIcon color="success" />
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     color="success.main"
//                   >
//                     สูตรที่ 1: สำหรับหน้าทั่วไป (Static Pages)
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   ใช้กับหน้า: <strong>Home, About, Contact, Login</strong>{" "}
//                   (เนื้อหาไม่เปลี่ยนตาม URL)
//                 </Typography>
//                 <Alert severity="success" variant="outlined" sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" fontWeight="bold">
//                     ใช้คู่กัน: <code>export const metadata</code> +{" "}
//                     <code>JSON-LD</code>
//                   </Typography>
//                 </Alert>
//                 <CodeBlock title="สูตร Static Page" code={formulaStaticCode} />
//               </Box>

//               {/* สูตรที่ 2 */}
//               <Box sx={{ mb: 4 }}>
//                 <Box display="flex" alignItems="center" gap={1} mb={1}>
//                   <ScienceIcon color="secondary" />
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     color="secondary.main"
//                   >
//                     สูตรที่ 2: สำหรับหน้า Dynamic (Dynamic Pages)
//                   </Typography>
//                 </Box>
//                 <Typography variant="body2" color="text.secondary" paragraph>
//                   ใช้กับหน้า:{" "}
//                   <strong>บทความ (Blog Slug), สินค้า (Product ID)</strong>{" "}
//                   (เนื้อหาเปลี่ยนตาม URL)
//                 </Typography>
//                 <Alert severity="info" variant="outlined" sx={{ mb: 2 }}>
//                   <Typography variant="subtitle2" fontWeight="bold">
//                     ใช้คู่กัน: <code>generateMetadata</code> +{" "}
//                     <code>JSON-LD</code>
//                   </Typography>
//                 </Alert>
//                 <CodeBlock
//                   title="สูตร Dynamic Page"
//                   code={formulaDynamicCode}
//                 />
//               </Box>

//               {/* ข้อควรระวัง */}
//               <Paper
//                 elevation={0}
//                 sx={{ p: 3, bgcolor: "#ffebee", border: "1px dashed red" }}
//               >
//                 <Box display="flex" gap={2}>
//                   <WarningIcon color="error" fontSize="large" />
//                   <Box>
//                     <Typography
//                       variant="h6"
//                       color="error"
//                       fontWeight="bold"
//                       gutterBottom
//                     >
//                       กฎเหล็กห้ามลืม!
//                     </Typography>
//                     <Typography paragraph>
//                       ในไฟล์เดียวกัน <strong>ห้ามใช้</strong>{" "}
//                       <code>export const metadata</code> และ{" "}
//                       <code>generateMetadata</code>{" "}
//                       <strong>พร้อมกันเด็ดขาด!</strong>
//                     </Typography>
//                     <Typography variant="body2">
//                       Next.js จะสับสนและ Error ทันที
//                       (เพราะมันไม่รู้ว่าจะเอาชื่อไหนไปโชว์)
//                       ต้องเลือกใช้อย่างใดอย่างหนึ่งตามความเหมาะสมของหน้านั้นๆ
//                     </Typography>
//                   </Box>
//                 </Box>
//               </Paper>
//             </Paper>

//             {/* ----------------------------------------------------------------------------------
//            Chapter 10: GSC vs GA4 (The Power Duo)
//        ---------------------------------------------------------------------------------- */}
//             <Paper
//               id="chapter-10"
//               component="section"
//               sx={{ p: 4, mb: 4, scrollMarginTop: "100px" }}
//             >
//               <Box display="flex" alignItems="center" gap={1} mb={2}>
//                 <AssessmentIcon color="primary" fontSize="large" />
//                 <Typography variant="h4" component="h2" fontWeight="bold">
//                   10. GSC vs GA4: ต่างกันยังไง? ต้องใช้ตอนไหน?
//                 </Typography>
//               </Box>

//               <Typography paragraph>
//                 มือใหม่หลายคนสับสนว่า{" "}
//                 <strong>Google Search Console (GSC)</strong> กับ{" "}
//                 <strong>Google Analytics (GA4)</strong>
//                 มันเหมือนกันไหม? ทำไมต้องติดทั้งคู่?
//                 บทนี้จะไขข้อข้องใจให้กระจ่างครับ
//               </Typography>

//               <Alert
//                 severity="info"
//                 sx={{ mb: 4 }}
//                 icon={<StorefrontIcon fontSize="inherit" />}
//               >
//                 <AlertTitle>เปรียบเทียบง่ายๆ เหมือน "ร้านค้า"</AlertTitle>
//                 <Box component="ul" sx={{ m: 0, pl: 2 }}>
//                   <Box component="li" sx={{ mb: 1 }}>
//                     <strong>Search Console (GSC)</strong> ={" "}
//                     <strong>"กล้องวงจรปิดหน้าร้าน"</strong> <br />
//                     เอาไว้ดูว่าคนเดินผ่านเยอะไหม? เห็นป้ายร้านเราชัดไหม?
//                     ตัดสินใจเปิดประตูเข้ามาหรือเปล่า? (ก่อนเข้าร้าน)
//                   </Box>
//                   <Box component="li">
//                     <strong>Analytics (GA4)</strong> ={" "}
//                     <strong>"กล้องวงจรปิดในร้าน"</strong> <br />
//                     เอาไว้ดูว่าลูกค้าเข้ามาแล้วเดินไปโซนไหน? หยิบสินค้าอะไร?
//                     อยู่ในร้านนานแค่ไหน? ซื้อของไหม? (หลังเข้าร้าน)
//                   </Box>
//                 </Box>
//               </Alert>

//               <Typography variant="h6" gutterBottom fontWeight="bold">
//                 ตารางเปรียบเทียบหมัดต่อหมัด
//               </Typography>
//               <TableContainer
//                 component={Paper}
//                 variant="outlined"
//                 sx={{ mb: 4 }}
//               >
//                 <Table>
//                   <TableHead sx={{ bgcolor: "#e3f2fd" }}>
//                     <TableRow>
//                       <TableCell>
//                         <strong>หัวข้อ</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>Google Search Console (GSC)</strong>
//                       </TableCell>
//                       <TableCell>
//                         <strong>Google Analytics (GA4)</strong>
//                       </TableCell>
//                     </TableRow>
//                   </TableHead>
//                   <TableBody>
//                     <TableRow>
//                       <TableCell>
//                         <strong>หน้าที่หลัก</strong>
//                       </TableCell>
//                       <TableCell>ดูแลสุขภาพเว็บ & SEO (Technical)</TableCell>
//                       <TableCell>
//                         วิเคราะห์พฤติกรรมคน & การตลาด (Marketing)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>ข้อมูลมาจาก</strong>
//                       </TableCell>
//                       <TableCell>Google Search ล้วนๆ (Organic)</TableCell>
//                       <TableCell>
//                         ทุกช่องทาง (Google, Facebook, Direct, Ads)
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>ตัววัดผลเด่นๆ</strong>
//                       </TableCell>
//                       <TableCell>Clicks, Impressions, CTR, Position</TableCell>
//                       <TableCell>
//                         Users, Sessions, Engagement Time, Conversion
//                       </TableCell>
//                     </TableRow>
//                     <TableRow>
//                       <TableCell>
//                         <strong>คำถามที่ตอบได้</strong>
//                       </TableCell>
//                       <TableCell>"คนค้นหาคำว่าอะไรถึงเจอเรา?"</TableCell>
//                       <TableCell>"คนเข้ามาแล้วชอบอ่านหน้าไหนที่สุด?"</TableCell>
//                     </TableRow>
//                   </TableBody>
//                 </Table>
//               </TableContainer>

//               <Grid container spacing={4}>
//                 {/* ฝั่ง GSC */}
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <Paper
//                     variant="outlined"
//                     sx={{
//                       p: 3,
//                       height: "100%",
//                       borderTop: "4px solid #4285F4",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       color="primary"
//                     >
//                       1. Google Search Console (SEO Focus)
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       เครื่องมือสำหรับ{" "}
//                       <strong>Developer & SEO Specialist</strong> โดยเฉพาะ
//                       ใช้เพื่อคุยกับ Google Bot
//                     </Typography>
//                     <Typography variant="subtitle2" fontWeight="bold">
//                       ต้องดูเมนูไหนบ้าง?
//                     </Typography>
//                     <List dense>
//                       <ListItem>
//                         <CheckCircleIcon
//                           color="primary"
//                           sx={{ mr: 1, fontSize: 20 }}
//                         />
//                         <ListItemText primary="Performance: ดู Keyword ที่คนใช้ค้นหา" />
//                       </ListItem>
//                       <ListItem>
//                         <CheckCircleIcon
//                           color="primary"
//                           sx={{ mr: 1, fontSize: 20 }}
//                         />
//                         <ListItemText primary="URL Inspection: เช็คว่าหน้าเว็บติด Google หรือยัง" />
//                       </ListItem>
//                       <ListItem>
//                         <CheckCircleIcon
//                           color="primary"
//                           sx={{ mr: 1, fontSize: 20 }}
//                         />
//                         <ListItemText primary="Sitemaps: ส่งแผนที่เว็บให้ Bot เดิน" />
//                       </ListItem>
//                     </List>
//                   </Paper>
//                 </Grid>

//                 {/* ฝั่ง GA4 */}
//                 <Grid size={{ xs: 12, md: 6 }}>
//                   <Paper
//                     variant="outlined"
//                     sx={{
//                       p: 3,
//                       height: "100%",
//                       borderTop: "4px solid #F4B400",
//                     }}
//                   >
//                     <Typography
//                       variant="h6"
//                       fontWeight="bold"
//                       gutterBottom
//                       sx={{ color: "#F4B400" }}
//                     >
//                       2. Google Analytics 4 (User Focus)
//                     </Typography>
//                     <Typography variant="body2" paragraph>
//                       เครื่องมือสำหรับ{" "}
//                       <strong>Marketer & Content Creator</strong>{" "}
//                       ใช้เพื่อเข้าใจมนุษย์ที่เข้าเว็บ
//                     </Typography>
//                     <Typography variant="subtitle2" fontWeight="bold">
//                       ต้องดูเมนูไหนบ้าง?
//                     </Typography>
//                     <List dense>
//                       <ListItem>
//                         <CheckCircleIcon
//                           sx={{ mr: 1, fontSize: 20, color: "#F4B400" }}
//                         />
//                         <ListItemText primary="Acquisition: คนมาจากไหน? (FB vs Google)" />
//                       </ListItem>
//                       <ListItem>
//                         <CheckCircleIcon
//                           sx={{ mr: 1, fontSize: 20, color: "#F4B400" }}
//                         />
//                         <ListItemText primary="Engagement: คนอ่านหน้าไหนนานที่สุด?" />
//                       </ListItem>
//                       <ListItem>
//                         <CheckCircleIcon
//                           sx={{ mr: 1, fontSize: 20, color: "#F4B400" }}
//                         />
//                         <ListItemText primary="Realtime: ตอนนี้มีคนอยู่ในเว็บกี่คน?" />
//                       </ListItem>
//                     </List>
//                   </Paper>
//                 </Grid>
//               </Grid>

//               <Box sx={{ mt: 4, textAlign: "center" }}>
//                 <Typography paragraph color="text.secondary">
//                   <strong>สรุป:</strong> ขาดอันใดอันหนึ่งไม่ได้! <br />
//                   {`GSC ช่วยดึงคนเข้าร้าน (SEO) --> GA4
//                   ช่วยให้เราบริการลูกค้าได้ดีขึ้น (UX)`}
//                 </Typography>
//               </Box>
//             </Paper>

//             <Paper
//               elevation={3}
//               sx={{
//                 p: 4,
//                 my: 6,
//                 background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)", // พื้นหลังสีเข้มเท่ๆ
//                 color: "white",
//                 borderRadius: 4,
//                 textAlign: "center",
//               }}
//             >
//               <Box display="flex" justifyContent="center" mb={2}>
//                 <AutoStoriesIcon sx={{ fontSize: 60, color: "#ffb74d" }} />
//               </Box>

//               <Typography
//                 variant="h4"
//                 component="h3"
//                 fontWeight="bold"
//                 gutterBottom
//                 sx={{ color: "#ffb74d" }}
//               >
//                 Live Demo: โปรเจกต์ตัวอย่างจริง
//               </Typography>

//               <Typography
//                 variant="body1"
//                 sx={{ mb: 4, opacity: 0.9, maxWidth: "600px", mx: "auto" }}
//               >
//                 ดูตัวอย่างการนำทฤษฎี SEO และ Server-Side Data Fetching
//                 ไปใช้จริงกับ
//                 <strong> Harry Potter API</strong> (ดึงข้อมูลหนังสือ 8 เล่ม
//                 พร้อมทำ Schema.org แบบ Real-time)
//               </Typography>

//               <Button
//                 component={Link} // ใช้ Link ของ Next.js
//                 href="/books"
//                 variant="contained"
//                 size="large"
//                 color="warning"
//                 sx={{
//                   px: 5,
//                   py: 1.5,
//                   fontSize: "1.1rem",
//                   fontWeight: "bold",
//                   borderRadius: "50px",
//                 }}
//               >
//                 ดูหน้าตัวอย่าง (Books API)
//               </Button>
//             </Paper>

//             {/* --- เริ่มต้นส่วน WCAG Banner --- */}
//             <Paper
//               elevation={3}
//               sx={{
//                 p: { xs: 3, md: 5 },
//                 my: 6,
//                 borderRadius: 4,
//                 background: "linear-gradient(135deg, #2e7d32 0%, #4caf50 100%)", // สีเขียวสื่อถึงการผ่านเกณฑ์ (Pass)
//                 color: "white",
//                 position: "relative",
//                 overflow: "hidden",
//               }}
//             >
//               {/* ลวดลายพื้นหลังจางๆ (Optional) */}
//               <AccessibilityNewIcon
//                 sx={{
//                   position: "absolute",
//                   right: -20,
//                   bottom: -20,
//                   fontSize: 200,
//                   opacity: 0.1,
//                   transform: "rotate(-15deg)",
//                 }}
//               />

//               <Grid
//                 container
//                 spacing={3}
//                 alignItems="center"
//                 sx={{ position: "relative", zIndex: 1 }}
//               >
//                 <Grid size={{ xs: 12, md: 8 }}>
//                   <Box display="flex" alignItems="center" gap={2} mb={2}>
//                     <Box
//                       sx={{
//                         bgcolor: "rgba(255,255,255,0.2)",
//                         p: 1,
//                         borderRadius: "50%",
//                         display: "flex",
//                       }}
//                     >
//                       <AccessibilityNewIcon
//                         sx={{ fontSize: 32, color: "white" }}
//                       />
//                     </Box>
//                     <Typography variant="h5" component="h3" fontWeight="bold">
//                       อย่าลืม! SEO ที่ดีต้องมาคู่กับ Accessibility (WCAG)
//                     </Typography>
//                   </Box>

//                   <Typography
//                     variant="body1"
//                     paragraph
//                     sx={{ opacity: 0.9, lineHeight: 1.8 }}
//                   >
//                     รู้หรือไม่? Google
//                     ให้คะแนนเว็บไซต์ที่คนพิการเข้าถึงได้สูงกว่าเว็บทั่วไป
//                     การทำตามมาตรฐาน <strong>WCAG 2.1 (POUR)</strong>{" "}
//                     นอกจากจะช่วยขยายฐานผู้ใช้งานแล้ว ยังทำให้โครงสร้าง HTML
//                     ของคุณแข็งแกร่งและถูกใจ Search Engine อีกด้วย
//                   </Typography>

//                   <Box display="flex" gap={2} flexWrap="wrap">
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         bgcolor: "rgba(0,0,0,0.2)",
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: 1,
//                       }}
//                     >
//                       ✅ เพิ่ม Traffic
//                     </Typography>
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         bgcolor: "rgba(0,0,0,0.2)",
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: 1,
//                       }}
//                     >
//                       ✅ ถูกกฎหมาย
//                     </Typography>
//                     <Typography
//                       variant="caption"
//                       sx={{
//                         bgcolor: "rgba(0,0,0,0.2)",
//                         px: 1.5,
//                         py: 0.5,
//                         borderRadius: 1,
//                       }}
//                     >
//                       ✅ Google ชอบ
//                     </Typography>
//                   </Box>
//                 </Grid>

//                 <Grid
//                   size={{ xs: 12, md: 4 }}
//                   sx={{ textAlign: { xs: "left", md: "right" } }}
//                 >
//                   <Button
//                     component={Link}
//                     href="/wcag-guide"
//                     variant="contained"
//                     size="large"
//                     endIcon={<ArrowForwardIcon />}
//                     sx={{
//                       bgcolor: "white",
//                       color: "#2e7d32", // สีเขียวเข้ม
//                       fontWeight: "bold",
//                       px: 4,
//                       py: 1.5,
//                       borderRadius: "50px",
//                       fontSize: "1.1rem",
//                       boxShadow: "0 4px 14px 0 rgba(0,0,0,0.2)",
//                       "&:hover": {
//                         bgcolor: "#f1f8e9", // สีเขียวอ่อนๆ เวลา hover
//                         transform: "translateY(-2px)",
//                       },
//                     }}
//                   >
//                     อ่านคู่มือ WCAG
//                   </Button>
//                 </Grid>
//               </Grid>
//             </Paper>
//             {/* --- จบส่วน WCAG Banner --- */}

//             {/* CTA */}
//             <Box
//               sx={{
//                 mt: 8,
//                 textAlign: "center",
//                 p: 4,
//                 bgcolor: "#e3f2fd",
//                 borderRadius: 4,
//               }}
//             >
//               <Typography variant="h5" gutterBottom fontWeight="bold">
//                 พร้อมปล่อยของหรือยัง?
//               </Typography>
//               <Typography paragraph color="text.secondary">
//                 SEO ที่ดีเริ่มจากโครงสร้างที่ถูกต้อง เมื่อ Google
//                 เข้าใจเว็บคุณง่าย อันดับก็จะดีขึ้นตามลำดับ!
//               </Typography>
//             </Box>
//           </Grid>
//         </Grid>
//       </Container>
//     </Box>
//   );
// }

// app/seo-guide/chapters.tsx
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
// Chapter Content Data
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
