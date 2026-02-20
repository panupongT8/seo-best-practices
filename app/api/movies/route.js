// app/api/movies/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { notifyGoogleIndexing } from "@/lib/notifyGoogle";


// import prisma from '@/lib/prisma'; // ไฟล์เชื่อมต่อ Prisma ที่เราทำไว้ก่อนหน้า

// 5. GET Method: ดึงรายการหนังทั้งหมดมาแสดงหน้าบ้าน
export async function GET() {
    try {
      const movies = await prisma.movie.findMany({
        orderBy: {
          createdAt: 'desc', // ให้หนังที่เพิ่มล่าสุดขึ้นก่อน
        },
      });
      return NextResponse.json(movies);
    } catch (error) {
      console.error("GET Error", error);
      return NextResponse.json(
        { message: "ไม่สามารถดึงข้อมูลหนังได้" },
        { status: 500 }
      );
    }
  }
  
export async function POST(req) {
  try {
    // 1. รับ Data จาก Body
    const { title, posterUrl, bgUrl, description, rating } = await req.json();

    // 2. Validation เบื้องต้น
    if (!title || !posterUrl || !description) {
      return NextResponse.json(
        { message: "กรุณากรอกข้อมูลสำคัญให้ครบ (ชื่อ, รูป, รายละเอียด)" },
        { status: 400 }
      );
    }

    // 3. บันทึกลง PostgreSQL ผ่าน Prisma
    const newMovie = await prisma.movie.create({
      data: {
        title,
        posterUrl,
        bgUrl,
        description,
        rating: parseFloat(rating) || 0, // แปลงเป็นตัวเลข
      },
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const movieUrl = `${siteUrl}/movies/${newMovie.id}`;

  // ✅ 2. ตอนนี้เรียกใช้ได้แล้ว เพราะประกาศตัวแปรไว้ด้านบนแล้วครับ
  notifyGoogleIndexing(movieUrl);

    // 4. ส่งคำตอบกลับเมื่อสำเร็จ
    return NextResponse.json(
      { message: "เพิ่มหนังสำเร็จ!", data: newMovie },
      { status: 201 }
    );

  } catch (error) {
    console.error("Request Error", error);
    return NextResponse.json(
      { message: "เกิดข้อผิดพลาดในการเชื่อมต่อฐานข้อมูล" },
      { status: 500 }
    );
  }
}

