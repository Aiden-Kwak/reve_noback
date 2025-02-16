import { Color } from "three";
import styles from "../class.module.css";

export default function BalletPage() {
    return (
      <div className={styles.classContainer}>
        {/* 카드 영역 구분용 */}
        <div className={styles.teacherCard}>
          <div className={`${styles.teacherImage} teacherCard-item`}>
            <img src="/teacherProfile/special2.png" alt="ballet" />
          </div>
          <div className={`${styles.teacherInfo} teacherCard-item`}>
            <p className={styles.teacherName}><span className={`${styles.tag} ${styles.balletTag}`}>현대무용</span>최문선</p>
            <div className={styles.teacherInfoDetail}>
              <p>- 국민대학교 일반대학원 박사 재학</p>
              <p>- 연기 특기생 및 무용전공자 강사</p>
              <p>- 두아코 댄스컴퍼니 정단원</p>
              <p>- 현) 고양예고 현대무용 강사</p>
            </div>
          </div>
        </div>
        {/* 여기부턴 내용 설명*/}
        <div className={styles.classDetail}>
          {/* 입문반 설명 */}
          <div className={styles.classBasicInfo}>
            <p className={styles.classTitle}>주요 커리큘럼(작품반)</p>
            <div className={styles.classHead}>
              <p>김혜현, 최문선 강사님과 함께 현대무용의 테크닉과 창의적인 움직임을 활용하여 하나의 작품을 완성하는 수업입니다. 안무 구성과 감정 표현을 심화적으로 배우며, 움직임을 통해 자신만의 예술적 해석과 표현력을 발전시킬 수 있습니다.</p>
              <p style={{color:'#7E3B98'}}>* 본 강좌에 김혜현 강사님은 월 1~2회 참석하시며, 일정은 확정시 사전 안내드립니다</p>
            </div>

            <p className={styles.classSmallTitle}>테크닉과 움직임의 확장</p>
            <div className={styles.classStep}>
              <p>기초 동작을 심화하여 보다 정교하고 세밀한 움직임을 연습합니다.</p>
              <p>현대무용의 흐름과 공간활용을 극대화하는 기술을 익힙니다.</p>
            </div>
            <p className={styles.classSmallTitle}>프레이즈 심화 및 음악 해석</p>
            <div className={styles.classStep}>
              <p>기존 동작을 활용하여 안무를 구성하고 음악과 조화롭게 표현하는 방법을 학습합니다.</p>
              <p>리듬과 감정을 결합해 움직임을 보다 자연스럽게 연결합니다.</p>
            </div>
            <p className={styles.classSmallTitle}>감정표현과 내러티브 개발</p>
            <div className={styles.classStep}>
              <p>개인의 감정과 이야기를 움직임으로 표현하는 심화된 기법을 연습합니다.</p>
              <p>즉흥적인 움직임을 활용하여 작품 속에서 개성과 메세지를 전달하는 방법을 익힙니다.</p>
            </div>
            <p className={styles.classSmallTitle}>그룹 중심 작품 창작 및 퍼포먼스 연습</p>
            <div className={styles.classStep}>
              <p>협업 안무 구성을 연습하며, 개인 솔로 동작과 그룹 무브먼트를 조화롭게 연결합니다.</p>
              <p>단체 움직임을 통해 무대에서의 상호작용을 강화하고, 완성도 높은 그룹 작품을 창작합니다.</p>
            </div>
            
          </div>
          
          {/* 추천대상 */}
          <div className={styles.classCourseRecommend}>
            <p className={styles.classTitle}>추천 대상</p>
            <div className={styles.classStep}>
              <p>현대무용의 테크닉을 심화하고 하나의 작품을 완성해 보고 싶은 분</p>
              <p>안무 구성과 감정 표현을 배우며 예술적 표현력을 키우고 싶은 분</p>
              <p>움직임을 통해 자신만의 해석과 스타일을 탐구하고 싶은 분</p>
            </div>
          </div>
          <p className={styles.notice}>선생님 사정에 따라 커리큘럼 내용이 일부 변동될 수 있으며, 사전안내가 이루어질 예정입니다.</p>
        </div>
      </div>
    );
  }
  