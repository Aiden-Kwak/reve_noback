import styles from "../class.module.css";

export default function KoreaPage() {
    return (
      <div className={styles.classContainer}>
        {/* 카드 영역 구분용 */}
        <div className={styles.teacherCard}>
          <div className={`${styles.teacherImage} teacherCard-item korea`}>
            <img src="/teacherProfile/korea_top.png" alt="ballet" />
          </div>
          <div className={`${styles.teacherInfo} teacherCard-item`}>
            <p className={styles.teacherName}><span className={`${styles.tag} ${styles.koreaTag}`}>한국무용</span>정주연</p>
            <div className={styles.teacherInfoDetail}>
              <p>- 한국예술종합학교 재학</p>
              <p>- 전) 고양예술고등학교 졸업</p>
              <p>- 현) 한국무용 전공 및 지도</p>
            </div>
          </div>
        </div>
        {/* 여기부턴 내용 설명*/}
        <div className={styles.classDetail}>
          {/* 입문반 설명 */}
          <div className={styles.classBasicInfo}>
            <p className={styles.classTitle}>주요 커리큘럼</p>
            <div className={styles.classHead}>
              <p>한국무용 경험 유무에 관계없이 모든 참가자가 즐길 수 있도록 기초부터 작품 완성까지 단계별로 진행합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>한국무용의 기초 다지기</p>
            <div className={styles.classStep}>
              <p>한국무용의 기본 동작과 테크닉을 익히며 몸의 정렬과 균형을 훈련합니다.</p>
              <p>정중동(정적인 움직임 속 동적인 표현)의 원리를 배우고, 이를 동작에 자연스럽게 적용합니다.</p>
              <p>장단의 리듬감과 움직임의 조화를 통해 한국무용의 기본기를 완성합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>리듬감과 선 표현 익히기</p>
            <div className={styles.classStep}>
              <p>우아한 손동작과 발동작을 연결하여 한국무용 특유의 선을 표현합니다.</p>
              <p>기본 동작을 바탕으로 프레이즈의 기초를 쌓으며 음악적 리듬감을 체화합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>작품의 구성과 창작</p>
            <div className={styles.classStep}>
              <p>기본기와 테크닉을 활용하여 하나의 작품을 구성하고 완성하는 과정을 학습합니다.</p>
              <p>프레이즈를 심화하며 전통적 감각과 창작적 해석을 바탕으로 작품의 완성도를 높입니다.</p>
              <p>음악과 움직임의 조화를 통해 섬세한 감정 표현을 다룹니다.</p>
            </div>
            <p className={styles.classSmallTitle}>개인 및 그룹 작품 창작</p>
            <div className={styles.classStep}>
              <p>개인 작업과 그룹 작업을 병행하며 협업의 과정을 경험합니다.</p>
              <p>정교하고 완성도 높은 한국무용 작품을 창작하며 성취감을 느낍니다.</p>
              <p>감정과 이야기를 담아 한국무용의 예술적 깊이를 살립니다.</p>
            </div>
          </div>
          {/* 초보자를 위한 추천코스 */}
          <div className={styles.classCourseRecommend}>
            <p className={styles.classTitle}>추천 대상</p>
            <div className={styles.classStep}>
              <p>한국무용을 처음 시작하며 기초를 탄탄히 다지고 싶은 분</p>
              <p>기본기를 활용해 하나의 작품을 완성하고 싶은 분</p>
              <p>한국무용의 전통적 아름다움과 예술적 깊이를 탐구하고 싶은 분</p>
            </div>
          </div>
          <p className={styles.notice}>선생님 사정에 따라 커리큘럼 내용이 일부 변동될 수 있으며, 사전안내가 이루어질 예정입니다.</p>
        </div>
      </div>
    );
  }
  