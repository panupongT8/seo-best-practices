// import React from "react";
// import { Metadata } from "next";
// import {
//   Container,
//   Typography,
//   Box,
//   Paper,
//   Accordion,
//   AccordionSummary,
//   AccordionDetails,
//   Chip,
//   Divider,
//   Alert,
//   List,
//   ListItem,
//   ListItemText,
//   ListItemIcon,
// } from "@mui/material";
// import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import KeyboardIcon from "@mui/icons-material/Keyboard";
// import PsychologyIcon from "@mui/icons-material/Psychology";
// import BuildIcon from "@mui/icons-material/Build";
// import CircleIcon from "@mui/icons-material/Circle";
// import WcagBreadcrumbs from "./WcagBreadcrumbs";
// import LinkIcon from "@mui/icons-material/Link";

// export const metadata: Metadata = {
//   title: "คู่มือ WCAG 2.1 ฉบับสมบูรณ์ (All Criteria A/AA/AAA) | Dev Guide",
//   description:
//     "รวมเกณฑ์ WCAG 2.1 ครบทุกข้อ แยกตามหลักการ POUR พร้อมคำอธิบายและวิธีแก้ไขสำหรับนักพัฒนา (Semantic HTML, ARIA, Design)",
// };

// // --- DATA STRUCTURE ---
// type WcagCriterion = {
//   id: string;
//   title: string;
//   level: "A" | "AA" | "AAA";
//   desc: string;
//   devNote?: string;
// };

// type WcagSection = {
//   title: string;
//   icon: React.ReactNode;
//   color: string;
//   guidelines: {
//     title: string;
//     criteria: WcagCriterion[];
//   }[];
// };

// const wcagData: WcagSection[] = [
//   {
//     title: "1. Perceivable (ต้องรับรู้ได้)",
//     icon: <VisibilityIcon fontSize="large" />,
//     color: "#1976d2", // Blue
//     guidelines: [
//       {
//         title: "1.1 Text Alternatives (ข้อความทดแทน)",
//         criteria: [
//           {
//             id: "1.1.1",
//             title: "Non-text Content",
//             level: "A",
//             desc: "เนื้อหาที่ไม่ใช่ตัวหนังสือ (รูปภาพ, ปุ่มไอคอน, กราฟ, CAPTCHA) ต้องมีข้อความอธิบาย (Alt text, ARIA label)",
//             devNote:
//               "img ต้องมี alt, ปุ่มต้องมีชื่อ, รูปตกแต่งให้ใส่ alt='' หรือ aria-hidden='true'",
//           },
//         ],
//       },
//       {
//         title: "1.2 Time-based Media (สื่อตามเวลา)",
//         criteria: [
//           {
//             id: "1.2.1",
//             title: "Audio-only and Video-only (Prerecorded)",
//             level: "A",
//             desc: "ถ้ามีแต่เสียงต้องมี Transcript ถ้ามีแต่วิดีโอต้องมีคำบรรยายหรือเสียงบรรยาย",
//           },
//           {
//             id: "1.2.2",
//             title: "Captions (Prerecorded)",
//             level: "A",
//             desc: "วิดีโอที่มีเสียงพูดต้องมี Caption (Subtitles) เสมอ",
//           },
//           {
//             id: "1.2.3",
//             title: "Audio Description or Media Alternative",
//             level: "A",
//             desc: "วิดีโอที่มีภาพสำคัญแต่ไม่มีเสียงพูดถึง ต้องมีเสียงบรรยายภาพ (Audio Description) หรือ Text Alternative",
//           },
//           {
//             id: "1.2.4",
//             title: "Captions (Live)",
//             level: "AA",
//             desc: "การถ่ายทอดสด (Live Stream) ต้องมี Caption แบบ Real-time",
//           },
//           {
//             id: "1.2.5",
//             title: "Audio Description (Prerecorded)",
//             level: "AA",
//             desc: "วิดีโอบันทึกเทป ต้องมีเสียงบรรยายภาพแทรก (Audio Description) สำหรับคนตาบอด",
//           },
//         ],
//       },
//       {
//         title: "1.3 Adaptable (ปรับเปลี่ยนได้)",
//         criteria: [
//           {
//             id: "1.3.1",
//             title: "Info and Relationships",
//             level: "A",
//             desc: "โครงสร้างหน้าเว็บต้องสื่อความหมายทาง Semantic (Heading, List, Table, Label) ไม่ใช่แค่ดูเหมือน",
//             devNote:
//               "ใช้ <h1>-<h6> เรียงลำดับ, ใช้ <label> คู่ <input>, ใช้ <th> ในตาราง",
//           },
//           {
//             id: "1.3.2",
//             title: "Meaningful Sequence",
//             level: "A",
//             desc: "ลำดับการอ่าน (DOM Order) ต้องตรงกับลำดับการแสดงผลที่ตาเห็น (Visual Order)",
//           },
//           {
//             id: "1.3.3",
//             title: "Sensory Characteristics",
//             level: "A",
//             desc: "ห้ามอ้างอิงตำแหน่งด้วยประสาทสัมผัสอย่างเดียว เช่น 'กดปุ่มสีแดงด้านขวา' (คนตาบอดไม่เห็นสี ไม่รู้ขวาซ้าย)",
//           },
//           {
//             id: "1.3.4",
//             title: "Orientation",
//             level: "AA",
//             desc: "เนื้อหาต้องไม่ล็อคหน้าจอ (ห้ามบังคับเป็นแนวนอนหรือแนวตั้งอย่างเดียว)",
//           },
//           {
//             id: "1.3.5",
//             title: "Identify Input Purpose",
//             level: "AA",
//             desc: "ช่องกรอกข้อมูลมาตรฐาน (ชื่อ, อีเมล) ต้องระบุจุดประสงค์เพื่อให้ Browser ช่วยกรอกได้",
//             devNote: "ใช้ autocomplete='email' หรือ autocomplete='tel'",
//           },
//         ],
//       },
//       {
//         title: "1.4 Distinguishable (แยกแยะได้)",
//         criteria: [
//           {
//             id: "1.4.1",
//             title: "Use of Color",
//             level: "A",
//             desc: "ห้ามใช้ 'สี' อย่างเดียวในการสื่อความหมาย (เช่น กราฟเส้นสีต่างกัน ต้องมีสัญลักษณ์ต่างกันด้วย, Error แดง ต้องมีข้อความบอก)",
//           },
//           {
//             id: "1.4.2",
//             title: "Audio Control",
//             level: "A",
//             desc: "ถ้าเสียงเล่นอัตโนมัตินานกว่า 3 วิ ต้องมีปุ่มปิดเสียงหรือปรับลดเสียง",
//           },
//           {
//             id: "1.4.3",
//             title: "Contrast (Minimum)",
//             level: "AA",
//             desc: "ข้อความปกติกับพื้นหลัง ต้องมี Contrast Ratio >= 4.5:1 (ตัวใหญ่ 3:1)",
//           },
//           {
//             id: "1.4.4",
//             title: "Resize Text",
//             level: "AA",
//             desc: "ซูมข้อความได้ถึง 200% โดยที่หน้าเว็บไม่พังและเนื้อหาไม่หาย",
//           },
//           {
//             id: "1.4.5",
//             title: "Images of Text",
//             level: "AA",
//             desc: "อย่าใช้รูปภาพที่เป็นตัวหนังสือ (Image of Text) ให้ใช้ Text จริงๆ แทน เว้นแต่เป็น Logo",
//           },
//           {
//             id: "1.4.10",
//             title: "Reflow",
//             level: "AA",
//             desc: "รองรับหน้าจอเล็ก (320px) โดยไม่เกิด Scrollbar 2 แกน (Responsive Design)",
//           },
//           {
//             id: "1.4.11",
//             title: "Non-text Contrast",
//             level: "AA",
//             desc: "ส่วนประกอบ UI (ปุ่ม, กรอบ input) และกราฟิก ต้องมี Contrast >= 3:1",
//           },
//           {
//             id: "1.4.13",
//             title: "Content on Hover or Focus",
//             level: "AA",
//             desc: "Tooltip หรือ Pop-up ที่เด้งขึ้นมาต้อง: ปิดได้ (Esc), เลื่อนเมาส์ไปทับได้, ไม่หายไปเอง",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "2. Operable (ต้องใช้งานได้)",
//     icon: <KeyboardIcon fontSize="large" />,
//     color: "#ed6c02", // Orange
//     guidelines: [
//       {
//         title: "2.1 Keyboard Accessible",
//         criteria: [
//           {
//             id: "2.1.1",
//             title: "Keyboard",
//             level: "A",
//             desc: "ทุกฟังก์ชันต้องใช้งานได้ด้วยคีย์บอร์ด (Tab, Enter, Space, Arrows)",
//           },
//           {
//             id: "2.1.2",
//             title: "No Keyboard Trap",
//             level: "A",
//             desc: "โฟกัสต้องไม่ติดตายใน Element ใด Element หนึ่ง (เช่น Modal ต้องมีวิธีกดออก)",
//           },
//           {
//             id: "2.1.4",
//             title: "Character Key Shortcuts",
//             level: "A",
//             desc: "ถ้ามีปุ่มลัดคีย์เดียว (เช่นกด 's' เพื่อ save) ต้องปิดได้ หรือเปลี่ยนปุ่มได้ เพื่อกันการกดผิด",
//           },
//         ],
//       },
//       {
//         title: "2.2 Enough Time",
//         criteria: [
//           {
//             id: "2.2.1",
//             title: "Timing Adjustable",
//             level: "A",
//             desc: "ถ้ามีการจำกัดเวลา (Session Timeout) ต้องให้ผู้ใช้ขอต่อเวลาได้",
//           },
//           {
//             id: "2.2.2",
//             title: "Pause, Stop, Hide",
//             level: "A",
//             desc: "อะไรที่เคลื่อนไหว กระพริบ หรือเลื่อนอัตโนมัติ (Slider) นานกว่า 5 วิ ต้องมีปุ่มหยุด",
//           },
//         ],
//       },
//       {
//         title: "2.3 Seizures",
//         criteria: [
//           {
//             id: "2.3.1",
//             title: "Three Flashes or Below Threshold",
//             level: "A",
//             desc: "ห้ามมีอะไรกระพริบเกิน 3 ครั้งต่อวินาที (ป้องกันโรคลมชัก)",
//           },
//         ],
//       },
//       {
//         title: "2.4 Navigable",
//         criteria: [
//           {
//             id: "2.4.1",
//             title: "Bypass Blocks",
//             level: "A",
//             desc: "ต้องมีวิธีข้ามเนื้อหาที่ซ้ำๆ (เช่น เมนู) ไปยังเนื้อหาหลัก (Skip Link)",
//             devNote: "สร้างปุ่ม Skip to Content ซ่อนไว้และโชว์เมื่อกด Tab",
//           },
//           {
//             id: "2.4.2",
//             title: "Page Titled",
//             level: "A",
//             desc: "ทุกหน้าต้องมี <title> ที่ไม่ซ้ำกันและสื่อความหมาย",
//           },
//           {
//             id: "2.4.3",
//             title: "Focus Order",
//             level: "A",
//             desc: "ลำดับการ Tab ต้องสมเหตุสมผล (ซ้ายไปขวา บนลงล่าง)",
//           },
//           {
//             id: "2.4.4",
//             title: "Link Purpose (In Context)",
//             level: "A",
//             desc: "ลิงก์ต้องเข้าใจได้ว่าไปไหน (เลี่ยง 'คลิกที่นี่' ให้ใช้ 'อ่านต่อเกี่ยวกับ...')",
//           },
//           {
//             id: "2.4.6",
//             title: "Headings and Labels",
//             level: "AA",
//             desc: "หัวข้อและ Label ต้องสื่อความหมายชัดเจน",
//           },
//           {
//             id: "2.4.7",
//             title: "Focus Visible",
//             level: "AA",
//             desc: "ต้องเห็นกรอบ Focus ชัดเจน (ห้าม css: outline: none)",
//           },
//         ],
//       },
//       {
//         title: "2.5 Input Modalities",
//         criteria: [
//           {
//             id: "2.5.3",
//             title: "Label in Name",
//             level: "A",
//             desc: "ข้อความที่เห็นบนปุ่ม (Visual) ต้องตรงกับ Accessible Name (Code) เพื่อให้สั่งงานด้วยเสียงได้",
//           },
//           {
//             id: "2.5.8",
//             title: "Target Size (Minimum)",
//             level: "AA",
//             desc: "เป้าหมายการกด (ปุ่ม/ลิงก์) ควรมีขนาดอย่างน้อย 24x24px หรือมีระยะห่างเพียงพอ",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "3. Understandable (ต้องเข้าใจได้)",
//     icon: <PsychologyIcon fontSize="large" />,
//     color: "#2e7d32", // Green
//     guidelines: [
//       {
//         title: "3.1 Readable",
//         criteria: [
//           {
//             id: "3.1.1",
//             title: "Language of Page",
//             level: "A",
//             desc: "ต้องระบุภาษาหลักของหน้าเว็บ <html lang='th'>",
//           },
//           {
//             id: "3.1.2",
//             title: "Language of Parts",
//             level: "AA",
//             desc: "ส่วนที่มีภาษาต่างจากภาษาหลัก ต้องระบุ lang แยก (เช่น quote ภาษาอังกฤษในเว็บไทย)",
//           },
//         ],
//       },
//       {
//         title: "3.2 Predictable",
//         criteria: [
//           {
//             id: "3.2.1",
//             title: "On Focus",
//             level: "A",
//             desc: "เมื่อ Element ได้รับ Focus ต้องไม่ทำให้เกิดการเปลี่ยนหน้าหรือส่งฟอร์มทันที",
//           },
//           {
//             id: "3.2.2",
//             title: "On Input",
//             level: "A",
//             desc: "การเปลี่ยนค่าใน Input (เช่น เลือก Dropdown) ต้องไม่ทำให้หน้าเปลี่ยนทันที เว้นแต่จะบอกล่วงหน้า",
//           },
//           {
//             id: "3.2.3",
//             title: "Consistent Navigation",
//             level: "AA",
//             desc: "เมนูนำทาง (Navigation) ต้องอยู่ที่เดิมและเรียงเหมือนเดิมในทุกหน้า",
//           },
//           {
//             id: "3.2.4",
//             title: "Consistent Identification",
//             level: "AA",
//             desc: "ไอคอนหรือปุ่มที่ทำหน้าที่เหมือนกัน ต้องหน้าตาเหมือนกันและใช้ชื่อเดียวกันทั้งเว็บ",
//           },
//         ],
//       },
//       {
//         title: "3.3 Input Assistance",
//         criteria: [
//           {
//             id: "3.3.1",
//             title: "Error Identification",
//             level: "A",
//             desc: "เมื่อกรอกผิด ต้องระบุว่าผิดที่ไหนและอธิบายด้วยข้อความ (ไม่ใช่แค่ทำสีแดง)",
//           },
//           {
//             id: "3.3.2",
//             title: "Labels or Instructions",
//             level: "A",
//             desc: "มีคำแนะนำหรือ Label กำกับช่องกรอกข้อมูลเมื่อจำเป็น",
//           },
//           {
//             id: "3.3.3",
//             title: "Error Suggestion",
//             level: "AA",
//             desc: "ถ้าทำได้ ควรแนะนำวิธีแก้ไขเมื่อกรอกผิด (เช่น แนะนำรูปแบบวันที่)",
//           },
//           {
//             id: "3.3.4",
//             title: "Error Prevention (Legal, Financial)",
//             level: "AA",
//             desc: "ธุรกรรมการเงินหรือกฎหมาย ต้องมีหน้า Confirm หรือวิธียกเลิก/แก้ไขได้",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     title: "4. Robust (ต้องแข็งแรง/เข้ากันได้)",
//     icon: <BuildIcon fontSize="large" />,
//     color: "#d32f2f", // Red
//     guidelines: [
//       {
//         title: "4.1 Compatible",
//         criteria: [
//           {
//             id: "4.1.1",
//             title: "Parsing",
//             level: "A",
//             desc: "Code HTML ต้องเขียนถูก Syntax (ห้าม id ซ้ำ, ปิด tag ครบ) เพื่อให้ Browser แปลผลถูก",
//           },
//           {
//             id: "4.1.2",
//             title: "Name, Role, Value",
//             level: "A",
//             desc: "Custom Component ต้องระบุ Name, Role, Value ให้ครบถ้วน เพื่อให้ Screen Reader เข้าใจ",
//             devNote:
//               "เช่น <div role='button' aria-label='Save' aria-pressed='false'>",
//           },
//           {
//             id: "4.1.3",
//             title: "Status Messages",
//             level: "AA",
//             desc: "ข้อความสถานะที่ปรากฏขึ้นมาใหม่ (Toast, Alert) ต้องอ่านได้โดยไม่ต้องย้ายโฟกัส",
//             devNote: "ใช้ role='status' หรือ role='alert'",
//           },
//         ],
//       },
//     ],
//   },
// ];

// // Component: แสดง Level Chip
// const LevelBadge = ({ level }: { level: "A" | "AA" | "AAA" }) => {
//   const colorMap = {
//     A: "#ef5350",
//     AA: "#ff9800",
//     AAA: "#4caf50",
//   };
//   return (
//     <Chip
//       label={level}
//       size="small"
//       sx={{
//         bgcolor: colorMap[level],
//         color: "white",
//         fontWeight: "bold",
//         height: 20,
//         fontSize: "0.7rem",
//       }}
//     />
//   );
// };

// export default function WcagGuidePage() {
//   const breadcrumbJsonLd = {
//     "@context": "https://schema.org",
//     "@type": "BreadcrumbList",
//     itemListElement: [
//       {
//         "@type": "ListItem",
//         position: 1,
//         name: "หน้าหลัก",
//         item: "https://seo-best-practices.vercel.app",
//       },
//       {
//         "@type": "ListItem",
//         position: 2,
//         name: "คู่มือ SEO",
//         item: "https://seo-best-practices.vercel.app/seo-guide",
//       },
//       {
//         "@type": "ListItem",
//         position: 3,
//         name: "คู่มือ WCAG",
//         item: "https://seo-best-practices.vercel.app/wcag-guide",
//       },
//     ],
//   };

//   return (
//     <>
//       <script
//         type="application/ld+json"
//         dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
//       />

//       <Container maxWidth="lg" sx={{ py: 4 }}>
//         <WcagBreadcrumbs />

//         <Box sx={{ mb: 6, textAlign: "center" }}>
//           <AccessibilityNewIcon
//             sx={{ fontSize: 80, color: "primary.main", mb: 2 }}
//           />
//           <Typography
//             variant="h3"
//             component="h1"
//             fontWeight="bold"
//             gutterBottom
//           >
//             WCAG 2.1 Full Reference
//           </Typography>
//           <Typography
//             variant="h6"
//             color="text.secondary"
//             sx={{ maxWidth: 800, mx: "auto" }}
//           >
//             คู่มือรวมเกณฑ์มาตรฐาน Web Content Accessibility Guidelines ครบทุกข้อ
//             (A & AA) สำหรับนักพัฒนา Web Developer เพื่อการอ้างอิงที่สมบูรณ์
//           </Typography>
//         </Box>

//         {wcagData.map((section) => (
//           <Box key={section.title} sx={{ mb: 6 }}>
//             <Typography
//               variant="h4"
//               sx={{
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 2,
//                 color: section.color,
//                 mb: 3,
//                 fontWeight: "bold",
//               }}
//             >
//               {section.icon} {section.title}
//             </Typography>

//             {section.guidelines.map((guideline, index) => (
//               <Accordion
//                 key={index}
//                 defaultExpanded={index === 0}
//                 sx={{
//                   mb: 1,
//                   "&:before": { display: "none" },
//                   boxShadow: 2,
//                   borderRadius: 2,
//                 }}
//               >
//                 <AccordionSummary expandIcon={<ExpandMoreIcon />}>
//                   <Typography
//                     variant="h6"
//                     fontWeight="bold"
//                     sx={{ fontSize: "1.1rem" }}
//                   >
//                     {guideline.title}
//                   </Typography>
//                 </AccordionSummary>
//                 <AccordionDetails sx={{ bgcolor: "#fcfcfc" }}>
//                   <List>
//                     {guideline.criteria.map((item) => (
//                       <React.Fragment key={item.id}>
//                         {/* ✅ เพิ่ม ID ตรงนี้ เพื่อให้ทำ Anchor Link ได้ */}
//                         <ListItem
//                           alignItems="flex-start"
//                           sx={{
//                             py: 2,
//                             scrollMarginTop: "100px", // กันไม่ให้ Header บังเวลาเด้งมา
//                           }}
//                           id={item.id} // 👈 นี่คือหัวใจสำคัญครับ (เช่น id="1.1.1")
//                         >
//                           <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
//                             <CircleIcon
//                               sx={{ fontSize: 8, color: section.color }}
//                             />
//                           </ListItemIcon>
//                           <ListItemText
//                             secondaryTypographyProps={{ component: "div" }}
//                             primary={
//                               <Box
//                                 display="flex"
//                                 alignItems="center"
//                                 gap={1}
//                                 mb={0.5}
//                                 flexWrap="wrap"
//                               >
//                                 {/* เพิ่มลิงก์ตรงหัวข้อ */}
//                                 <Typography
//                                   component="a"
//                                   href={`#${item.id}`} // ลิงก์ไปหาตัวเอง
//                                   fontWeight="bold"
//                                   color="text.primary"
//                                   sx={{
//                                     textDecoration: "none",
//                                     "&:hover": {
//                                       textDecoration: "underline",
//                                       color: "primary.main",
//                                     },
//                                     display: "flex",
//                                     alignItems: "center",
//                                     gap: 0.5,
//                                   }}
//                                 >
//                                   {item.id} {item.title}
//                                   <LinkIcon
//                                     sx={{ fontSize: 14, opacity: 0.3 }}
//                                   />
//                                 </Typography>
//                                 <LevelBadge level={item.level} />
//                               </Box>
//                             }
//                             secondary={
//                               <>
//                                 <Typography
//                                   component="span"
//                                   variant="body2"
//                                   color="text.secondary"
//                                   display="block"
//                                 >
//                                   {item.desc}
//                                 </Typography>
//                                 {item.devNote && (
//                                   <Alert
//                                     severity="info"
//                                     icon={false}
//                                     sx={{
//                                       mt: 1,
//                                       py: 0,
//                                       fontSize: "0.85rem",
//                                       bgcolor: "#e3f2fd",
//                                     }}
//                                   >
//                                     <strong>Dev Tip:</strong> {item.devNote}
//                                   </Alert>
//                                 )}
//                               </>
//                             }
//                           />
//                         </ListItem>
//                         <Divider component="li" variant="inset" />
//                       </React.Fragment>
//                     ))}
//                   </List>
//                 </AccordionDetails>
//               </Accordion>
//             ))}
//           </Box>
//         ))}

//         <Paper
//           sx={{
//             p: 4,
//             bgcolor: "#f5f5f5",
//             borderRadius: 4,
//             mt: 4,
//             textAlign: "center",
//           }}
//         >
//           <Typography variant="h6" fontWeight="bold" gutterBottom>
//             สรุป: เป้าหมายคือ Level AA
//           </Typography>
//           <Typography variant="body2" color="text.secondary">
//             กฎหมายส่วนใหญ่และมาตรฐาน SEO ของ Google ยึดตามเกณฑ์ WCAG 2.1 Level
//             AA เป็นหลัก หากทำได้ครบตามรายการนี้ เว็บไซต์ของจะถือว่ามี
//             Accessibility ที่ยอดเยี่ยมระดับสากลครับ
//           </Typography>
//         </Paper>
//       </Container>
//     </>
//   );
// }

import React from "react";
import { Metadata } from "next";
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Divider,
  Alert,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
} from "@mui/material";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CircleIcon from "@mui/icons-material/Circle";
import LinkIcon from "@mui/icons-material/Link";
import WcagBreadcrumbs from "./WcagBreadcrumbs";
import { wcagData } from "./data"; // ✅ Import ข้อมูล

// -------------------------------------------------------
// 1. อัปเกรด Metadata (เพิ่ม Open Graph + Canonical)
// -------------------------------------------------------
export const metadata: Metadata = {
  title: "คู่มือ WCAG 2.1 ฉบับสมบูรณ์ (Checklist & Dev Guide) | Next.js SEO",
  description:
    "รวมเกณฑ์ WCAG 2.1 ครบทุกข้อ (A/AA) พร้อมวิธีแก้โค้ดสำหรับ Developer (Semantic HTML, ARIA) เพื่อทำเว็บให้ผ่านมาตรฐาน Accessibility",
  alternates: {
    canonical: "./", // บอก Google ว่าหน้านี้คือต้นฉบับ
  },
  openGraph: {
    title: "คู่มือ WCAG 2.1 ฉบับนักพัฒนา (A/AA Checklist)",
    description: "รวมวิธีเขียนโค้ดให้ผ่านเกณฑ์ WCAG ครบทุกข้อ จบในที่เดียว",
    url: "https://seo-best-practices.vercel.app/wcag-guide",
    siteName: "My SEO & Accessibility Guide",
    images: [
      {
        url: "/og-wcag.jpg", // 👈 (ถ้ามีรูปปก ให้ใส่ path ตรงนี้ หรือลบออกถ้าไม่มี)
        width: 1200,
        height: 630,
        alt: "WCAG 2.1 Developer Guide",
      },
    ],
    locale: "th_TH",
    type: "article",
  },
};

// Component: แสดง Level Chip
const LevelBadge = ({ level }: { level: "A" | "AA" | "AAA" }) => {
  const colorMap = {
    A: "#ef5350",
    AA: "#ff9800",
    AAA: "#4caf50",
  };
  return (
    <Chip
      label={level}
      size="small"
      sx={{
        bgcolor: colorMap[level],
        color: "white",
        fontWeight: "bold",
        height: 20,
        fontSize: "0.7rem",
      }}
    />
  );
};

export default function WcagGuidePage() {
  // -------------------------------------------------------
  // 2. สร้าง FAQ Schema อัตโนมัติจากข้อมูล wcagData (ท่าไม้ตาย!)
  // -------------------------------------------------------

  // แปลงโครงสร้างข้อมูล wcagData ให้เป็นคำถาม-คำตอบ
  const faqItems = wcagData.flatMap((section) =>
    section.guidelines.flatMap((guideline) =>
      guideline.criteria.map((item) => ({
        "@type": "Question",
        name: `${item.id} ${item.title} (${item.level}) คืออะไร?`,
        acceptedAnswer: {
          "@type": "Answer",
          text: `${item.desc} <br/> <strong>วิธีแก้สำหรับ Dev:</strong> ${
            item.devNote || "ปฏิบัติตามมาตรฐาน WCAG"
          }`,
        },
      }))
    )
  );

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems,
  };

  // Schema เดิม (Breadcrumb)
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "หน้าหลัก",
        item: "https://seo-best-practices.vercel.app",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "คู่มือ SEO",
        item: "https://seo-best-practices.vercel.app/seo-guide",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "คู่มือ WCAG",
        item: "https://seo-best-practices.vercel.app/wcag-guide",
      },
    ],
  };

  return (
    <>
      {/* ฝัง Schema ทั้ง 2 ตัว */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <WcagBreadcrumbs />

        <Box sx={{ mb: 6, textAlign: "center" }}>
          <AccessibilityNewIcon
            sx={{ fontSize: 80, color: "primary.main", mb: 2 }}
          />
          <Typography
            variant="h3"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            WCAG 2.1 Full Reference
          </Typography>
          <Typography
            variant="h6"
            color="text.secondary"
            sx={{ maxWidth: 800, mx: "auto" }}
          >
            คู่มือรวมเกณฑ์มาตรฐาน Web Content Accessibility Guidelines ครบทุกข้อ
            (A & AA) สำหรับนักพัฒนา Web Developer เพื่อการอ้างอิงที่สมบูรณ์
          </Typography>
        </Box>

        {wcagData.map((section) => (
          <Box key={section.title} sx={{ mb: 6 }}>
            <Typography
              variant="h4"
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                color: section.color,
                mb: 3,
                fontWeight: "bold",
              }}
            >
              {section.icon} {section.title}
            </Typography>

            {section.guidelines.map((guideline, index) => (
              <Accordion
                key={index}
                defaultExpanded={index === 0}
                sx={{
                  mb: 1,
                  "&:before": { display: "none" },
                  boxShadow: 2,
                  borderRadius: 2,
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    variant="h6"
                    fontWeight="bold"
                    sx={{ fontSize: "1.1rem" }}
                  >
                    {guideline.title}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ bgcolor: "#fcfcfc" }}>
                  <List>
                    {guideline.criteria.map((item) => (
                      <React.Fragment key={item.id}>
                        <ListItem
                          alignItems="flex-start"
                          sx={{
                            py: 2,
                            scrollMarginTop: "100px",
                          }}
                          id={item.id}
                        >
                          <ListItemIcon sx={{ minWidth: 40, mt: 0.5 }}>
                            <CircleIcon
                              sx={{ fontSize: 8, color: section.color }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            secondaryTypographyProps={{ component: "div" }}
                            primary={
                              <Box
                                display="flex"
                                alignItems="center"
                                gap={1}
                                mb={0.5}
                                flexWrap="wrap"
                              >
                                <Typography
                                  component="a"
                                  href={`#${item.id}`}
                                  fontWeight="bold"
                                  color="text.primary"
                                  sx={{
                                    textDecoration: "none",
                                    "&:hover": {
                                      textDecoration: "underline",
                                      color: "primary.main",
                                    },
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 0.5,
                                  }}
                                >
                                  {item.id} {item.title}
                                  <LinkIcon
                                    sx={{ fontSize: 14, opacity: 0.3 }}
                                  />
                                </Typography>
                                <LevelBadge level={item.level} />
                              </Box>
                            }
                            secondary={
                              <>
                                <Typography
                                  component="span"
                                  variant="body2"
                                  color="text.secondary"
                                  display="block"
                                >
                                  {item.desc}
                                </Typography>
                                {item.devNote && (
                                  <Alert
                                    severity="info"
                                    icon={false}
                                    sx={{
                                      mt: 1,
                                      py: 0,
                                      fontSize: "0.85rem",
                                      bgcolor: "#e3f2fd",
                                    }}
                                  >
                                    <strong>Dev Tip:</strong> {item.devNote}
                                  </Alert>
                                )}
                              </>
                            }
                          />
                        </ListItem>
                        <Divider component="li" variant="inset" />
                      </React.Fragment>
                    ))}
                  </List>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        ))}

        <Paper
          sx={{
            p: 4,
            bgcolor: "#f5f5f5",
            borderRadius: 4,
            mt: 4,
            textAlign: "center",
          }}
        >
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            สรุป: เป้าหมายคือ Level AA
          </Typography>
          <Typography variant="body2" color="text.secondary">
            กฎหมายส่วนใหญ่และมาตรฐาน SEO ของ Google ยึดตามเกณฑ์ WCAG 2.1 Level
            AA เป็นหลัก หากทำได้ครบตามรายการนี้ เว็บไซต์ของจะถือว่ามี
            Accessibility ที่ยอดเยี่ยมระดับสากลครับ
          </Typography>
        </Paper>
      </Container>
    </>
  );
}
