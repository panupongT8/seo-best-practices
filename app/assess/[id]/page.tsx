import NIHSSWizard from "@/components/NIHSSWizard";

export default function AssessmentPage({ params }: { params: { id: string } }) {
  // ในการใช้งานจริง: Fetch ข้อมูลผู้ป่วยจาก ID มาแสดงหัวข้อ
  return (
    <div className="bg-gray-50 min-h-screen">
      <NIHSSWizard />
    </div>
  );
}
