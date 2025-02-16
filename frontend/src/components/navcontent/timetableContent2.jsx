"use client";

import React from "react";
import styles from "./timetable2.module.css";

const TimetableFixed = () => {
  const days = ["화", "목", "금", "토", "일"];
  const timeSlots = [
    { label: "오전", time: "10:00~11:50" },
    { label: "오후", time: "7:00~8:50" },
  ];

  const scheduleData = {
    "발레": [
      { day: "토", slot: "오전" },
      { day: "목", slot: "오후" },
    ],
    "현대기초": [
      { day: "화", slot: "오후" },
      { day: "일", slot: "오전" },
    ],
    "현대작품": [
      { day: "금", slot: "오후" },
    ],
    "한국무용": [
      { day: "목", slot: "오후" },
      { day: "금", slot: "오후" },
    ],
  };

  const getClassesForCell = (day, slotLabel) => {
    let classes = [];
    for (const className in scheduleData) {
      if (
        scheduleData[className].some(
          (session) => session.day === day && session.slot === slotLabel
        )
      ) {
        classes.push(className);
      }
    }
    return classes;
  };

  const getPillClassName = (className) => {
    if (className === "발레") return styles.balletPill;
    if (className.startsWith("현대")) return styles.modernPill;
    if (className === "한국무용") return styles.koreanPill;
    return "";
  };

  return (
    <div className={styles.container}>
      <div className={styles.gridContainer}>
        {/* 헤더 */}
        <div className={styles.emptyCell}></div>
        {days.map((day, idx) => (
          <div key={idx} className={styles.dayHeader}>
            {day}
          </div>
        ))}

        {/* 시간대와 셀 */}
        {timeSlots.map((slot, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <div className={styles.timeSlotLabel}>
              {slot.label}
              <br />
              <span className={styles.timeInfo}>
                {slot.time.split("~")[0]}
                <br />
                ~{slot.time.split("~")[1]}
              </span>
            </div>
            {days.map((day, colIndex) => {
              const classes = getClassesForCell(day, slot.label);
              return (
                <div key={colIndex} className={styles.cell}>
                  {classes.length > 0 ? (
                    classes.map((className, classIndex) => (
                        <div
                            key={classIndex}
                            className={`${styles.pill} ${getPillClassName(
                            className
                            )}`}
                        >
                            {className}
                        </div>
                    ))
                  ):(
                    <div className={styles.empty}></div>
                  )
                }
                </div>
              );
            })}
          </React.Fragment>
        ))}
      </div>
{/*
      <div className={styles.classInfo}>
        <h3>클래스별 시간 정보</h3>
        <ul>
          <li>
            <strong><span className={`${styles.pill} ${styles.balletPill}`}>발레</span></strong> 토요일 아침클래스 (오전 10시~11시20분), 목요일
            저녁클래스 (저녁 7시~8시40분)
          </li>
          <li>
            <strong><span className={`${styles.pill} ${styles.modernPill}`}>현대무용(기초)</span></strong> 화요일 저녁클래스 (저녁 7시~8시40분),
            일요일 아침클래스 (오전 10시~11시20분)
          </li>
          <li>
            <strong><span className={`${styles.pill} ${styles.modernPill}`}>현대무용(작품)</span></strong> 금요일 저녁클래스 (저녁 7시~8시40분)
          </li>
          <li>
            <strong><span className={`${styles.pill} ${styles.koreanPill}`}>한국무용</span></strong> 목요일 저녁클래스 (저녁 7시~8시40분), 금요일
            저녁클래스 (저녁 7시~8시40분)
          </li>
        </ul>
      </div>
*/}
      <br/>
      <div className={styles.classInfo}>
        <h3>클래스별 상세 정보</h3>
        <p className={styles.classInfoContent}>모든 수업은 80분 수업과 30분의 자율 커뮤니티로 구성됩니다.</p>
        <br/>
          <p className={styles.classInfoContent}>
            <strong><span className={`${styles.pill} ${styles.balletPill}`}>발레</span></strong> 기초와 안무(이현지 강사님)를 병행합니다!
          </p>
          <p className={styles.classInfoContent}>
            <strong><span className={`${styles.pill} ${styles.modernPill}`}>현대무용</span></strong> 기초반(이유진 강사님), 작품반(김혜현, 최문선 강사님)으로 나뉘며 주 2회권 구매시, 두 반은 자유롭게 이동할 수 있습니다.
          </p>
          <p className={styles.classInfoContent}>
            <strong><span className={`${styles.pill} ${styles.koreanPill}`}>한국무용</span></strong> 기초와 안무(정주연 강사님)가 병행됩니다!
          </p>
          
      </div>
      <br/>
      <div className={styles.classInfo}>
        <h3>수강안내</h3>
        <p className={styles.classInfoContent}><span className={styles.pill}>장르변경</span><br/>수강권은 장르별로 적용되며, 주 1회권은 월 1회, 주 2회권은 월 2회의 장르나 시간 변경이 가능합니다.</p>
        <p className={styles.classInfoContent}><span className={styles.pill}>환불규정</span><br/>새로운 달 시작 최소 4일 전까지는 100%, 3일 전에는 50% 환불이 가능하며, 2일 전부터는 환불이 불가능합니다.</p>
      </div>
    </div>
  );
};

export default TimetableFixed;
