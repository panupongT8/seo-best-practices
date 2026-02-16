// lib/nihssData.ts

export type NIHSSItem = {
  id: string;
  category: string; // e.g., "Level of Consciousness", "Motor"
  question: string;
  options: { score: number; label: string; description?: string }[];
};

export const nihssQuestions: NIHSSItem[] = [
  {
    id: "1a",
    category: "1. Level of Consciousness",
    question: "1a. ระดับความรู้สึกตัว (LOC)",
    options: [
      { score: 0, label: "0 - ตื่นดี (Alert)", description: "ตอบสนองทันที" },
      {
        score: 1,
        label: "1 - ซึม (Drowsy)",
        description: "ปลุกตื่นง่าย แต่อาจหลับต่อ",
      },
      {
        score: 2,
        label: "2 - ซึมมาก (Obtunded)",
        description: "ต้องกระตุ้นแรงๆ ถึงจะตื่น",
      },
      {
        score: 3,
        label: "3 - ไม่ตอบสนอง (Coma)",
        description: "ไม่ตอบสนองต่อการกระตุ้น",
      },
    ],
  },
  {
    id: "1b",
    category: "1. Level of Consciousness",
    question: "1b. ถามเดือนและอายุ (LOC Questions)",
    options: [
      { score: 0, label: "0 - ถูกทั้ง 2 ข้อ" },
      { score: 1, label: "1 - ถูก 1 ข้อ" },
      { score: 2, label: "2 - ไม่ถูกเลย / ใส่ท่อช่วยหายใจ" },
    ],
  },
  {
    id: "1c",
    category: "1. Level of Consciousness",
    question: "1c. สั่งหลับตา-ลืมตา & กำมือ-คลายมือ (LOC Commands)",
    options: [
      { score: 0, label: "0 - ทำได้ถูกต้องทั้ง 2 อย่าง" },
      { score: 1, label: "1 - ทำได้ถูกต้อง 1 อย่าง" },
      { score: 2, label: "2 - ทำไม่ได้เลย" },
    ],
  },
  {
    id: "2",
    category: "2. Best Gaze",
    question: "2. การเคลื่อนไหวของตา (Best Gaze)",
    options: [
      { score: 0, label: "0 - ปกติ" },
      { score: 1, label: "1 - เหลือบตาได้ข้างเดียว (Partial Gaze Palsy)" },
      { score: 2, label: "2 - ตาลอย/มองไปด้านเดียว (Forced Deviation)" },
    ],
  },
  // ... เพิ่มข้อ 3-11 ตามมาตรฐาน NIHSS ...
  {
    id: "5a",
    category: "5. Motor Arm",
    question: "5a. กำลังแขนซ้าย (Motor Left Arm)",
    options: [
      { score: 0, label: "0 - ยกค้างได้ 10 วินาที (No Drift)" },
      { score: 1, label: "1 - ยกได้แต่ตกลงก่อน 10 วิ (Drift)" },
      { score: 2, label: "2 - ยกต้านแรงโน้มถ่วงได้บ้าง (Some Effort)" },
      { score: 3, label: "3 - ขยับได้แต่ไม่พ้นพื้นเตียง (No Effort)" },
      { score: 4, label: "4 - ไม่ขยับเลย (No Movement)" },
    ],
  },
  {
    id: "5b",
    category: "5. Motor Arm",
    question: "5b. กำลังแขนขวา (Motor Right Arm)",
    options: [
      { score: 0, label: "0 - ยกค้างได้ 10 วินาที (No Drift)" },
      { score: 1, label: "1 - ยกได้แต่ตกลงก่อน 10 วิ (Drift)" },
      { score: 2, label: "2 - ยกต้านแรงโน้มถ่วงได้บ้าง (Some Effort)" },
      { score: 3, label: "3 - ขยับได้แต่ไม่พ้นพื้นเตียง (No Effort)" },
      { score: 4, label: "4 - ไม่ขยับเลย (No Movement)" },
    ],
  },
  // ควรใส่ให้ครบทุกข้อในการใช้งานจริง
];
