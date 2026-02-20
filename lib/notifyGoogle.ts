import { google } from "googleapis";

// ฟังก์ชันสำหรับส่ง URL ไปให้ Google Index
export async function notifyGoogleIndexing(url: string) {
  try {
    // 1. Setup Auth (แนะนำให้เก็บค่าจาก JSON ลงใน .env เพื่อความปลอดภัย)
    const jwtClient = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/indexing"],
    });

    await jwtClient.authorize();

    // 2. ส่ง Request ไปยัง Indexing API
    const res = await google.indexing("v3").urlNotifications.publish({
      auth: jwtClient,
      requestBody: {
        url: url,
        type: "URL_UPDATED", // ใช้ URL_UPDATED สำหรับการเพิ่มใหม่หรือแก้ไข
      },
    });

    return res.data;
  } catch (error) {
    console.error("Google Indexing API Error:", error);
    return null;
  }
}
