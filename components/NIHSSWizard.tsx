"use client";

import { useState } from "react";
import { nihssQuestions, NIHSSItem } from "@/lib/nihssData";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
} from "lucide-react";
import { clsx } from "clsx";

export default function NIHSSWizard() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQuestion = nihssQuestions[currentStep];
  const totalQuestions = nihssQuestions.length;

  // คำนวณคะแนนรวม Real-time
  const totalScore = Object.values(scores).reduce((a, b) => a + b, 0);

  const handleSelect = (score: number) => {
    setScores((prev) => ({ ...prev, [currentQuestion.id]: score }));

    // Auto advance (หน่วงเวลานิดนึงให้ user รู้ว่ากดแล้ว)
    if (currentStep < totalQuestions - 1) {
      setTimeout(() => setCurrentStep(currentStep + 1), 250);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const getScoreColor = (score: number) => {
    if (score === 0) return "bg-green-100 border-green-500 text-green-800";
    if (score === 1) return "bg-yellow-100 border-yellow-500 text-yellow-800";
    return "bg-red-100 border-red-500 text-red-800";
  };

  // --- หน้าสรุปผล (Summary View) ---
  if (isCompleted) {
    return (
      <div className="max-w-md mx-auto bg-white min-h-screen p-6 flex flex-col items-center justify-center space-y-6">
        <div className="text-center space-y-2">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto" />
          <h2 className="text-2xl font-bold text-gray-800">ประเมินเสร็จสิ้น</h2>
          <p className="text-gray-500">บันทึกข้อมูลเรียบร้อยแล้ว</p>
        </div>

        <div className="w-full bg-slate-50 p-6 rounded-2xl border border-slate-200 text-center">
          <p className="text-sm text-gray-500 uppercase tracking-wide">
            Total NIHSS Score
          </p>
          <p
            className={clsx(
              "text-6xl font-black my-2",
              totalScore > 10 ? "text-red-600" : "text-blue-600"
            )}
          >
            {totalScore}
          </p>
          <div className="flex justify-center items-center gap-2 text-sm font-medium">
            {totalScore >= 5 && (
              <AlertTriangle className="w-4 h-4 text-orange-500" />
            )}
            <span
              className={totalScore >= 5 ? "text-orange-600" : "text-green-600"}
            >
              {totalScore === 0
                ? "Normal"
                : totalScore < 5
                ? "Minor Stroke"
                : "Moderate/Severe Stroke"}
            </span>
          </div>
        </div>

        <button
          onClick={() => window.location.reload()}
          className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold shadow-lg active:scale-95 transition-transform"
        >
          กลับหน้าหลัก
        </button>
      </div>
    );
  }

  // --- หน้าทำแบบทดสอบ (Wizard View) ---
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen flex flex-col relative shadow-xl">
      {/* Header & Progress Bar */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-100 px-4 pt-4 pb-2">
        <div className="flex justify-between items-center mb-2">
          <h1 className="font-bold text-gray-700">NIHSS Assessment</h1>
          <span className="text-sm font-mono bg-blue-100 text-blue-800 px-2 py-1 rounded">
            Score: {totalScore}
          </span>
        </div>
        {/* Progress Bar */}
        <div className="h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-500 transition-all duration-300 ease-out"
            style={{ width: `${((currentStep + 1) / totalQuestions) * 100}%` }}
          />
        </div>
        <p className="text-xs text-gray-400 mt-1 text-right">
          ข้อ {currentStep + 1} จาก {totalQuestions}
        </p>
      </div>

      {/* Question Card */}
      <div
        className="flex-1 p-4 flex flex-col animate-in fade-in slide-in-from-right-4 duration-300"
        key={currentStep}
      >
        <div className="mb-6">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            {currentQuestion.category}
          </span>
          <h2 className="text-xl font-bold text-gray-900 mt-1 leading-snug">
            {currentQuestion.question}
          </h2>
        </div>

        {/* Options List */}
        <div className="space-y-3">
          {currentQuestion.options.map((option) => {
            const isSelected = scores[currentQuestion.id] === option.score;
            return (
              <button
                key={option.score}
                onClick={() => handleSelect(option.score)}
                className={clsx(
                  "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center justify-between group",
                  isSelected
                    ? "border-blue-600 bg-blue-50 shadow-inner"
                    : "border-gray-200 hover:border-blue-300 hover:bg-gray-50"
                )}
              >
                <div>
                  <span
                    className={clsx(
                      "font-bold text-lg mr-2",
                      option.score === 0 ? "text-green-600" : "text-gray-900"
                    )}
                  >
                    {option.score}
                  </span>
                  <span className="font-medium text-gray-700">
                    {option.label}
                  </span>
                  {option.description && (
                    <p className="text-xs text-gray-500 mt-1 ml-6">
                      {option.description}
                    </p>
                  )}
                </div>
                {isSelected && (
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="p-4 border-t border-gray-100 bg-gray-50 flex justify-between items-center">
        <button
          onClick={handleBack}
          disabled={currentStep === 0}
          className="flex items-center px-4 py-3 text-gray-600 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-gray-200 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-1" />
          ย้อนกลับ
        </button>

        <button
          onClick={() => {
            if (currentStep < totalQuestions - 1)
              setCurrentStep(currentStep + 1);
            else setIsCompleted(true);
          }}
          className="flex items-center px-6 py-3 bg-gray-900 text-white rounded-xl font-medium shadow-lg hover:bg-gray-800 transition-transform active:scale-95"
        >
          {currentStep === totalQuestions - 1 ? "สรุปผล" : "ถัดไป"}
          {currentStep < totalQuestions - 1 && (
            <ChevronRight className="w-5 h-5 ml-1" />
          )}
        </button>
      </div>
    </div>
  );
}
