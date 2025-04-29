import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaAws,
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaGraduationCap,
  FaBriefcase,
  FaStar,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
  SiGithub,
  SiVelog,
} from "react-icons/si";

function Hero() {
  return (
    <section className="max-w-5xl w-full mx-auto p-8 bg-white">
      {/* 헤더 섹션: 이름 + 연락처 */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-12 gap-6">
        <div className="text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-bold">구혜연</h1>
          <h3 className="text-xl md:text-2xl font-light mt-2 text-gray-600">
            프론트엔드 개발자
          </h3>
        </div>

        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-4">
            <a
              href="https://github.com/hyeyeon9"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={30} color="#181717" />
            </a>
            <a
              href="https://velog.io/@yeon_99/posts"
              className="p-3 bg-gray-100 rounded-full hover:bg-gray-200 transition-all duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiVelog size={30} color="#20C997" />
            </a>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex items-center gap-2 text-gray-700">
              <span>010-8846-1029</span>
              <FaPhone className="text-blue-500" />
            </div>
            <div className="flex items-center gap-2 text-gray-700">
              <span>ik0n44@naver.com</span>
              <FaEnvelope className="text-blue-500" />
            </div>
          </div>
        </div>
      </div>

      {/* 자기소개 섹션 */}
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start bg-gray-50 p-6 rounded-xl shadow-sm mb-16">
        <div className="relative">
          <div className="w-40 h-40 rounded-full p-1">
            <div className="w-full h-full rounded-full overflow-hidden bg-white">
              <img
                src="#"
                alt="내 사진"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            안녕하세요, 구혜연입니다.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            사용자에게 필요한 기능을 고민하고, 단순 정보 전달이 아닌 행동
            유도까지 고려하는 프론트앤드 개발자로 성장중입니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            질문과 피드백을 활발히 주고받는 문화를 만들어, 팀과 함께 성장하는
            경험을 소중히 생각합니다.
          </p>
          <p className="text-gray-700 leading-relaxed">
            맡은 일은 끝까지 책임지고, 동료에게 신뢰받는 개발자가 되기 위해 항상
            노력합니다.
          </p>
        </div>
      </div>

      {/* 스킬 섹션 */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">Skills</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* 프론트엔드 스킬 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
              
              Frontend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaHtml5 size="40" color="#E34F26" />
                </div>
                <p className="text-sm font-medium">HTML5</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaCss3Alt size="40" color="#1572B6" />
                </div>
                <p className="text-sm font-medium">CSS3</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaJsSquare size="40" color="#F7DF1E" />
                </div>
                <p className="text-sm font-medium">JavaScript</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaReact size="40" color="#61DBFB" />
                </div>
                <p className="text-sm font-medium">React</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <SiTailwindcss size="40" color="#38B2AC" />
                </div>
                <p className="text-sm font-medium">Tailwind</p>
              </div>
            </div>
          </div>

          {/* 백엔드 스킬 */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
            
              Backend
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-6">
              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <SiSpringboot size="40" color="#6DB33F" />
                </div>
                <p className="text-sm font-medium whitespace-nowrap">
                  Spring Boot
                </p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaPython size="40" color="#306998" />
                </div>
                <p className="text-sm font-medium">Python</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <SiMysql size="40" color="#00758F" />
                </div>
                <p className="text-sm font-medium">MySQL</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <FaAws size="40" color="#FF9900" />
                </div>
                <p className="text-sm font-medium">AWS</p>
              </div>

              <div className="flex flex-col items-center hover:scale-110 transition duration-300">
                <div className="p-4 bg-gray-50 rounded-lg mb-2">
                  <SiGithub size="40" color="black" />
                </div>
                <p className="text-sm font-medium">GitHub</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 학력 및 경력 섹션 */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">학력 및 경력</h2>
        </div>

        {/* 부경대학교 */}
        <div className="mb-8 bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/6">
              <div className="flex items-center gap-3 mb-4">
                <FaGraduationCap size={24} className="text-blue-500" />
                <h3 className="text-2xl font-bold text-gray-800">부경대학교</h3>
              </div>
              <div className="text-gray-600">
                <p className="font-medium">컴퓨터공학과</p>
                <p className="text-sm">2020.03 ~ 2025.02</p>
                <div className="mt-2 inline-block bg-gray-100 text-xs px-2 py-1 rounded-full">
                  학점 3.97
                </div>
              </div>
            </div>
            <div className="md:w-4/6">
              <p className="text-gray-700 leading-relaxed">
                컴퓨터공학과에서 기초 C언어부터 웹, 임베디드, 딥러닝까지 폭넓게
                학습했고, 3.97의 높은 학점으로 졸업했습니다. 대부분의 과목은
                중간·기말 대신 프로젝트를 통해 직접 만들어보면서 배웠으며,
                이러한 과정은 새로운 언어나 기술에 빠르게 적응하고, 주어진
                문제를 스스로 해결하는 역량을 키우는 데 큰 도움이 되었습니다.
              </p>
            </div>
          </div>
        </div>

        {/* 신세계아이앤씨 */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-2/6">
              <div className="flex items-center gap-3 mb-4">
                <FaBriefcase size={24} className="text-orange-500" />
                <h3 className="text-2xl font-bold text-gray-800">
                  (주)신세계아이앤씨
                </h3>
              </div>
              <div className="text-gray-600">
                <p className="font-medium">
                  AI플랫폼을 활용한 (리테일)서비스 개발 과정
                </p>
                <p className="text-sm">2024.10. ~ 2025.04.</p>
                <div className="mt-2 inline-block bg-gray-100 text-xs px-2 py-1 rounded-full">
                  920시간
                </div>
              </div>
            </div>
            <div className="md:w-4/6">
              <p className="text-gray-700 leading-relaxed">
                약 920시간 동안 강사님과 현직 프론트엔드 개발자 멘토링을 받으며
                실무 중심의 풀스택 개발 과정을 수료했습니다. 이를 통해 사용자
                흐름을 고려한 설계를 직접 해보며, 기획부터 배포까지 실질적인
                역량을 키울 수 있었습니다. 또한 같은 개발을 꿈꾸는 사람들을 만나
                상황을 공유하고, 팀협력의 중요성도 실감할 수 있는
                경험이었습니다.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 핵심 역량 섹션 */}
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="h-10 w-1 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">핵심 역량</h2>
        </div>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                "작은 꾸준함이 만든 단단한 기본기"
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              코로나 시절, 집에서 무력하게 있는것보다 기초 체력을 쌓으면서
              성장하고 싶은 욕구가 시작이었습니다. 친구들과 구글미트를 통한 가상
              스터디를 시작했고, 이후 부트캠프 수강 중에도 매주 2회 꾸준히 코딩
              테스트 스터디를 진행했습니다. 프론트엔드를 희망하면서도 CS지식과
              기본 알고리즘을 놓지 않았습니다. 꾸준한 연습덕분에 저는 새로운
              기술이나 환경에도 빠르게 이해라고 적용할 수 있는 실력을 갖출 수
              있었습니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                "믿을 수 있는 사람, 신뢰를 쌓는 사람"
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              혼자 잘하는 것보다, 함께 할 때 더 성장할 수 있다고 믿었습니다.
              그래서 팀 내 신뢰를 가장 중요한 가치로 생각했습니다. 학교
              동기들과, 혹은 처음 만난 사람들과 프로젝트를 할 때 항상 맡은 바를
              확실히 수행하고, 진행 상황과 목표를 적극적으로 공유했습니다. 이번
              프로젝트에서는 조장님을 서포트하며 책음을 나누어 맡았고, 개발 뿐만
              아니라 알바에서는 매번 마갑업무를 책임지면 '똑순이'라는 별명까지
              얻었습니다. 이로 항상 팀원들의 신뢰를 얻었고, 문제 상황에서도
              팀워크가 무너지지 않아 프로젝트 결과물도 일정 내에 안정적으로
              완성할 수 있었습니다.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-4">
              <h3 className="text-xl font-bold text-gray-800">
                "어떤 상황에도 문제를 풀어내는 실행력"
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              프로젝트 중 팀원 이탈이라는 변수가 발생했지만, 당황하기보다
              현실적인 방안을 빠르게 고민했습니다. 남은 인원과 기간을 기준으로
              핵심 기능을 우선순위로 정하고, 꼭 필요한 기능부터 하나씩 완성하는
              '스프린트 개발' 방식으로 진행했습니다. 매일 노션에 우선순위별
              체킈스트를 정리하고, 집중력이 좋은 시간대에 가장 중요한 작업부터
              해결햿습니다. 그 결과, 기능별로 작은 목표들을 꾸준히 달성하면서
              최종적으로 완성도 높은 시스템을 구축할 수 있었고, 스프린트 개발의
              힘을 직접 체감할 수 있었습니다. 이 경험은 앞으로 실무에서도
              유연하게 대처하고, 끝까지 결과를 만들어내는 데 강력한 무기가 될
              것입니다.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
