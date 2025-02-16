"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "./LectureContent.css";

const teacherData = [
  { id: 1, name: "special1", image: "/teacher/special1.png" },
  { id: 2, name: "special2", image: "/teacher/special2.png" },
  { id: 3, name: "ballet", image: "/teacher/ballet_teacher.png" },
  { id: 4, name: "modern", image: "/teacher/modern_teacher.png" },
  { id: 5, name: "korea", image: "/teacher/korea_teacher.png" },
];

function LectureContent() {
  const router = useRouter();
  const totalSlots = 6;
  const items = [...teacherData];

  while (items.length < totalSlots) {
    items.push({ id: `empty-${items.length}`, isEmpty: true });
  }

  return (
    <div className="lecture-container">
      <div className="special-guest">
        <p className="sg-main">스테파 최종 3위, 현대무용 1위 <br/><span>김혜현 강사님</span>을 모셨습니다✨</p>
        <p className="sg-notice">현대무용 작품반 최문선 강사님 클래스에 월 1~2회 참여하시며, 일정은 확정시 사전 안내드립니다</p>
      </div>
      <div className="teacher-grid">
        {items.map((item) =>
          item.isEmpty ? (
            <div 
                className="empty-slot" 
                key={item.id}
                onClick={() => router.push("/class/story")}
            >
              <img src="whiteLogo_noback.png" alt="empty" />
            </div>
          ) : (
            <div
              className="teacher-card"
              key={item.id}
              onClick={() => router.push(`/class/${item.name}`)}
            >
              <div className="teacher-image">
                <img src={item.image} alt={item.name} />
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default LectureContent;
