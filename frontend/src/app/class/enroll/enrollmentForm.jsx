"use client";

import React, { useState, useEffect } from "react";
import apiClient from "@/utils/axios";
import styles from "./enrollment.module.css";
import AuthGuard from "@/utils/authGuard";

function EnrollmentForm({ selectedGenre, selectedLevel }) {
  const [category, setCategory] = useState(selectedGenre || ""); // 장르 상태
  const [level, setLevel] = useState(selectedLevel || ""); // 레벨 상태
  const [times, setTimes] = useState([]); // 선택된 시간들
  const [route, setRoute] = useState("1"); // 경로
  const [location, setLocation] = useState("");
  const [pass_type, setPass] = useState("1"); // 수강권
  const [contact, setContact] = useState(""); // 연락처
  const [sliderValue, setSliderValue] = useState(0); // 슬라이더 값 초기화

  const [popupMessage, setPopupMessage] = useState(""); // 팝업 메시지
  const [showPopup, setShowPopup] = useState(false); // 팝업 표시 여부

  const timeSlots = [
    { label: "오전", time: "10:00-12:00" },
    { label: "오후", time: "14:00-16:00" },
    { label: "저녁", time: "19:00-20:40" },
  ];

  const scheduleData = {
    "발레": [
      { day: "토요일", time: "10:00-12:00" },
      { day: "목요일", time: "19:00-20:40" },
    ],
    "현대기초": [
      { day: "화요일", time: "19:00-20:40" },
      { day: "일요일", time: "10:00-12:00" },
    ],
    "현대작품": [
      { day: "금요일", time: "19:00-20:40" },
    ],
    "한국무용": [
      { day: "목요일", time: "19:00-20:40" },
      { day: "금요일", time: "19:00-20:40" },
    ],
  };

  // 선택한 카테고리에 따른 시간 할당
  useEffect(() => {
    if (category) {
      const selectedTimes = scheduleData[category] || [];
      setTimes(selectedTimes);
    }
  }, [category]);

  useEffect(() => {
    // 초기 슬라이더 값 설정
    if (selectedGenre === "ballet") {
      setSliderValue(0);
    } else if (selectedGenre === "modern") {
      setSliderValue(50);
    } else if (selectedGenre === "korean") {
      setSliderValue(100);
    }
  }, [selectedGenre]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!contact) {
      const userEmail = ""; // 구글 로그인에서 받은 이메일로 설정
      setContact(userEmail);
    }

    const data = {
      category,
      level,
      times, // 자동으로 설정된 시간 배열이 포함됨
      pass_type,
      route,
      location,
      contact,
    };

    try {
      const response = await apiClient.post("/api/timemanageapp/courses/enroll/", data);
      console.log("성공적으로 제출됨:", response.data);
      setPopupMessage("신청완료. 마이페이지에서 내역을 확인하세요.");
      setShowPopup(true);
    } catch (error) {
      setPopupMessage("이미 신청된 강의입니다. 마이페이지에서 내역을 확인하세요.");
      setShowPopup(true);
    }
  };

  const handleSliderChange = (e) => {
    const value = e.target.value;
    setSliderValue(value);

    if (value < 33) {
      setCategory("발레");
    } else if (value < 67) {
      setCategory("현대기초");
    } else {
      setCategory("한국무용");
    }
  };

  const toggleLevel = () => {
    setLevel((prev) => (prev === "basic" ? "advanced" : "basic"));
  };

  const getCategoryLabel = (category) => {
    switch (category) {
      case "발레":
        return "발레";
      case "현대기초":
        return "현대무용(기초)";
      case "현대작품":
        return "현대무용(작품)";
      case "한국무용":
        return "한국무용";
      default:
        return "";
    }
  };

  const getLevelLabel = (level) => {
    switch (level) {
      case "basic":
        return "입문반";
      case "advanced":
        return "작품반";
      default:
        return "";
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupMessage("");
  };

  const selectedClass = `${getCategoryLabel(category)} - ${getLevelLabel(level)}`;

  return (
    <AuthGuard>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <label>
          <p className={styles.formItem}>
            ⭐ 선택한 수업: <span className="root-color">{selectedClass}</span>
          </p>
          <div className={styles.sliderContainer}>
            <input
              type="range"
              min="0"
              max="100"
              step="1"
              value={sliderValue}
              className={styles.slider}
              onChange={handleSliderChange}
            />
            <div className={styles.labels}>
              <span>발레</span>
              <span className={styles.modern}>현대무용</span>
              <span>한국무용</span>
            </div>
          </div>
        </label>

        <label>
          <br />
          <div className={styles.labelWrapper}>
            <button
              type="button"
              onClick={toggleLevel}
              className={`${styles.toggleButton} ${
                level === "basic" ? styles.clicked : styles.unclicked
              }`}
            >
              입문반
            </button>
            <button
              type="button"
              onClick={toggleLevel}
              className={`${styles.toggleButton} ${
                level === "advanced" ? styles.clicked : styles.unclicked
              }`}
            >
              작품반
            </button>
          </div>
        </label>

        <label>
          <p className={styles.formItem}>⭐ 선택된 시간:</p>
          <ul className={styles.selectedTimes}>
            {times.map((time, index) => (
              <li key={index}>
                {time.day} - {time.time}
              </li>
            ))}
          </ul>
        </label>

        <label>
          <p className={styles.formItem}>⭐ 희망하시는 수강권을 선택해주세요!</p>
          <select
            value={pass_type}
            onChange={(e) => setPass(e.target.value)}
            className={styles.inputField}
          >
            <option value="1">1회 체험권</option>
            <option value="2">주 1회권</option>
            <option value="3">주 2회권</option>
            <option value="4">주 3회권</option>
          </select>
        </label>

        <label>
          <p className={styles.formItem}>⭐ 저희 레브를 어떻게 알게되셨나요?</p>
          <select
            value={route}
            onChange={(e) => setRoute(e.target.value)}
            className={styles.inputField}
          >
            <option value="1">인스타</option>
            <option value="2">블로그</option>
            <option value="3">인터넷검색</option>
            <option value="4">에브리타임</option>
            <option value="5">지인소개</option>
            <option value="6">재방문</option>
            <option value="7">기타</option>
          </select>
        </label>

        <label>
          <p className={styles.formItem}>⭐ 어디에 거주 중이신가요?</p>
          <p className={styles.formSubItem}>
            추후 지점 확장을 위한 질문으로 응답하지 않으셔도 됩니다.
          </p>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="ex) 서대문구 신촌동"
            className={styles.inputField}
          />
        </label>

        <label>
          <p className={styles.formItem}>⭐ 연락처</p>
          <p className={styles.formSubItem}>
            연락 가능한 번호를 입력해주세요. 미입력시 가입한 이메일로 연락이
            진행됩니다.
          </p>
          <input
            type="text"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="ex) 010-1234-5678"
            className={styles.inputField}
          />
        </label>

        <button type="submit" className={styles.submitButton}>
          신청하기
        </button>
      </form>
      {/* 팝업 */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <p>{popupMessage}</p>
            <button onClick={closePopup} className={styles.closePopupButton}>
              닫기
            </button>
          </div>
        </div>
      )}
    </AuthGuard>
  );
}

export default EnrollmentForm;
