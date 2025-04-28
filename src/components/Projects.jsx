import dashBoardImage from "../assets/images/dashboard.png";
import cartAnalysisImage from "../assets/images/cart-analysis.png";

function Projects() {
  return (
    <div>
      <div>
        <h1>무인 매장 관리 시스템 Daily24</h1>
        <h6>2025.02~2025.04(7주)</h6>

        <div>
          기여도 : 50% (2인 프로젝트) 기술 : react, tailwind css, springboot,
          mysql, slack, notion 역할 - 장바구니 분석 페이지 -
          재고/발주/폐기/유통기한 페이지 - 실시간 알림 - AI 챗봇
        </div>
      </div>
      {/* 스크롤 시 다음 div 나오도록 */}
      <div>
        <h2> 1. 프로젝트 개요</h2>
        <p>
          무인매장 점주를 위한 **스마트 매장 운영 솔루션**입니다. 기존 포스기의
          매출 통계 페이지의 숫자로 가득한 화면으로 점주에게 많은 정보를
          직관적으로 확인하기 힘들었습니다. 매출, 재고, 발주, 폐기 등 점주가
          매장을 운영하며 겪는 주요 문제들을 직관적으로 확인하고 도와줄 시스템을
          개발했습니다.
        </p>
        <hr></hr>
        <div className="flex g-10">
          <div>
            <h3>Overview</h3>
          </div>
          <img src={dashBoardImage} alt="대시보드 화면" />
        </div>

        {/* 스크롤 시 다음 div 나오도록 */}
        <div>
          <h2>프로젝트 구현 및 기술</h2>
          <h3>1. 장바구니 분석 페이지</h3>
          <hr></hr>
          <div className="flex fap-10">
            <div>
              <h6>Detail</h6>- 무슨무슨 기능이 있음
              <h6>Review</h6>- 분석 페이지에서의 겪은 어려움과 해결방법, 이로써
              얻은 역량 서술하기
            </div>
            <img src={cartAnalysisImage} alt="장바구니 분석 화면" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
