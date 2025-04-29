import dashBoardImage from "../assets/images/dashboard.png";
import cartAnalysisImage from "../assets/images/cart-analysis.png";

function Projects() {
  return (
    <section className="w-full max-w-5xl mx-auto p-8 bg-white">
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
          <div className="mt-4">
            <p className="font-medium text-gray-700">담당 역할</p>
            <ul className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-2">
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-blue-500">•</span>
                장바구니 분석 페이지
              </li>
              <li className="flex items-center text-gray-600">
                <span className="mr-2 text-blue-500">•</span>
                재고/발주/폐기/유통기한 페이지
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
        <p className="text-gray-700 leading-relaxed mb-6">
          무인매장 점주를 위한{" "}
          <span className="font-semibold">스마트 매장 운영 솔루션</span>입니다.
          기존 포스기의 매출 통계 페이지는 숫자로 가득한 화면으로 점주에게 많은
          정보를 직관적으로 확인하기 힘들었습니다. 매출, 재고, 발주, 폐기 등
          점주가 매장을 운영하며 겪는 주요 문제들을 직관적으로 확인하고 도와줄
          시스템을 개발했습니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="md:w-1/2 p-6 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-800 mb-3">Overview</h3>
            <p className="text-gray-700">
              직관적인 대시보드를 통해 매장 운영에 필요한 핵심 정보를 한눈에
              파악할 수 있도록 설계했습니다. 데이터 시각화와 AI 기반 추천
              시스템으로 점주의 의사결정을 지원합니다.
            </p>
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
          <div className="md:w-1/2 p-6">
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

            <div>
              <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                Review
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">문제 상황</p>
                  <p>
                    Nivo의 기본 애니메이션과 커스터마이징 옵션이 풍부해, 복잡한
                    연관 데이터를 직관적으로 표현하기 적합했습니다. 히트맵 구현
                    과정에서 데이터 포맷이 맞지 않아 렌더링이 되지 않는 문제가
                    발생했습니다.
                  </p>
                  <p className="mt-2 font-medium text-blue-600">해결 방법</p>
                  <p>
                    Nivo 공식 문서의 데이터 포맷 예시를 참고해, indexBy, keys와
                    같은 필수 포맷을 맞춰 문제를 해결했습니다.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">문제 상황</p>
                  <p>
                    대시보드에서 사용되는 날짜 데이터를 현재 시간대 분석을 위해
                    사용하고 싶었는데, props로 계속 넘겨오기엔 구조가
                    복잡했습니다.
                  </p>
                  <p className="mt-2 font-medium text-blue-600">해결 방법</p>
                  <p>
                    Context API를 적용해 전역 상태로 관리해, 필요한 컴포넌트
                    어디서든 쉽게 접근할 수 있도록 개선했습니다.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">배운 점</p>
                  <p>
                    외부 라이브러리 문서를 적극적으로 참고해 문제를 해결하는
                    방법을 익히고, 상태를 전역으로 분리해 코드 구조를 더
                    깔끔하게 유지하는 경험을 할 수 있었습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={cartAnalysisImage || "/placeholder.svg"}
              alt="장바구니 분석 화면"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 발주 페이지 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            3
          </span>
          📦 발주 페이지
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          기본적인 발주를 진행하고, 점주의 발주를 돕기위해 7일 평균 판매량
          기반으로 추천 수량을 제공하는 기능을 구현했습니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="md:w-1/2 p-6">
            <div className="mb-6">
              <h3 className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full mb-3">
                Detail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    최근 7일 판매량을 기반으로 평균 일 판매량을 계산하고, 남은
                    재고 수량을 기반으로 하루 발주 추천 수량을 제공
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
                    초기에는 모든 상품 데이터를 한 번에 렌더링하는 구조였으나,
                    스크롤 시 추가 로딩(Infinite Scroll) 방식으로 변경해 초기
                    렌더링 성능을 개선
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                Review
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">문제 상황</p>
                  <p>
                    초기에는 전체 상품 데이터를 통째로 가져와 렌더링해, 페이지
                    로딩 속도가 느려지고 초기 메모리 사용량도 많아졌습니다.
                  </p>
                  <p className="mt-2 font-medium text-blue-600">해결 방법</p>
                  <ul className="mt-1 space-y-1">
                    <li>
                      • 상위 일부 상품만 먼저 렌더링하고, 사용자가 스크롤할
                      때마다 추가 데이터를 로딩하는 방식으로 변경
                    </li>
                    <li>
                      • 필요한 상품만 추천 수량을 계산해 네트워크 트래픽과
                      브라우저 부하를 최소화
                    </li>
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">배운 점</p>
                  <p>
                    실사용 환경에서는 단순 기능 구현뿐만 아니라 성능
                    최적화(렌더링/네트워크 최적화)가 중요하다는 것을
                    체감했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={cartAnalysisImage || "/placeholder.svg"}
              alt="발주 페이지 화면"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 실시간 알림 기능 */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
          <span className="w-8 h-8 bg-blue-500 rounded-full mr-3 flex items-center justify-center text-white">
            4
          </span>
          🔔 실시간 알림 기능
        </h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          무인매장 운영 중 결제, 재고 부족, 폐기 등 주요 이벤트를 실시간으로
          전달하는 기능입니다.
        </p>

        <div className="flex flex-col md:flex-row bg-gray-50 rounded-lg overflow-hidden shadow-sm">
          <div className="md:w-1/2 p-6">
            <div className="mb-6">
              <h3 className="inline-block px-4 py-2 bg-blue-500 text-white font-medium rounded-full mb-3">
                Detail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex">
                  <span className="text-blue-500 mr-2">→</span>
                  <span>
                    SSE(Server-Sent Events)를 활용해 서버에서 실시간으로 알림
                    수신
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
                    프론트엔드-백엔드 통신 구조를 이해하고, 안정적인 SSE 연결
                    흐름을 구현
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="inline-block px-4 py-2 bg-green-500 text-white font-medium rounded-full mb-3">
                Review
              </h3>
              <div className="space-y-3 text-gray-700">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">기술 선택 이유</p>
                  <p>
                    단순한 브라우저 단방향 통신 구조가 필요했기 때문에 SSE를
                    선택했습니다.
                  </p>
                </div>

                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <p className="font-medium text-gray-800">문제 상황</p>
                  <p>
                    브라우저 새로고침 시 SSE 연결이 끊기면서 알림이 모두
                    사라지는 문제가 발생했습니다. 또한 그 사이에 발생한 알림은
                    수신되지 않았습니다.
                  </p>
                  <p className="mt-2 font-medium text-blue-600">해결 방법</p>
                  <ul className="mt-1 space-y-1">
                    <li>
                      • 수신한 알림을 로컬스토리지에 저장해 새로고침 후에도
                      복구할 수 있도록 처리
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
                  <p className="font-medium text-gray-800">배운 점</p>
                  <p>
                    SSE와 브라우저 환경의 특성(연결 끊김, 재연결)에 대한 실전
                    경험을 쌓을 수 있었습니다. 클라이언트-서버 간 이벤트 통신
                    흐름을 이해하고, 알림 시스템의 신뢰성을 높이는 방법을
                    고민하는 경험을 했습니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src={cartAnalysisImage || "/placeholder.svg"}
              alt="실시간 알림 화면"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
