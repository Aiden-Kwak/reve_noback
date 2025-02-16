import styles from "../class.module.css";

export default function ModernPage() {
    return (
      <div className={styles.classContainer}>
        {/* 카드 영역 구분용 */}
        <div className={styles.teacherCard}>
          <div className={`${styles.teacherImage} teacherCard-item korea`}>
            <img src="/teacherProfile/modern.jpeg" alt="ballet" />
          </div>
          <div className={`${styles.teacherInfo} teacherCard-item`}>
            <p className={styles.teacherName}><span className={`${styles.tag} ${styles.modernTag}`}>현대무용</span>이유진</p>
            <div className={styles.teacherInfoDetail}>
              <p>- 고양예술고등학교 졸업, 현대무용전공</p>
              <p>- 성균관대학교 무용학과 졸업 (컨템포러리댄스)</p>
              <p>- 전) 현대무용 성인 및 입시생 지도</p>
              <p>- 현) 리듬체조 학원 강사</p>
            </div>
          </div>
        </div>
        {/* 여기부턴 내용 설명*/}
        <div className={styles.classDetail}>
          {/* 입문반 설명 */}
          <div className={styles.classBasicInfo}>
            <p className={styles.classTitle}>주요 커리큘럼(기초반)</p>
            <div className={styles.classHead}>
              <p>현대무용의 기본 동작과 테크닉을 배우며 움직임의 원리를 이해하고 신체 표현력을 확장하는 수업입니다. 기초부터 차근히 배울 수 있도록 구성되어, 현대무용을 처음 접하시는 분들에게 추천드립니다.</p>
            </div>
            <p className={styles.classSmallTitle}>신체 인지와 움직임 원리 학습</p>
            <div className={styles.classStep}>
              <p>플로어 워크와 폴 앤드 릴리스를 통해 신체 구조와 움직임의 원리를 이해합니다.</p>
              <p>무게 중심과 에너지 흐름을 활용해 자연스러운 움직임을 훈련합니다</p>
            </div>
            <p className={styles.classSmallTitle}>리듬감과 동작 연결</p>
            <div className={styles.classStep}>
              <p>리듬과 에너지를 활용하여 동작을 유연하게 연결하는 법을 배우며 움직임의 흐름을 강화합니다.</p>
              <p>음악과의 조화를 통해 동작의 표현력을 높이고 감각을 개발합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>공간 활용과 즉흥 움직임</p>
            <div className={styles.classStep}>
              <p>공간을 활용하며 움직임을 확장하는 기법을 익힙니다.</p>
              <p>간단한 즉흥 동작을 통해 창의적인 움직임을 탐구하고 표현력을 키웁니다.</p>
            </div>
            <p className={styles.classSmallTitle}>현대무용의 핵심 기초 체계적으로 배우기</p>
            <div className={styles.classStep}>
              <p>현대무용의 기초 테크닉과 동작을 반복적으로 연습하며 몸에 체화합니다.</p>
              <p>개인별 신체 특징에 맞춘 맞춤형 피드백을 통해 정확한 동작을 완성합니다.</p>
            </div>
          </div>
          {/* 초보자를 위한 추천코스 */}
          <div className={styles.classCourseRecommend}>
            <p className={styles.classTitle}>추천 대상</p>
            <div className={styles.classStep}>
              <p>현대무용을 처음 배우고 싶으신 분</p>
              <p>기초부터 탄탄히 다지며 움직임의 원리를 배우고 싶으신 분</p>
              <p>현대무용을 처음 배우고 싶으신 분</p>

            </div>
          </div>
          <p className={styles.notice}>선생님 사정에 따라 커리큘럼 내용이 일부 변동될 수 있으며, 사전안내가 이루어질 예정입니다.</p>
        </div>
      </div>
    );
  }
  