// app/api/movies/[id]/route.js
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 1. GET: ดึงข้อมูลหนังแค่เรื่องเดียว (เอาไว้ใช้ตอนกด Edit เพื่อดึงค่าเก่ามาโชว์)
export async function GET(req, { params }) {
  const { id } = await params;
  try {
    const movie = await prisma.movie.findUnique({
      where: { id: parseInt(id) }
    });
    return NextResponse.json(movie);
  } catch (error) {
    return NextResponse.json({ error: "ไม่พบข้อมูลหนัง" }, { status: 404 });
  }
}

// 2. PUT: แก้ไขข้อมูลหนัง
export async function PUT(req, { params }) {
  const { id } = params;
  try {
    const body = await req.json();
    const updatedMovie = await prisma.movie.update({
      where: { id: parseInt(id) },
      data: body,
    });
    return NextResponse.json({ message: "แก้ไขสำเร็จ", updatedMovie });
  } catch (error) {
    return NextResponse.json({ error: "แก้ไขไม่สำเร็จ" }, { status: 500 });
  }
}

// 3. DELETE: ลบหนัง
export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.movie.delete({
      where: { id: parseInt(id) },
    });
    return NextResponse.json({ message: "ลบหนังเรียบร้อยแล้ว" });
  } catch (error) {
    return NextResponse.json({ error: "ไม่สามารถลบได้" }, { status: 500 });
  }
}