import { Github, ExternalLink, Sparkles, Workflow, Users, MessageCircle, Eye, Code } from "lucide-react";
import Image from "next/image";
import ContributorSlider, { type Contributor } from "@/components/ContributorSlider";

const contributors: Contributor[] = [
  {
    name: "Sean Preusse",
    location: "Sydney, Australia",
    focus: "Data & AI",
    image: "/contributors/sean.preusse.jpeg",
    github: "https://github.com/SeanPreusse",
    linkedin: "https://linkedin.com/in/seanpreusse"
  }
];

const projects = [
  {
    name: "Prompt Generator",
    description: "Build advanced prompt optimisation engine with AI scoring, recommendations - contributors needed for LLM evaluation algorithms. Built with Next.js 15, LangChain, Prism, and Shadcn.",
    subdomain: "prompts.turify.dev",
    github: "https://github.com/turify/turify-prompts",
    icon: <Sparkles className="w-8 h-8" />,
    image: "/Turify_main.png",
    benefits: [
      "Advanced prompt optimization engine",
      "AI scoring and recommendations",
      "LLM evaluation algorithms",
      "Built with modern tech stack"
    ],
    tags: ["AI", "Prompts", "LangChain", "Next.js 15"]
  },
  {
    name: "Diagrams Generator",
    description: "Open-source AI-powered diagramming tool built with Next.js 15, OpenAI GPT-4, and Excalidraw - revolutionising how developers create technical diagrams through natural language processing.",
    subdomain: "diagrams.turify.dev",
    github: "https://github.com/turify/turify-diagram",
    icon: <Workflow className="w-8 h-8" />,
    image: "/Turify_diagram_main.png",
    benefits: [
      "AI-powered diagram generation",
      "Natural language processing",
      "Built with GPT-4 and Excalidraw",
      "Technical diagram creation"
    ],
    tags: ["Diagrams", "GPT-4", "Excalidraw", "NLP"]
  },
  {
    name: "GenAI Obs",
    description: "Next-generation GenAI observation and prompt engineering platform - monitor, analyze, and optimise AI interactions with comprehensive observability tools and advanced prompt performance tracking.",
    subdomain: "obs.turify.dev",
    github: "https://github.com/turify/turify-obs",
    icon: <Eye className="w-8 h-8" />,
    image: null as string | null,
    benefits: [
      "GenAI observation and monitoring",
      "Advanced prompt engineering tools",
      "Performance tracking and analytics",
      "AI interaction optimisation"
    ],
    tags: ["Observability", "Monitoring", "Prompt Engineering", "Analytics"]
  }
];

export default function Home() {
  return (
    <div className="min-h-screen ">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 relative">
                <Image
                  src="/favicon/logo.png"
                  alt="Turify Logo"
                  width={40}
                  height={40}
                  className="rounded-lg"
                  priority
                />
              </div>
              <span className="text-2xl font-bold text-gray-900">Turify.dev</span>
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">Open Source AI Projects</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#purpose" className="text-gray-700 hover:text-blue-600 transition-colors">Purpose</a>
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
              <a href="https://discord.gg/wbXhARAPvK" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <MessageCircle className="w-4 h-4" />
                <span>Discord</span>
              </a>
              <a href="https://github.com/turify" className="text-gray-700 hover:text-blue-600 transition-colors flex items-center space-x-1">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        </div>
      </header>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Open Source AI Projects
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> AI Tools</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Empowering developers with cutting-edge AI tools for prompt optimisation and diagram generation. 
            Build, contribute, and innovate with our open source ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a 
              href="#purpose" 
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              Our Mission
            </a>
            <a 
              href="https://github.com/turify" 
              className="px-8 py-4 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors flex items-center space-x-2"
            >
              <Github className="w-5 h-5" />
              <span>View on GitHub</span>
            </a>
          </div>

          {/* Contributors Section */}
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-6">
              <p className="text-sm font-medium text-gray-600 mb-2">🌍 Trusted by developers worldwide</p>
              <h3 className="text-xl font-semibold text-gray-900">Built by our community ❤️</h3>
            </div>
            
            <ContributorSlider contributors={contributors} />
          </div>
        </div>
      </section>

      <section id="purpose" className="relative py-24 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full text-sm font-medium text-white/80 mb-6 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 mr-2" />
              Our Mission
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-tight">
              Revolutionising AI
              <span className="block bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 bg-clip-text text-transparent mt-2">
                Together
              </span>
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light">
              We believe AI development should be transparent, collaborative, and accessible to everyone. 
              Join our open source community to reshape how the world builds with artificial intelligence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                <Code className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Open Innovation</h3>
              <p className="text-white/80 leading-relaxed">
                Break down barriers in AI development. Every line of code, every breakthrough, shared with the global developer community.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-emerald-500/25 transition-all duration-300">
                <Users className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Community Driven</h3>
              <p className="text-white/80 leading-relaxed">
                Powered by passionate developers worldwide. Your ideas, contributions, and feedback shape the future of AI tooling.
              </p>
            </div>
            
            <div className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
              <div className="w-20 h-20 bg-gradient-to-br from-pink-400 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-pink-500/25 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">Democratize AI</h3>
              <p className="text-white/80 leading-relaxed">
                Make advanced AI capabilities accessible to every developer, startup, and organization - regardless of size or budget.
              </p>
            </div>
          </div>

          <div className="text-center">
            <div className="inline-block p-8 rounded-3xl bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm border border-white/20 mb-8">
              <p className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                &ldquo;The future of AI is open source&rdquo;
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a 
                  href="https://discord.gg/wbXhARAPvK" 
                  className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold hover:from-blue-500 hover:to-purple-500 transition-all transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
                >
                  <MessageCircle className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  <span>Join Our Community</span>
                </a>
                <a 
                  href="https://github.com/turify" 
                  className="inline-flex items-center space-x-3 px-8 py-4 border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/10 transition-all backdrop-blur-sm"
                >
                  <Github className="w-5 h-5" />
                  <span>Explore Projects</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our flagship open source projects that are revolutionizing AI-powered development tools.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative h-32 overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.name} Preview`}
                        fill
                        className="object-cover object-top transition-transform duration-300 hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center">
                      <div className="text-white opacity-20">
                        <Eye className="w-16 h-16" />
                      </div>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <div className="text-blue-600 bg-white/90 backdrop-blur-sm rounded-lg p-2 shadow-sm">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">{project.name}</h3>
                    <div className="flex gap-2">
                      {project.tags.slice(0, 2).map((tag, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description.replace(/🧠|🚀|🔍/g, '').trim()}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {project.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1 h-1 bg-blue-500 rounded-full flex-shrink-0"></div>
                          <span className="text-gray-600 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 mb-4">
                    {project.tags.slice(2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <a 
                      href={`https://${project.subdomain}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-medium text-sm text-center hover:shadow-md transition-all flex items-center justify-center space-x-1"
                    >
                      <ExternalLink className="w-3 h-3" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github}
                      className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm text-center hover:bg-gray-50 transition-colors flex items-center justify-center space-x-1"
                    >
                      <Github className="w-3 h-3" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="https://github.com/turify" 
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105"
            >
              <Github className="w-5 h-5" />
              <span>View All Projects on GitHub</span>
            </a>
          </div>
        </div>
      </section>



      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 relative">
                  <Image
                    src="/favicon/logo.png"
                    alt="Turify Logo"
                    width={32}
                    height={32}
                    className="rounded-lg"
                  />
                </div>
                <span className="text-xl font-bold">Turify</span>
              </div>
              <p className="text-gray-400 max-w-md">
                Building open source AI tools that empower developers to create better applications faster.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Projects</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://prompts.turify.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Turify Prompts</a></li>
                <li><a href="https://diagrams.turify.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Turify Diagrams</a></li>
                <li><a href="https://obs.turify.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Turify Obs</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="https://discord.gg/wbXhARAPvK" className="hover:text-white transition-colors">Discord Community</a></li>
                <li><a href="https://github.com/turify" className="hover:text-white transition-colors">GitHub Organization</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Turify. Open source and built with ❤️ for the developer community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
} 