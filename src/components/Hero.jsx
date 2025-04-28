import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaPython,
  FaAws,
} from "react-icons/fa";
import { SiTailwindcss, SiSpringboot, SiMysql, SiGithub } from "react-icons/si";

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center p-8 min-h-screen">
      {/* 사진 + 자기소개 */}
      <div className="flex gap-8">
        <img
          src="#"
          alt="내 사진"
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="text-left">
          <p>결국 해내는 개발자 구혜연입니다.</p>
          <p>화려한 아이디어보다는, 사용자에게 꼭 필요한 기능을 고민합니다.</p>
          <p>질문과 답변이 활발한 팀문화를 좋아합니다.</p>
        </div>
      </div>

      {/* 스킬 */}
      <div className="flex flex-col gap-5">
        <hr></hr>
        <h1 className="text-2xl">Skills</h1>
        <div className="flex flex-col">
          <h3>Frontend</h3>
          <div className="flex flex-wrap justify-start gap-8 mt-8">
            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaHtml5 size="50" color="#E34F26" />
              <p className="text-sm">HTML5</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaCss3Alt size="50" color="#1572B6" />
              <p className="text-sm">CSS3</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaJsSquare size="50" color="#F7DF1E" />
              <p className="text-sm">JavaScript</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaReact size="50" color="#61DBFB" />
              <p className="text-sm">React</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiTailwindcss size="50" color="#38B2AC" />
              <p className="text-sm">Tailwind</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          <h3>Backend</h3>
          <div className="flex flex-wrap justify-start gap-8 mt-8">
            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiSpringboot size="50" color="#6DB33F" />
              <p className="text-sm"> Spring Boot</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaPython size="50" color="#306998" />
              <p className="text-sm">Python</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiMysql size="50" color="#00758F" />
              <p className="text-sm">MySQL</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <FaAws size="50" color="#FF9900" />
              <p className="text-sm">AWS</p>
            </div>

            <div className="flex flex-col items-center hover:scale-110 transition">
              <SiGithub size="50" color="black" />
              <p className="text-sm">GitHub</p>
            </div>
          </div>
        </div>
      </div>

      {/* 학력 */}
      <div className="flex flex-col mt-10">
        <hr></hr>
        <div className="flex flex-col p-8">
          <h1 className="text-2xl">부경대학교</h1>
          <div className="mt-2 mb-2">
            <h3>컴퓨터공학과</h3>
            <p>2020.03 ~ 2025.02</p>
          </div>
          <p>
            컴퓨터공학과에서 기초 C언어부터 웹, 임베디드, 딥러닝까지 폭넓게
            학습했고, 3.97의 높은 학점으로 졸업했습니다. 대부분의 과목은
            중간·기말 대신 프로젝트를 통해 직접 만들어보면서 배웠으며, 이러한
            과정은 새로운 언어나 기술에 빠르게 적응하고, 주어진 문제를 스스로
            해결하는 역량을 키우는 데 큰 도움이 되었습니다.
          </p>
        </div>
        <hr></hr>

        <div className="flex flex-col p-8">
          <h1 className="text-2xl">(주)신세계아이앤씨</h1>
          <div className="mt-2 mb-2">
            <h3>AI플랫폼을 활용한 (리테일)서비스 개발 과정</h3>
            <p>2024.10. ~ 2025.04.</p>
          </div>
          <p>
            약 920시간 동안 강사님과 현직 프론트엔드 개발자 멘토링을 받으며 실무
            중심의 풀스택 개발 과정을 수료했습니다. 이를 통해 사용자 흐름을
            고려한 설계를 직접 해보며, 기획부터 배포까지 실질적인 역량을 키울 수
            있었습니다. 또한 같은 개발을 꿈꾸는 사람들을 만나 상황을 공유하고,
            팀협력의 중요성도 실감할 수 있는 경험이었습니다.
          </p>
        </div>
      </div>

      {/* 핵심 역량(강점) */}
      <div className="flex-col ">
        <hr></hr>
        <div className="flex-col p-8">
          <h1 className="text-2xl mb-4">"작은 꾸준함이 만든 단단한 기본기" </h1>
          <p>
            코로나 시절, 집에서 무력하게 있는것보다 기초 체력을 쌓으면서
            성장하고 싶은 욕구가 시작이었습니다. 친구들과 구글미트를 통한 가상
            스터디를 시작했고, 이후 부트캠프 수강 중에도 매주 2회 꾸준히 코딩
            테스트 스터디를 진행했습니다. 프론트엔드를 희망하면서도 CS지식과
            기본 알고리즘을 놓지 않았습니다. 꾸준한 연습덕분에 저는 새로운
            기술이나 환경에도 빠르게 이해라고 적용할 수 있는 실력을 갖출 수
            있었습니다.
          </p>
        </div>

        <div className="flex-col p-8">
          <h1 className="text-2xl mb-4">
            "믿을 수 있는 사람, 신뢰를 쌓는 사람"
          </h1>
          <p>
            혼자 잘하는 것보다, 함께 할 때 더 성장할 수 있다고 믿었습니다.
            그래서 팀 내 신뢰를 가장 중요한 가치로 생각했습니다. 학교 동기들과,
            혹은 처음 만난 사람들과 프로젝트를 할 때 항상 맡은 바를 확실히
            수행하고, 진행 상황과 목표를 적극적으로 공유했습니다. 이번
            프로젝트에서는 조장님을 서포트하며 책음을 나누어 맡았고, 개발 뿐만
            아니라 알바에서는 매번 마갑업무를 책임지면 '똑순이'라는 별명까지
            얻었습니다. 이로 항상 팀원들의 신뢰를 얻었고, 문제 상황에서도
            팀워크가 무너지지 않아 프로젝트 결과물도 일정 내에 안정적으로 완성할
            수 있었습니다.
          </p>
        </div>

        <div className="flex-col p-8">
          <h1 className="text-2xl mb-4">
            "어떤 상황에도 문제를 풀어내는 실행력"
          </h1>
          <p>
            프로젝트 중 팀원 이탈이라는 변수가 발생했지만, 당황하기보다 현실적인
            방안을 빠르게 고민했습니다. 남은 인원과 기간을 기준으로 핵심 기능을
            우선순위로 정하고, 꼭 필요한 기능부터 하나씩 완성하는 '스프린트
            개발' 방식으로 진행했습니다. 매일 노션에 우선순위별 체킈스트를
            정리하고, 집중력이 좋은 시간대에 가장 중요한 작업부터 해결햿습니다.
            그 결과, 기능별로 작은 목표들을 꾸준히 달성하면서 최종적으로 완성도
            높은 시스템을 구축할 수 있었고, 스프린트 개발의 힘을 직접 체감할 수
            있었습니다. 이 경험은 앞으로 실무에서도 유연하게 대처하고, 끝까지
            결과를 만들어내는 데 강력한 무기가 될 것입니다.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
