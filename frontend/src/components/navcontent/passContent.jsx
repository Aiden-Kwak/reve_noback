"use client";

import React from "react";
import styles from "./pass.module.css"; // 기존 CSS 가져오기
import { useRouter } from "next/navigation";

function PassContent() {
  const router = useRouter();
  return (
    <div className={styles.passContainer}>
      <p className={styles.head}>강의료는 어떻게 되나요?</p>
      <div className={styles.eventNotice}>
        <p><strong>Open EVENT!</strong></p>
        <p>블로그 후기 작성 시,</p>
        <p>3만원 환급!</p>
      </div>
      <div className={styles.passList}>
        {/* 1회 체험권 */}
        {/*
        <div className={`${styles.passCard} ${styles.trialPass}`}>
          <p className={styles.passTitle}>1회 체험권</p>
          <p className={styles.passPrice}>3만원</p>
          <p className={styles.passDetail}>상시구매가능</p>
          <p className={styles.passDetail}>한 번의 체험으로 첫걸음을 내딛어보세요</p>
          <p className={styles.passBuyBtn}
          onClick={() => router.push("/class/enroll/?selectedGenre=ballet&selectedLevel=basic")}>
            지금 시작하기
          </p>
        </div>
        */}
        {/* 주 1회권 */}
        <div className={`${styles.passCard} ${styles.singlePass}`}>
          <p className={styles.passTitle}>주 1회권</p>
          <p className={styles.passPrice}>12만원<span>/mo</span></p>
          <p className={styles.passDetail}>가볍게 시작하기 좋아요</p>
          <p className={styles.passDetail}>부담없이 시작하기 좋은 선택!</p>
          <p className={styles.passBuyBtn}>
            <a href="https://docs.google.com/forms/d/1A7bNkqtgIkMMe0OX4avGoko8U9L52ORVVYT9jcgNJyA/preview" target="_blank" rel="noopener noreferrer">
              클래스 신청하기
            </a>
          </p>
        </div>
        {/* 주 2회권 */}
        <div className={`${styles.passCard} ${styles.biPass}`}>
          <p className={styles.passTitle}>주 2회권</p>
          <p className={styles.passPrice}>22만원<span>/mo</span></p>
          <p className={styles.passDetail}>1회권 대비 8.3% 할인</p>
          <p className={styles.passDetail}>꾸준한 운동으로 건강한 에너지와 <br/>실력을 쌓아가요!</p>
          <p className={styles.passBuyBtn}>
            <a href="https://docs.google.com/forms/d/1A7bNkqtgIkMMe0OX4avGoko8U9L52ORVVYT9jcgNJyA/preview" target="_blank" rel="noopener noreferrer">
              클래스 신청하기
            </a>
          </p>
        </div>
        {/* 주 3회권 
        <div className={`${styles.passCard} ${styles.triPass}`}>
          <p className={styles.passTitle}>주 3회권</p>
          <p className={styles.passPrice}>32만원<span>/mo</span></p>
          <p className={styles.passDetail}>1회권 대비 11.1% 할인</p>
          <p className={styles.passDetail}>빠른 성장과 몰입을 원한다면</p>
          <p className={styles.passBuyBtn}
          onClick={() => router.push("/class/enroll/?selectedGenre=ballet&selectedLevel=basic")}>지금 시작하기</p>
        </div>
        */}
      </div>
      <div className={styles.PassNotice}>
        <p><strong>수강권 안내</strong></p>
        <p>추가 문의사항은 카카오톡 문의 채널로 연락주세요😊</p>
      </div>
    </div>
  );
}

export default PassContent;
