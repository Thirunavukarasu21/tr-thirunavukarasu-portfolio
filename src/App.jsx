import { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'

// Skill bar component with animation
function SkillBar({ name, level = 85, delay = 0 }) {
  return (
    <div className="group">
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-slate-300 group-hover:text-cyan-400 transition-colors font-medium">{name}</span>
        <span className="text-cyan-400/80 font-mono text-xs">{level}%</span>
      </div>
      <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full skill-bar-fill"
          style={{ '--level': level / 100, animationDelay: `${delay}ms` }}
        />
      </div>
    </div>
  )
}

// Section wrapper with consistent styling
function Section({ id, title, children, icon }) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="flex items-center gap-3 text-xl font-semibold text-cyan-400 mb-6 print:text-slate-800">
        <span className="text-2xl">{icon}</span>
        {title}
      </h2>
      {children}
    </section>
  )
}

// Project card with hover effects
function ProjectCard({ title, description, stack, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 rounded-xl bg-slate-800/60 border border-slate-700/50 hover:border-cyan-500/50 hover:shadow-glow transition-all duration-300 hover:-translate-y-1 group print:border-slate-200 print:bg-slate-50"
    >
      <h3 className="font-semibold text-lg text-slate-100 group-hover:text-cyan-400 transition-colors print:text-slate-900">
        {title}
      </h3>
      <p className="text-slate-400 text-sm mt-2 leading-relaxed print:text-slate-700">{description}</p>
      <div className="flex flex-wrap gap-2 mt-4">
        {stack.map((tech) => (
          <span
            key={tech}
            className="px-2.5 py-1 text-xs font-mono bg-cyan-500/10 text-cyan-400 rounded border border-cyan-500/20 print:bg-cyan-50 print:text-cyan-800 print:border-cyan-200"
          >
            {tech}
          </span>
        ))}
      </div>
    </a>
  )
}

export default function App() {
  const resumeRef = useRef(null)
  const handlePrint = useReactToPrint({
    contentRef: resumeRef,
    documentTitle: 'T.R-Thirunavukarasu-Cybersecurity-Resume',
    pageStyle: `
      @page { margin: 1cm; size: A4; }
      body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
    `,
  })

  const skillGroups = [
    {
      title: 'Security & Analysis',
      items: [
        { name: 'Threat Analysis', level: 90 },
        { name: 'Vulnerability Assessment', level: 88 },
        { name: 'Penetration Testing', level: 85 },
        { name: 'SIEM Monitoring', level: 87 },
        { name: 'Endpoint Detection & Response (EDR)', level: 82 },
      ],
    },
    {
      title: 'Languages & Scripting',
      items: [
        { name: 'Python', level: 88 },
        { name: 'Bash', level: 85 },
        { name: 'SQL', level: 86 },
        { name: 'PowerShell', level: 80 },
        { name: 'FastAPI', level: 84 },
      ],
    },
    {
      title: 'Tools & Platforms',
      items: [
        { name: 'Nessus / Wireshark / Nmap', level: 85 },
        { name: 'Burp Suite / OWASP ZAP / Metasploit', level: 83 },
        { name: 'AWS / Microsoft Azure', level: 82 },
        { name: 'Docker / Kubernetes', level: 80 },
        { name: 'Linux Administration', level: 86 },
      ],
    },
    {
      title: 'Frameworks & Soft Skills',
      items: [
        { name: 'NIST Cybersecurity Framework', level: 85 },
        { name: 'Zero Trust Architecture', level: 82 },
        { name: 'Risk Assessment', level: 88 },
        { name: 'Data validation, reporting, documentation', level: 90 },
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Floating actions: PDF + section nav */}
      <nav className="no-print fixed top-6 right-6 z-50 flex items-center gap-3">
        <div className="hidden sm:flex gap-2">
          {['summary', 'skills', 'education', 'experience', 'projects', 'certifications'].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className="px-3 py-1.5 text-xs font-medium rounded-lg bg-slate-800/80 text-slate-300 hover:text-cyan-400 hover:bg-slate-700/80 transition-colors"
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
        <button
          onClick={handlePrint}
          className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold shadow-glow transition-all hover:scale-105 active:scale-95"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Export to PDF
        </button>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-12 pb-24 print:py-0 print:max-w-none">
        <div ref={resumeRef} className="space-y-12 print:space-y-8 print:text-slate-900">
          {/* Header / Personal Info */}
          <header className="text-center space-y-4 animate-fade-in">
            <h1 className="text-4xl font-bold tracking-tight text-white print:text-slate-900">
              T.R Thirunavukarasu
            </h1>
            <p className="text-cyan-400 font-medium">Cybersecurity Engineer</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-400 print:text-slate-700">
              <a href="mailto:santhosh21.tr.thiru@gmail.com" className="hover:text-cyan-400 transition-colors">
                santhosh21.tr.thiru@gmail.com
              </a>
              <a href="tel:9363094921" className="hover:text-cyan-400 transition-colors">
                +91 9363094921
              </a>
              <a
                href="https://www.linkedin.com/in/thirunavukarasu-thirupathi-05550b320/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors"
              >
                LinkedIn
              </a>
              <span>Tamil Nadu, India</span>
            </div>
          </header>

          {/* Professional Summary */}
          <Section id="summary" title="Professional Summary" icon="📋">
            <p className="text-slate-300 leading-relaxed print:text-slate-700">
              Motivated Cybersecurity Engineer fresher with hands-on experience in threat analysis, penetration
              testing, SIEM monitoring, vulnerability assessment, and IT support. Strong problem-solving and
              communication skills. Passionate about securing IT infrastructure and improving organizational
              security posture.
            </p>
          </Section>

          {/* Skills */}
          <Section id="skills" title="Skills" icon="🛡️">
            <div className="grid gap-8 sm:grid-cols-2">
              {skillGroups.map((group, gi) => (
                <div
                  key={group.title}
                  className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors print:bg-slate-50 print:border-slate-200"
                  style={{ animation: 'slideUp 0.5s ease-out forwards', animationDelay: `${gi * 0.1}s`, opacity: 0 }}
                  onAnimationEnd={(e) => { e.currentTarget.style.opacity = 1 }}
                >
                  <h3 className="text-sm font-semibold text-cyan-400 mb-4 print:text-slate-800">
                    {group.title}
                  </h3>
                  <div className="space-y-4">
                    {group.items.map((item, i) => (
                      <SkillBar
                        key={item.name}
                        name={item.name}
                        level={item.level}
                        delay={200 + gi * 80 + i * 50}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>

          {/* Education */}
          <Section id="education" title="Education" icon="🎓">
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
              <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                Bachelor of Engineering in Computer Science & Engineering
              </h3>
              <p className="text-cyan-400 font-medium mt-1">Sri Venkateswara College of Engineering</p>
              <p className="text-slate-400 text-sm mt-2 print:text-slate-700">2023 – Present</p>
              <p className="text-slate-300 mt-1 print:text-slate-700">
                <span className="font-medium text-cyan-400 print:text-slate-800">GPA:</span> 7.42/10
              </p>
            </div>
          </Section>

          {/* Experience */}
          <Section id="experience" title="Internships / Experience" icon="💼">
            <div className="space-y-6">
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors print:bg-slate-50 print:border-slate-200">
                <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                  SPIC – Technical Support Intern
                </h3>
                <p className="text-cyan-400 text-sm mt-1">Dec 2025 – Jan 2026</p>
                <ul className="mt-3 space-y-1.5 text-slate-300 text-sm list-disc list-inside print:text-slate-700">
                  <li>Troubleshot internal enterprise applications</li>
                  <li>Assisted in documentation and reporting</li>
                  <li>Supported data validation</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-cyan-500/30 transition-colors print:bg-slate-50 print:border-slate-200">
                <h3 className="font-semibold text-lg text-slate-100 print:text-slate-900">
                  Turbo Energy Private Limited – Enterprise Applications & Database Intern
                </h3>
                <p className="text-cyan-400 text-sm mt-1">June 2025 – July 2025</p>
                <ul className="mt-3 space-y-1.5 text-slate-300 text-sm list-disc list-inside print:text-slate-700">
                  <li>Maintained internal applications and databases</li>
                  <li>Performed data validation and reporting</li>
                </ul>
              </div>
            </div>
          </Section>

          {/* Projects */}
          <Section id="projects" title="Projects" icon="🚀">
            <div className="grid gap-6 sm:grid-cols-2">
              <ProjectCard
                title="AltCred"
                description="Backend system for alternative credit scoring using modern Python stack."
                stack={['Python', 'Flask', 'SQLite']}
                link="#"
              />
              <ProjectCard
                title="Rusi"
                description="AI-powered Kitchen Management System with FastAPI backend and React frontend."
                stack={['FastAPI', 'React', 'MongoDB']}
                link="#"
              />
            </div>
          </Section>

          {/* Certifications */}
          <Section id="certifications" title="Certifications / Achievements" icon="🏆">
            <div className="p-5 rounded-xl bg-slate-800/40 border border-slate-700/50 print:bg-slate-50 print:border-slate-200">
              <p className="text-slate-100 font-medium print:text-slate-900">
                NPTEL: Ethical Hacking Certificate
              </p>
            </div>
          </Section>

          {/* References */}
          <footer className="text-center pt-8 border-t border-slate-700/50 print:border-slate-200">
            <p className="text-slate-400 text-sm italic print:text-slate-600">
              References available upon request
            </p>
          </footer>
        </div>
      </main>
    </div>
  )
}
