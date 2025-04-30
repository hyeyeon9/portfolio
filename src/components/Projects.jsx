import { FaGithub } from "react-icons/fa";
import dashBoardImage from "../assets/images/dashboard.png";
import cartImage from "../assets/images/cart.png";
import orderImage from "../assets/images/order.png";
import notificationmage from "../assets/images/notification.png";

function Projects() {
  return (
    <section className="w-full max-w-6xl mx-auto p-8 bg-white">
      <hr className="-mt-20 mb-10"></hr>
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
        <h2 className="text-3xl font-bold text-gray-800">프로젝트</h2>
      </div>
      {/* 프로젝트 헤더 */}
      <div className="mb-12">
        <h1 className="text-3xl font-bold text-gray-800">
          무인 매장 관리 시스템 Daily24
        </h1>
        <p className="text-gray-500 mt-2 font-light">2025.02~2025.04 (7주)</p>

        <div className="mt-4 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">기여도</p>
              <p className="text-gray-600">50% (2인 프로젝트)</p>
            </div>
            <div>
              <p className="font-medium text-gray-700">기술 스택</p>
              <p className="text-gray-600">
                React, Tailwind CSS, Spring Boot, MySQL, Slack, Notion
              </p>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">담당 역할</p>
              <ul className="mt-2 grid grid-cols-1 gap-2">
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">•</span>
                  장바구니 분석 페이지
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">•</span>
                  재고/발주/폐기/상품/유통기한 페이지
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">•</span>
                  실시간 알림
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="mr-2 text-blue-500">•</span>
                  AI 챗봇
                </li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-700">GitHub 레포지토리</p>
              <p className="mt-2 text-gray-600">
                <a
                  href="https://github.com/KDT7team1/backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline flex items-center"
                >
                  <FaGithub className="inline mr-2" />
                  github.com/KDT7team1/backend
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 개요 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            1
          </span>
          프로젝트 개요
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6 text-[16px]">
          무인매장 점주를 위한{" "}
          <span className="font-semibold">스마트 매장 운영 솔루션</span>입니다.
          기존 포스기의 매출 통계 페이지는 숫자로 가득한 화면으x로 점주에게 많은
          정보를 직관적으로 확인하기 힘들었습니다. <br></br>
          매출, 재고, 발주, 폐기 등 점주가 매장을 운영하며 겪는 주요 문제들을
          직관적으로 확인하고 도와줄 시스템을 개발했습니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="md:w-1/2 p-6 flex flex-col">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Overview</h3>

            <ul className="text-gray-700 space-y-2 text-[17px]">
              <li>
                • 매장 운영에 필요한 매출/재고/폐기/발주 관리 및 분석,<br></br>
                &nbsp;&nbsp;장바구니 분석 기능을 통합 제공
              </li>
              <li>
                • 점주는 웹 대시보드, 고객은 키오스크 화면을 통해 매장을 이용
              </li>
              <li>• 유통기한 기반 재고 관리 및 할인·폐기 처리 기능 구현</li>
              <li>
                • SSE 기반 실시간 알림으로 결제, 재고 부족, 폐기 상황 실시간
                대응
              </li>
              <li>
                • 장바구니 분석을 통해 연관 상품 추천 및 시간대별 판매 트렌드
                제공
              </li>
            </ul>
          </div>
          <div className="md:w-1/2">
            <img
              src={dashBoardImage || "/placeholder.svg"}
              alt="대시보드 화면"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 장바구니 분석 페이지 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            2
          </span>
          장바구니 분석 페이지
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          고객들의 연관 구매 패턴을 분석해 판매 전략에 활용할 수 있도록 지원하는
          기능입니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full mb-3">
                Detail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    Nivo 히트맵, 라인차트 라이브러리를 통해 연관 상품 조합과
                    최근 7일간 판매 추이를 시각화
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    React Context API를 사용해 대시보드의 시간대 데이터를 전역
                    관리해, 현재 시간대에 따른 조합 결과를 실시간으로 변경해
                    추천
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    연관 조합 top3와 해당 조합의 7일간 판매 추이를 함께 제공해,
                    점주가 데이터 기반으로 전략을 세울 수 있도록 UX를 설계
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 pr-0 md:pr-4">
                <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                  Review
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      문제 상황
                    </p>
                    <p>
                      Nivo의 기본 애니메이션과 커스터마이징 옵션이 풍부해,
                      복잡한 연관 데이터를 직관적으로 표현하기 적합했습니다.
                      히트맵 구현 과정에서 데이터 포맷이 맞지 않아 렌더링이 되지
                      않는 문제가 발생했습니다.
                    </p>
                    <p className="mt-2 font-semibold text-blue-600 text-[17px]">
                      해결 방법
                    </p>
                    <p>
                      Nivo 공식 문서의 데이터 포맷 예시를 참고해, indexBy,
                      keys와 같은 필수 포맷을 맞춰 문제를 해결했습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      문제 상황
                    </p>
                    <p>
                      대시보드에서 사용되는 날짜 데이터를 현재 시간대 분석을
                      위해 사용하고 싶었는데, props로 계속 넘겨오기엔 구조가
                      복잡했습니다.
                    </p>
                    <p className="mt-2 font-semibold text-blue-600 text-[17px]">
                      해결 방법
                    </p>
                    <p>
                      Context API를 적용해 전역 상태로 관리해, 필요한 컴포넌트
                      어디서든 쉽게 접근할 수 있도록 개선했습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      배운 점
                    </p>
                    <p>
                      외부 라이브러리 문서를 적극적으로 참고해 문제를 해결하는
                      방법을 익히고, 상태를 전역으로 분리해 코드 구조를 더
                      깔끔하게 유지하는 경험을 할 수 있었습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="h-full flex items-center justify-center">
                  <img
                    src={cartImage || "/placeholder.svg"}
                    alt="장바구니 분석 페이지"
                    className="max-w-full h-[360px] object-fill -mt-24"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 발주 페이지 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            3
          </span>
          발주 페이지
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          기본적인 발주를 진행하고, 점주의 발주를 돕기위해 7일 평균 판매량
          기반으로 추천 수량을 제공하는 기능을 구현했습니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full mb-3">
                Detail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    최근 7일 판매량을 기반으로 평균 일 판매량을 계산하고, 남은
                    재고 기반으로 발주 추천 수량을 제공
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    발주 추천 로직을 커스텀 훅(useOrderRecommendation)으로
                    분리해 로직 재사용과 가독성을 향상
                  </span>
                </li>

                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    전역 상태 관리에 Zustand 도입, 5개의 커스텀 훅으로 비지니스
                    로직 분리
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 pr-0 md:pr-4">
                <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                  Review
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      문제 상황
                    </p>
                    <p>
                      상품 선택후 selectedItems 와 추천 수량
                      (productRecommendations) 이 각각 비동기 업데이트되어
                      렌더링 타이밍이 어긋나, 클릭했는데 UI에 바로 반영되지 않는
                      UX 이슈가 있었습니다.
                    </p>
                    <p className="mt-2 font-semibold text-blue-600 text-[17px]">
                      해결 방법
                    </p>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • 체크박스 선택 상태 (selectedItems)만 로컬 useState 로
                        관리해 상품 클릭시 즉시 UI 반영해 UX 경험 개선
                      </li>
                      <li>
                        • 추후에는 Zustand의 selector 최적화(shallow
                        subscription)로 불필요한 리렌더링 최소화 계획
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      배운 점
                    </p>
                    <p>
                      커스텀 훅 + Zustand 조합으로 비지니스 로직과 UI 상태를
                      명확히 분리하는 패턴을 익혔습니다. 또한 상태 관리
                      라이브러리의 비동기 특성에 대응하는 전략을 고민하고,
                      유지보수성과 사용자 경험을 동시에 개선하는 방법을
                      배웠습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="h-full flex items-center justify-center">
                  <img
                    src={orderImage || "/placeholder.svg"}
                    alt="발주 페이지"
                    className="max-w-full h-[380px] object-fill mt-6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 실시간 알림 기능 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            4
          </span>
          실시간 알림 기능
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          무인매장에서 결제, 재고 부족, 폐기 같은 이벤트를 실시간으로 보여주는
          알림 드롭다운 UI를 구현했습니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="p-6">
            <div className="mb-6">
              <h3 className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full mb-3">
                Detail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    EventSource 기반 SSE(Server-Sent Events)로 단방향 실시간
                    알림 구현
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    LocalStorage를 이용해 수신된 알림을 저장해 새로고침 시에도
                    알림 유지
                  </span>
                </li>
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    탭(전체/결제/재고/폐기)별 알림 분류 및 배지 숫자 표시
                  </span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 pr-0 md:pr-4">
                <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                  Review
                </h3>
                <div className="space-y-3 text-gray-700">
                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      기술 선택 이유
                    </p>
                    <p>
                      단순한 브라우저 단방향 통신 구조가 필요했기 때문에 가벼운
                      SSE를 선택했습니다.
                    </p>
                  </div>

                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      문제 상황
                    </p>
                    <p>
                      새로고침 시 SSE 연결이 끊기면서 기존 알림이 사라지고, 끊긴
                      동안 발생한 아밴틀를 놓치는 이슈가 있었습니다.
                    </p>
                    <p className="mt-2 font-semibold text-blue-600 text-[17px]">
                      해결 방법
                    </p>
                    <ul className="mt-1 space-y-1">
                      <li>
                        • 수신한 알림을 LocalStorage에 저장해 새로고침 후에도
                        복원할 수 있도록 처리
                      </li>
                      <li>
                        • SSE 연결이 끊어질 경우, 3초마다 재귀적으로 재연결
                        시도하는 로직을 작성해 자동 복구
                      </li>
                      <li>
                        • 수신되지 않는 알림은 1차적으로 DB에 저장하고, 재연결시
                        미수신 알림을 보내는 구조로 보완
                      </li>
                    </ul>
                  </div>

                  <div className="p-3 bg-white rounded-lg shadow-sm">
                    <p className="font-semibold text-gray-800 text-[17px]">
                      배운 점
                    </p>
                    <p>
                      SSE와 브라우저 환경의 특성(끊김·재연결)에 대한 실전 경험을
                      쌓을 수 있었습니다. 클라이언트-서버 간 이벤트 통신 흐름을
                      이해하고, 알림 시스템의 신뢰성을 높이는 방법을 고민하는
                      경험을 했습니다.
                    </p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 mt-4 md:mt-0">
                <div className="h-full flex items-center justify-center">
                  <img
                    src={notificationmage || "/placeholder.svg"}
                    alt="알림창 화면"
                    className="max-w-[450px] h-auto object-contain mt-8"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 프로젝트 회고 */}
      {/* 프로젝트 회고 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            5
          </span>
          프로젝트 회고
        </h2>

        <div className="bg-gray-50 rounded-lg overflow-hidden shadow-sm p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            <div className="flex items-start gap-8">
              <div className="w-[140px] h-[140px] bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-medium text-center">
                  도메인 지식
                </span>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-gray-700">
                  편의점을 운영하시는 부모님이 계신 조장님 덕분에,
                  <span className="font-semibold"> 실제 운영 관점</span>
                  에서 필요한 기능들을 함께 고민할 수 있었습니다.
                </p>
                <p className="text-gray-700">
                  ✓ 그 과정에서{" "}
                  <span className="font-semibold">
                    '발주 수량 추천', '폐기 집중관리'
                  </span>
                  등 점주에게 실질적인 도움이 되는 기능을 기획하고 구현할 수
                  있었습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-[140px] h-[140px] bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-medium text-center">
                  백엔드와의 연결
                </span>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-gray-700">
                  CRUD API를 프론트에 연동하며 데이터 구조를 <br></br>이해하고,
                  연관 테이블 구조에 맞춰
                  <span className="font-semibold">
                    {" "}
                    커스텀 훅으로 분리해 재사용 가능한 컴포넌트
                  </span>
                  를 만들었습니다.
                </p>
                <p className="text-gray-700">
                  ✓ 이 과정에서 프론트엔드 개발자도 백엔드의 설계를 이해해야
                  한다는 점을 깨달았습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-[140px] h-[140px] bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-medium text-center">
                  스프린트 개발
                </span>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-gray-700">
                  팀원 이탈이라는 변수 속에서도,{" "}
                  <span className="font-semibold">기능의 우선순위</span>를
                  정하고 작은 단위로 빠르게 구현하는 스프린트 방식으로
                  진행했습니다.
                </p>
                <p className="text-gray-700">
                  ✓ 덕분에 작은 기능들이 차곡차곡 쌓이며, 완성도 높은 결과물로
                  이어질 수 있었습니다.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-8">
              <div className="w-[140px] h-[140px] bg-yellow-200 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-[20px] font-medium text-center">
                  UX 개선
                </span>
              </div>
              <div className="space-y-4 flex-1">
                <p className="text-gray-700">
                  장바구니 분석에서는 Top3 조합의 최근 판매 추이를 함께
                  시각화해, 트랜드 기반의 진열 전략 수립을 도왔습니다.
                </p>
                <p className="text-gray-700">
                  ✓ 단순한 시각화를 넘어, 실질적인 액션을 유도하는 UX의 중요성을
                  체감했습니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
