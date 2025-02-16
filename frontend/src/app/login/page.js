"use client";

import React from "react";
import styles from "./LoginPage.module.css";

export default function LoginPage() {
  const apiServerUrl = process.env.NEXT_PUBLIC_API_SERVER_URL;
  const clientUrl = process.env.NEXT_PUBLIC_CLIENT_URL;
  const googleLoginUrl = `${apiServerUrl}/api/accountapp/auth/login/?next=${clientUrl}`;
  const naverLoginUrl = `${apiServerUrl}/api/accountapp/auth/naver/login/?next=${clientUrl}`;

  return (
    <div className={styles.container}>
        <div className={styles.loginWrapper}>
            <a href={naverLoginUrl} className={styles.naverButton}>
            네이버 로그인
            </a>
            <a href={googleLoginUrl} className={styles.googleButton}>
            구글 로그인
            </a>
        </div>
        <p className={styles.footer}>
            구글로그인 실패시엔 네이버 로그인을 이용해주세요.
        </p>
    </div>
  );
}
