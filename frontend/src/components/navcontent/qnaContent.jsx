import React from "react";
import styles from "./qna.module.css";

const qnaList = [
  {
    question: "수업 신청은 어떤 방식으로 이루어지나요?",
    answer: "수업은 한 달 단위로 진행되며, 신청은 수업이 시작되는 달의 전 달 말일 3일 전까지 가능합니다. 예를 들어, 말일이 28일이면 25일까지, 30일이면 27일까지, 31일이면 28일까지 신청을 받습니다.",
  },
  {
    question: "해당 수강권으로 다른 장르의 수업을 들어볼 수 있나요?",
    answer: "1월 18일(토)부터 1월 25일(토) 자정까지 모집이 이루어지고, 2월 첫 주차 월요일인 2월 3일(월)부터 정규 클래스가 오픈됩니다. 매달 날짜는 변동 가능하니 신청 시 마감 기한 확인 부탁드립니다.",
  },
  {
    question: "해당 수강권으로 다른 장르의 수업을 들어볼 수 있나요?",
    answer: "레브 수강생의 최대 장점입니다. 수강권에 따라 부여되는 체험권의 개수에 한하여, 모든 장르, 요일, 시간대의 수업을 들어보실 수 있습니다. 타 장르도 궁금하시다면 적극적으로 이용해보세요 :)",
  },
  {
    question: "준비물은 따로 필요 없나요?",
    answer: "네, 움직이기 편한 옷 차림이 전부입니다 :) 탈의실과 샤워실이 구비가 되어있으니 갈아입을 옷 챙겨오셔도 무방합니다. 정수기도 마련되어 있으니 물통을 챙겨오시는 것을 추천드립니다.",
  },
  {
    question: "커뮤니티 모임에는 꼭 참여해야 하나요?",
    answer: "모든 커뮤니티 모임은 자율 참석입니다. 하지만 발레와 무용으로 만난 소중한 인연인 만큼 의미있는 시간이 되실 거에요 :)",
  },
  {
    question: "수업에 참여하지 못하게 되었어요. 환불이 가능한가요?",
    answer: "신청하신 최초 수강 날짜의 4일 전까지는 전액 환불, 3일 전까지는 50% 환불이 가능하며 2일 전부터는 환불이 불가합니다. 만약 고정 날짜에 참여하시지 못한다면, 부여된 체험권을 통해 날짜와 시간 이동이 가능하니 알뜰하게 사용해주세요. 주 1회 수강권은 월 1회, 주 2회 수강권은 월 2회 이내로 장르, 요일, 시간 변경 가능합니다.",
  },
  {
    question: "강사님과 시간대는 한 달동안 고정으로 진행되나요?",
    answer: "수업은 한 달 단위로 강사님과 시간대가 고정되어 진행됩니다. 다만, 강사님의 개인 사정으로 변경이 필요할 경우 사전에 개별적으로 연락드리며, 적절한 조치를 취해드리니 안심하셔도 됩니다.",
  },
];

function QnaContent() {
  return (
    <div className={styles.qnaContainer}>
      <h2 className={styles.qnaHeader}>QnA</h2>
      <ul className={styles.qnaList}>
        {qnaList.map((qna, index) => (
          <li key={index} className={styles.qnaItem}>
            <p className={styles.qnaQuestion}>Q. {qna.question}</p>
            <p className={styles.qnaAnswer}>A. {qna.answer}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default QnaContent;
