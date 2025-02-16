import styles from "../class.module.css";

export default function BalletPage() {
    return (
      <div className={styles.classContainer}>
        {/* 카드 영역 구분용 */}
        <div className={styles.teacherCard}>
          <div className={`${styles.teacherImage} teacherCard-item`}>
            <img src="/teacherProfile/ballet.jpeg" alt="ballet" />
          </div>
          <div className={`${styles.teacherInfo} teacherCard-item`}>
            <p className={styles.teacherName}><span className={`${styles.tag} ${styles.balletTag}`}>발 레</span>이현지</p>
            <div className={styles.teacherInfoDetail}>
              <p>- 고양예술고등학교 무용과 졸업</p>
              <p>- 동덕여자대학교 무용과 재학</p>
              <p>- 유아 발레지도 경력, 자격증 보유</p>
              <p>- 매트, 기구 필라테스 자격증</p>
              <p>- REHAB TRAINING SPECIALIST Level 1 수료</p>
            </div>
          </div>
        </div>
        {/* 여기부턴 내용 설명*/}
        <div className={styles.classDetail}>
          {/* 입문반 설명 */}
          <div className={styles.classBasicInfo}>
            <p className={styles.classTitle}>주요 커리큘럼</p>
            <div className={styles.classHead}>
              <p>발레 경험 유무에 관계없이 모든 참가자가 즐길 수 있도록 기초부터 작품 완성까지 단계별로 진행합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>발레의 기본기 익히기</p>
            <div className={styles.classStep}>
              <p>발레의 기본 포지션과 테크닉을 배우며 기초를 탄탄히 다집니다.</p>
              <p>플리에, 텐듀 등 핵심 동작과 몸의 정렬을 익혀 정확한 동작을 구현합니다.</p>
              <p>우아한 팔과 다리 선을 만들며 유연하게 동작을 연결하는 기술을 연습합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>발레의 리듬감과 표현력 강화</p>
            <div className={styles.classStep}>
              <p>프레이즈의 기초를 다지며 발레 특유의 리듬감과 음악적 감각을 체화합니다.</p>
              <p>음악과 동작을 조화롭게 연결하며 발레의 기본 표현력을 학습합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>기본 동작에서 작품으로 발전</p>
            <div className={styles.classStep}>
              <p>기본기를 활용해 발레 작품을 구성하는 과정을 배우고, 하나의 작품을 완성합니다.</p>
              <p>프레이즈를 심화하여 음악과 동작의 조화를 통해 작품의 완성도를 높입니다.</p>
            </div>
            <p className={styles.classSmallTitle}>발레의 예술적 깊이 탐구</p>
            <div className={styles.classStep}>
              <p>감정 표현과 이야기를 담아 발레 작품에 예술적 깊이를 더합니다.</p>
              <p>개인 및 그룹 작업을 통해 협업하며 정교하고 완성도 높은 작품을 창작합니다.</p>
            </div>
          </div>
          
          {/* 추천대상 */}
          <div className={styles.classCourseRecommend}>
            <p className={styles.classTitle}>추천 대상</p>
            <div className={styles.classStep}>
              <p>발레를 처음 접하시는 분부터 기초를 다지고 싶은 분</p>
              <p>기본기를 활용해 하나의 작품을 완성하고 싶은 분</p>
              <p>발레의 예술적 깊이를 경험하며 표현력을 키우고 싶은 분</p>
            </div>
          </div>
          <p className={styles.notice}>선생님 사정에 따라 커리큘럼 내용이 일부 변동될 수 있으며, 사전안내가 이루어질 예정입니다.</p>
        </div>
      </div>
    );
  }
  