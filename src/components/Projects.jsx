import sogeumStory from "../assets/images/sogeumStory.png";
import daily24 from "../assets/images/daily24.png";

function Projects() {
  // 프로젝트 데이터
  const projectsData = [
    {
      id: 1,
      title: "Daily24 - 무인 매장 스마트 솔루션",
      image: daily24,
      githubUrl: "https://github.com/hyeyeon9/frontend",
      tags: ["React", "Tailwind CSS", "Spring Boot", "팀프로젝트"],
    },
    {
      id: 2,
      title: "SogeumStory - GeminiAI와 함께 만드는 소소한 이야기",
      image: sogeumStory,
      githubUrl: "https://github.com/hyeyeon9/SogeumStory",
      tags: ["React", "Flask", "Google Generative AI", "개인"],
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-8 bg-white">
      <div className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-10 w-1.5 bg-blue-500 rounded-full"></div>
          <h2 className="text-3xl font-bold text-gray-800">프로젝트</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={`${project.title} 화면`}
                  className="w-full h-48 object-cover hover:opacity-90 transition-opacity duration-300"
                />
              </a>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2 mt-3">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-500 hover:text-blue-700"
                  >
                    <svg
                      className="w-5 h-5 mr-2"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                    GitHub 보기
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
